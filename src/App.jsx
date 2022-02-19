import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import InitialRouting from "components/InitialRouting"
import Login from "pages/Login"
import {auth} from "lib/firebase"
import {login, logout, selectUser} from "state/reducers/user"

const App = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth){
            dispatch(login({
                uid: userAuth.uid,
                email: userAuth.email
            }))
        } else {
            dispatch(logout())
        }
    })

    useEffect(() => {
        unsubscribe()

        return unsubscribe()
    }, [])

    return (
        <div className="app">
            { user ? <Login /> : <InitialRouting /> }
        </div>
    )
}

export default App
