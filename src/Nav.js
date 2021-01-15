import React from 'react'
import pollLogo from './pollnewlogo.png'
import "./Nav.css"
import {IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link,useHistory} from "react-router-dom"
function Nav({backbutton}) {
    const history  = useHistory()
    const moveBack = () =>{
        history.goBack();
    }
    const logoClick = () =>{
        history.push("/");
    }
    return (
        <div className="nav-bar">
            {
                backbutton?(
                    <IconButton onClick={moveBack} className="back-arrow">
                        <ArrowBackIcon />
                    </IconButton>
                        
                ):(
                <a href="/">
                    <img src={pollLogo} alt="Poll" className="app-logo"  />
                </a>
                )
            }
            <div className="nav-features">
            <button className="nav-button">
                <h3>About</h3>
            </button>
            </div>
        </div>
    )
}

export default Nav;
