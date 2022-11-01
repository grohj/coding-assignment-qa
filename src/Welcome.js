import Header from "./Header";
import React from "react";
import {useSearchParams} from "react-router-dom";
import './Welcome.css'

export default () => {
    const [searchParams] = useSearchParams()
    return <div>
        <Header />
        <div className="content">
        <h1 id="welcomeMessage">Welcome {`${searchParams.get('username')}`}</h1>
        <h2 id="rememberInfo">{`We will ${searchParams.get('remember') === 'on'? '' : 'NOT'} remember you.`}</h2>
        </div>
    </div>
}