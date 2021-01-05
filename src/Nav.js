import React from 'react'
import pollLogo from './pollnewlogo.png'
import "./Nav.css"
import {Link,useHistory} from "react-router-dom"
function Nav({backbutton}) {
    const history  = useHistory()
    return (
        <div className="nav-bar">
            {
                backbutton?(
                        <img className="back-arrow" src="https://img.icons8.com/material-sharp/24/000000/back--v1.png"/>
                ):(
                    <img src={pollLogo} alt="Poll" className="app-logo" />
                )
            }
            <div className="nav-features">
                <h3>Word Cloud</h3>
            </div>
        </div>
    )
}

export default Nav
