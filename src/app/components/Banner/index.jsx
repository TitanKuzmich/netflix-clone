import React, {useEffect, useState} from 'react'

import config from "lib/config"
import API from "lib/api"

import style from "./style.module.scss"

const Banner = () => {
    const [movie, setMovie] = useState({})

    const truncate = (text, charNumber) => {
        return text?.length > charNumber
            ? text.substr(0, charNumber - 1) + '...'
            : text
    }

    const getMovies = async () => {
        const result = await API.get(config.paths.fetchNetflixOriginals)

        setMovie(
            result.data.results[
                Math.floor(Math.random() * result.data.results.length - 1)
                ]
        )

        console.log(movie)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <header className={style.banner} style={{backgroundImage: 'url(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`)'}}>
            <div className={style.banner_contents}>
                <h1 className={style.banner_title}>{ movie?.title || movie?.name || movie?.original_name }</h1>
                <div className={style.banner_button_wrapper}>
                    <button className={style.banner_button}>Play</button>
                    <button className={style.banner_button}>My List</button>
                </div>

                <h1 className={style.banner_description}>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className={style.banner__fade_bottom} />
        </header>
    )
}

export default Banner