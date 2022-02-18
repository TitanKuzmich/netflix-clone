import React, {useState} from 'react'

import SignUp from "pages/SignUp"
import images from "assets/img"

import style from "./style.module.scss"

const Login = () => {
    const [isSignIn, setSignIn] = useState(false)

    return (
        <div
            className={style.login_screen}
            style={{background: `url(${images.NetflixBackground}) center / cover no-repeat`}}
        >
            <div className={style.login_screen_background}>
                <img
                    className={style.login_screen_logo}
                    src={images.Netflix}
                    alt="logo"
                />

                <button
                    className={style.login_screen_button}
                    onClick={() => setSignIn(true)}
                >
                    Sign in
                </button>

                <div className={style.login_screen_gradient}/>

                <div className={style.login_screen_body}>
                    {isSignIn
                        ? <SignUp />
                        : (
                            <>
                                <h1>Unlimited films, TV programmes and more.</h1>
                                <h2>Watch anywhere. Cancel at any time.</h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                                <div className={style.login_screen_input}>
                                    <form>
                                        <input
                                            placeholder="Enter your email"
                                            type="email"
                                        />
                                        <button
                                            onClick={() => setSignIn(true)}
                                            className={style.login_screen_get_started}
                                        >
                                            GET STARTED
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Login