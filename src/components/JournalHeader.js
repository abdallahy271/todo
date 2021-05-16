import React from 'react'
import './JournalHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from "../images/in-focus.png";

function JournalHeader() {
    return (
        <div className='journal-header'>
            <Link to='/'>
                <img 
                src={logo}
                alt="" 
                className="header__icon"/>
            </Link>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <a target="_blank" href='https://medium.com/swlh/how-to-turn-your-journal-into-the-ultimate-motivation-machine-2f32ae97b998'>
                <p>How to Journal</p>
                </a>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default JournalHeader
