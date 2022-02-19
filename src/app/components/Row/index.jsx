import React, {useEffect, useState} from 'react'
import cn from "classnames"
import API from "lib/api"
import TrailerModal from "components/TrailerModal"

import style from "./style.module.scss"
import config from "lib/config"

const Row = ({title, url, isLargeRow = false}) => {
    const [movies, setMovies] = useState([])
    const [openMovie, setOpenMovie] = useState(null)

    const getMovies = async () => {
        const result = await API.get(url)

        setMovies(result.data.results)
    }

    useEffect(() => {
        getMovies()
    }, [url])

    return (
        <div className={cn(style.row)}>
            <h2>{title}</h2>

            { openMovie && <TrailerModal openMovie={openMovie} setOpenMovie={setOpenMovie}/>}

            <div className={style.row_wrapper}>
                {movies.map((movie, ind) => (
                    (isLargeRow && movie.poster_path
                    || !isLargeRow && movie.backdrop_path) && (
                        <img
                            className={cn(style.row_poster, {[style.row_poster__large]: isLargeRow})}
                            key={`${ind}_${movie.name}`}
                            src={`${config.tmdbBaseUrl}${isLargeRow
                                ? movie.poster_path
                                : movie.backdrop_path
                            }`}
                            onClick={() => setOpenMovie(movie)}
                            alt="poster"
                        />)
                ))}
            </div>
        </div>
    )
}

export default Row