const key = "8880d08e97e67ce97006abad3b4cfaa4"


const requests = {
    requestRating : `https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=${key}&`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestImages : `https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=${key}&language=en-US`,
    requestLatest : `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`



}

export default requests;