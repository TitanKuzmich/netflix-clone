import config from "lib/config"

export const rowsData = [
    {
        title: "NETFLIX ORIGINALS",
        url: config.paths.fetchNetflixOriginals,
        isLargeRow: true
    },
    {
        title: "Trending Now",
        url: config.paths.fetchTrending
    },
    {
        title: "Action Movies",
        url: config.paths.fetchActionMovies
    },
    {
        title: "Comedy Movies",
        url: config.paths.fetchComedyMovies
    },
    {
        title: "Horror Movies",
        url: config.paths.fetchHorrorMovies
    },
    {
        title: "Romance Movies",
        url: config.paths.fetchRomanceMovies
    },
    {
        title: "Documentaries",
        url: config.paths.fetchDocumentaryMovies
    }
]