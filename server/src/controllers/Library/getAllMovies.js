const cloudscraper = require('cloudscraper');
const getAllMovies = (filter) => {
    return new Promise((resolve, reject) => (
        cloudscraper.get(`https://yts.megaproxy.info/api/v2/list_movies.json?limit=50&sort_by=download_count&order_by=desc&page=${filter.page}`)
        .then(resp => {
            let result2 = JSON.parse(resp);
            console.log("hamalo hamalo ")
            if(result2.status === 'ok' && result2.data.movies.length > 0)
            {
                result2.data.movies.sort((a, b) => {return b.rating - a.rating})
                resolve(result2.data.movies);
            }
            else
            {
                console.log("here")
                cloudscraper.get(`https://yts.megaproxy.info/api/v2/list_movies.json?limit=50&sort_by=download_count&order_by=desc&page=${filter.page}`)
                .then(resp => {
                    let result2 = JSON.parse(resp);
                    if(result2.status === 'ok' && result2.data.movies.length > 0)
                    {
                        result2.data.movies.sort((a, b) => {return b.rating - a.rating})
                        resolve(result2.data.movies);
                    }
                    else
                        resolve([]);
                })
                .catch(err => {});
            }
        })
        .catch(err => {console.log("error no")})
    ))
}
module.exports = getAllMovies;