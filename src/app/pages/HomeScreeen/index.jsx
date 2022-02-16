import React from 'react'

import Nav from 'components/Nav'
import Banner from "components/Banner"

import style from "./style.module.scss"

const HomeScreen = () => {
    return (
        <div className={style.homeScreen}>
          <Nav />

          <Banner />

        {/*  Row  */}
        </div>
    )
}

export default HomeScreen