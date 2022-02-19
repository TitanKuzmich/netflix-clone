import React, {useEffect, useRef, useState} from 'react'
import YouTube from 'react-youtube'
import cn from "classnames"
import config from "lib/config"
import images from "assets/img"
import API from "lib/api"

import style from "./style.module.scss"

const TrailerModal = ({openMovie, setOpenMovie}) => {
    const [isMore, setMore] = useState(false)
    const [trailerKey, setTrailerKey] = useState(null)
    const [height, setHeight] = useState(80)

    const modalRef = useRef(null)
    const content = useRef(null)

    const disableWindowScroll = () => window.scrollTo(
        window.pageYOffset || document.documentElement.scrollTop,
        window.pageXOffset || document.documentElement.scrollLeft
    )

    const heightValue = () => {
        return !content.current ? 80 : content.current.scrollHeight
    }

    const getMovie = async () => {
        const result = await API.get(config.getTrailer(openMovie.id))

        setTrailerKey(result.data.videos.results[0].key)
    }

    useEffect(() => {
        setHeight(isMore ? heightValue() : 80)
    }, [isMore])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef?.current && !modalRef?.current.contains(event.target)) setOpenMovie(false)
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [modalRef])

    useEffect(() => {
        getMovie()
        window.addEventListener('scroll', disableWindowScroll)
        return () => window.removeEventListener("scroll", disableWindowScroll)
    }, [])

    return (
        <div className={style.modal_cover}>
            <div className={style.modal_wrapper} ref={modalRef}>
                <div
                    className={style.close}
                    onClick={() => setOpenMovie(false)}
                >
                    <img
                        src={images.Close}
                        alt="Close"
                    />
                </div>

                <h1 className={style.modal_title}>{openMovie?.title || openMovie?.name || openMovie?.original_name}</h1>
                <h1
                    ref={content}
                    className={style.modal_description}
                    style={{maxHeight: `${height}px`}}
                >
                    {openMovie?.overview}
                </h1>
                {content.current && content.current.style.height > 350 && (
                    <div
                        className={cn(style.arrow, {[style.rotate]: isMore})}
                        onClick={() => setMore(!isMore)}
                    >
                        <img
                            src={images.Arrow}
                            alt="Arrow"
                        />
                    </div>
                )}

                {trailerKey ? (
                    <>
                        <h1 className={style.modal_sub_title}>Trailer</h1>
                        <YouTube videoId={trailerKey} containerClassName={style.player}/>
                    </>
                ) : (
                    <>
                        <h1 className={style.modal_sub_title}>Poster</h1>
                        <img
                            src={`${config.tmdbBaseUrl}${openMovie.backdrop_path}`}
                            alt="poster"
                            className={style.poster}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default TrailerModal