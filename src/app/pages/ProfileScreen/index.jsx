import React, {useRef, useState} from 'react'
import {useSelector} from "react-redux"
import Nav from "components/Nav"
import {selectUser} from "state/reducers/user"
import {auth} from "lib/firebase"

import images from "assets/img"

import style from "./style.module.scss"

const ProfileScreen = () => {
    const user = useSelector(selectUser)

    return (
        <div className={style.profile_screen}>
            <Nav />
            <div className={style.profile_screen_body}>
                <h1>Edit Profile</h1>
                <div className={style.profile_screen_info}>
                    <img src={images.Avatar} alt="avatar"/>
                    <div className={style.profile_screen_details}>
                        <h2>{user?.email || "Ti Sai"}</h2>
                        <div className={style.profile_screen_plans}>
                            <h3>Plans</h3>
                            <p></p>
                            <button
                                onClick={() => auth.signOut()}
                                className={style.profile_screen_logout}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen