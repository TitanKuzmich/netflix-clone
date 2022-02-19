import React, {useRef, useState} from 'react'
import cn from "classnames"

import {auth} from "lib/firebase.js"

import style from "./style.module.scss"

const SignUp = () => {
    const [isLoading, setLoading] = useState(false)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const onSignUp = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const user = await auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )

            setLoading(false)
        } catch (e) {
            alert(e.message)
            setLoading(false)
        }
    }

    const onSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const user = await auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )

            setLoading(false)
        } catch (e) {
            alert(e.message)
            setLoading(false)
        }
    }

    return (
        <div className={style.signup_screen}>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Enter your email" type="email"/>
                <input ref={passwordRef} placeholder="Enter password" type="password"/>
                <button type="submit" onClick={onSignIn} disabled={isLoading}>
                    Sign In
                </button>

                <h4>
                    <span className={style.signup_screen_link__grey}>
                        New to Netflix?
                    </span>
                    <span
                        className={cn(style.signup_screen_link, {[style.signup_screen_link__disabled]: isLoading} )}
                        onClick={onSignUp}
                    >
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp