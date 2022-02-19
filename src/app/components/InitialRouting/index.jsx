import React from 'react'
import {Route, Routes} from "react-router-dom"

import HomeScreen from "pages/HomeScreen"
import ProfileScreen from "pages/ProfileScreen"

const InitialRouting = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<HomeScreen/>}
                />
                <Route
                    path="/profile"
                    element={<ProfileScreen/>}
                />
            </Routes>
        </>
    )
}

export default InitialRouting