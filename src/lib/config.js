const API_KEY = process.env.API_KEY

const config = {
    tmdbBaseUrl: 'https://image.tmdb.org/t/p/original',
    paths: {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
    getTrailer: (uid) => `https://api.themoviedb.org/3/movie/${uid}?api_key=${API_KEY}&append_to_response=videos`
}

export default config