import React, { Fragment } from 'react'

import './style.css'


function NavBar() {
    return(
        <Fragment>
             <div className='navigation'>
                <div className='mainNavigation'>
                    <img className='logo' src='./logo.png' alt="logo" />

            <div className='nav' id='nav'>
                <ul className='navigationList'>
                    <li className='navigationItem'>
                        <a href="/">Home</a>
                    </li>
                    <li className='navigationItem'>
                        <a href="/">Tv Shows</a>
                    </li>
                    <li className='navigationItem'>
                        <a href="/">Movies</a>
                    </li>
                    <li className='navigationItem'>
                        <a href="/">New $ popular</a>
                    </li>
                    <li className='navigationItem'>
                        <a href="/">My List</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        
        </Fragment>
    )
}

export default NavBar