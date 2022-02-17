import React from 'react'

import Nav from 'components/Nav'
import Banner from "components/Banner"
import Row from "components/Row"
import {rowsData} from "components/Row/helper"

import style from "./style.module.scss"

const HomeScreen = () => {
    return (
        <div className={style.homeScreen}>
            <Nav/>

            <Banner/>

            { rowsData.map((row, ind) => (
                <Row
                    key={`${ind}_${row.title}`}
                    title={row.title}
                    url={row.url}
                    isLargeRow
                />
            ))}
        </div>
    )
}

export default HomeScreen