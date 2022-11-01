import './Header.css'
import {Link} from "react-router-dom";
export default () => {

    return <div  className="header">
        <h1>Testing playground</h1>
        <Link id="headerLoginLink" to={'/'}>
       Login
        </Link>
    </div>
}