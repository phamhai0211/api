import React, { useState } from 'react'
import './navbar.css'

import NotificationsIcon from '@mui/icons-material/Notifications';
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';

const Navbar = () => {
    const [isScroll, setIsCroll] = useState(false)

    window.onscroll = ()=>{
        setIsCroll(window.pageYOffset === 0 ? false : true)
        return()=>(window.onscroll==null)
    }
    
    return (
        <div className={isScroll ? "netflix__navbar scrolled": "netflix__navbar"}>
            <div className="netflix__navbar-container">
                <div className="netflix__navbar-container_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="netflix__navbar-container_right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />


                    <div className='profile'>
                        <ArrowDropDown className='icon ' />
                        <div className="options">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
