const unirest = require('unirest')
// const yifysubtitles = require('yifysubtitles');
const yifysubtitles = require('@amilajack/yifysubtitles');
const OS = require('opensubtitles-api');
const fs = require('fs')
let cloudscraper = require('cloudscraper');
const { opensubtitles_config } = require('./opensub');


getMovieDataById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            let imdb = null;
            var req = unirest("GET",
                `https://api.themoviedb.org/3/movie/${id}?api_key=0f87bface5c69fcf394fc387f33049fa&language=en-US`);
            req.end(function (result) {
                if (result.error) console.log("timeout in server themoviedb")
                if (result.body.imdb_id)
                    imdb = result.body.imdb_id;
                resolve(imdb);
            });
        } catch (error) {
            console.log('getMovieData timeout')
            return null;
        }

    })
}
getMovieData = async (req, res) => {
    const data = req.body;
    const info = {
        'torrents': "",
        'trailer': ""
    }
    let imdb = data.code;

    if (data.type === "id") {
        let temp = await getMovieDataById(data.code)
        if (temp !== null)
            imdb = temp;
    }
    // console.log(imdb, 'rrrrrrrrrr')
    let result1 = await cloudscraper.get(`https://tv-v2.api-fetch.sh/movie/${imdb}`);
    // let result1 = await axios.get(`http://www.omdbapi.com/?i=${imdb}&apikey=7638ae22`)
    // .then(response => (
    //     console.log(response.data)
    // ))
    console.log(result1,'nooooooooooo')
    if (result1) {
        let x = JSON.parse(result1);
        info.torrents = x.torrents;
        info.trailer = x.trailer;
        console.log(x)
    }
    const subtitles = await yifysubtitles(imdb, {path: './subtitles',langs: ['en', 'fr', 'ar']});


    // const OpenSubtitles = new OS(opensubtitles_config);
    // const subtitles = await OpenSubtitles.search({
    //     imdbid: imdb,
    //     lang: ['en', 'fr', 'ar'],
    //     extensions: ['vtt', 'srt'],
    // });
    // console.log(subtitles,'subtitles');
    // // const lang = Arabic;
    // if (lang in subtitles) {
    //     try {
    //         const dirPath = path.join(__dirname, '..', 'downloads/subtitles', imdb);
    //         const filePath = path.join(dirPath, `${lang}.vtt`);
    //         if (!fs.existsSync(dirPath)) {
    //             const made = await mkdirp(dirPath);
    //             if (made)
    //                 fs.writeFile(filePath, '', (err) => {
    //                     download(subtitles[lang].url)
    //                         .pipe(srt2vtt())
    //                         .pipe(fs.createWriteStream(filePath).on('finish', () => console.log('finish')));
    //                 });
    //         } else
    //             fs.writeFile(filePath, '', (err) => {
    //                 download(subtitles[lang].url)
    //                     .pipe(srt2vtt())
    //                     .pipe(fs.createWriteStream(filePath).on('finish', () => console.log('finish')));
    //             });
    //     } catch (err) {
    //         console.log('ma dkhalech');
    //     } 
    // } else console.log('ma dkhalech');
    //  const subtitles = await yifysubtitles(imdb, {path: './subtitles',langs: ['en', 'fr', 'ar']});
    //  for(var i = 0; i < subtitles.length;i++)
    //   {
    //     console.log('ah dkhalt')
    //     const t =  fs.readFileSync('./subtitles/'+subtitles[i].fileName, 'utf8')
    //     let buff = new Buffer.from(t);
    //     let base64data = buff.toString('base64');
    //     subtitles[i].fileName = base64data
    //   }

    const url = await cloudscraper.get(`http://www.omdbapi.com/?i=${imdb}&apikey=7638ae22`);
    console.log(url);
    // url.query({
    //     "i": imdb,
    //     "r": "json"
    // }),
    //     url.headers({
    //         "x-rapidapi-key": "f8042ebf57mshc92a807fbd6224cp1764a0jsnb62c6099b261",
    //         "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    //         "useQueryString": true
    //     }),

    let Data = JSON.parse(url);
    if (Data) {
        Data.torrents = info.torrents.en;
        console.log(info.trailer, 'okiiiii')
        Data.trailer = info.trailer;
        Data.subtitles = subtitles;
        res.send({ isData: true, data: Data });
    }
    else
        res.send({ isData: false, data: null });
}
module.exports = getMovieData;