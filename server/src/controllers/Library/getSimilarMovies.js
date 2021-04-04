
const unirest = require("unirest");
const tools = require("../../tools")
getMovieDataById =  (id) => {
    return new Promise((resolve, reject)=>{
        let imdb = null;
    // var req =  unirest("GET",
    // `https://api.themoviedb.org/3/movie/${id}?api_key=0f87bface5c69fcf394fc387f33049fa&language=en-US`);
    // req.end(function (result) {
    //     if (result.error) console.log('sss')
    //     if(result.body.imdb_id)
    //         imdb = result.body.imdb_id;
    //     resolve( imdb); 
    // })
    
})    
}
const getSimilarMovies = async (req,res) =>{
    const data = req.body;
    let imdb = data.code;
    if(data.type === "id")
    {
       let temp = await getMovieDataById(data.code)
       if(temp !== null)
            imdb = temp;
    }
    //const imdb = req.body.imdb;
    //  var req = unirest("GET",
    //     `http://api.themoviedb.org/3/movie/${imdb}/similar?api_key=0f87bface5c69fcf394fc387f33049fa`);
    //     req.end(function (result) {
    //         if (result.error) console.log('result.error')
    //         let data = result.body;
    //         if(data)
    //             res.send(data)
    //         else
    //             res.send(null)
    //     });
    var req = unirest("GET", "https://movies-tvshows-data-imdb.p.rapidapi.com/");

    req.query({
        "type": "get-similar-movies",
        "imdb": imdb,
        "page": "1"
    });

    req.headers({
        "x-rapidapi-key": "6a4fa63f81msh5cbb2be402fc96bp1eaeb7jsnada33f27f798",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "useQueryString": true
    });
    req.end(function (result) {
        if (result.error) console.log('result.error')
        let data = result.body;
        console.log(data);
        if(data)
            res.send(data)
        else
            res.send(null)
    });
}

module.exports = getSimilarMovies