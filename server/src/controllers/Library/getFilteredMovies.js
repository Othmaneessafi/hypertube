const cloudscraper = require('cloudscraper');
const getFilteredMovies = (filter) => {
    return new Promise((resolve, reject) => {
        console.log("dkhqlllllllllll")
        const obj = {
            category: filter.category === null  ? '' : filter.category,
            sortBy: filter.sortBy === null ? 'title' : filter.sortBy,
            orderPopCorn: filter.sortBy === null ? '1' : '-1',
            orderYts: filter.sortBy === null ? 'asc' : 'desc',
        }
        console.log(obj.category, 'category==============')
        cloudscraper.get(`http://api.pctapi.com/list?sort=${obj.sortBy}&short=1&quality=720p,1080p,3d&page=${filter.page}&genre=${obj.category}`)
        .then(resp => {
            let result1 = JSON.parse(resp);
            if(result1.MovieList.length > 0 )
            {
                resolve(result1.MovieList);
            }
            else
            {
                obj = {
                    sortBy: filter.sortBy === null ? 'title' : (filter.sortBy === 'dateadded' ? 'last_added' : filter.sortBy),
                }
                cloudscraper.get(`https://yts.megaproxy.info/api/v2/list_movies.json?limit=50&page=${filter.page}?genre=${obj.category}&sort_by=${obj.sortBy}&order=${obj.orderPopCorn}`)
                .then(resp => {
                    let result2 = JSON.parse(resp);
                    if(result2.status === 'ok' && result2.data.movies.length > 0)
                    {

                        resolve(result2.data.movies);
                    }
                })
                .catch(err => {});
            }
        })
        .catch(err => {})
    })
}
module.exports = getFilteredMovies;