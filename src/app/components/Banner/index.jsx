import React, {useEffect, useState} from 'react'

import images from 'assets/img'

import style from "./style.module.scss"

const Banner = () => {

    return (
        <header className={style.banner} style={{backgroundImage: `url(${images.Banner})`}}>
            <div className={style.banner_contents}>
                <h1 className={style.banner_title}>Movie title</h1>
                <div className={style.banner_button_wrapper}>
                    <button className={style.banner_button}>Play</button>
                    <button className={style.banner_button}>My List</button>
                </div>

                <h1 className={style.banner_description}>
                    This is a test description
                </h1>
            </div>

            <div className={style.banner__fade_bottom}/>
        </header>
    )
}

export default Banner