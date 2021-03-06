import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import cn from "classnames"
import images from 'assets/img'

import style from "./style.module.scss"

const Nav = () => {
    const [isShow, setShow] = useState(false)

    const navigate = useNavigate()

    const onNavbarShow = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", onNavbarShow)
        return () => window.removeEventListener("scroll", onNavbarShow)
    }, [])

    return (
        <div className={cn(style.nav, {[style.nav__black]: isShow})}>
            <div className={style.nav_content}>
                <img onClick={() => navigate('/')} className={style.nav_logo} src={images.Netflix} alt="logo"/>
                <img onClick={() => navigate('/profile')} className={style.nav_avatar} src={images.Avatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Nav