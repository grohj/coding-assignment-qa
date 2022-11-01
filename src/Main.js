import './Main.css'
import Header from "./Header";
import React, {useEffect, useState} from "react";
import {Form} from "react-router-dom";

export default () => {

    const [takingLong, setTakingLong] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTakingLong(true)
        }, 5000)
        return () => clearTimeout(timeout)
    }, [])

    return <div>
        <Header/>
        <fieldset>
            <legend>Login</legend>
            {takingLong? <p aria-label="tooLongHelp">You are taking too long. Do you need help?</p> : null}
            <Form id="loginForm" method="get" action="/welcome">
                <input id="username" name="username" type="text" hint="username" required/>
                <input id="password" name="password" type="password" hint="password" required/>
                <div>
                    <input id="remember" name="remember" type="checkbox" hint="remember"/>
                    <label for="remember">Remember me</label>
                </div>
                <input id="login" type="submit" value="Login"/>
            </Form>
        </fieldset>
    </div>
}