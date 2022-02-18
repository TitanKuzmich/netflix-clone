import React from 'react'

import Nav from 'components/Nav'
import Banner from "components/Banner"
import Row from "components/Row"
import {rowsData} from "components/Row/helper"

const HomeScreen = () => {
    return (
        <div>
            <Nav/>

            <Banner/>

            {rowsData.map((row, ind) => (
                <Row
                    key={`${ind}_${row.title}`}
                    title={row.title}
                    url={row.url}
                    isLargeRow={row.isLargeRow}
                />
            ))}
        </div>
    )
}

export default HomeScreen