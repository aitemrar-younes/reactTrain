import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

import { FaHome } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";


import { HiMiniArrowsRightLeft } from "react-icons/hi2";

import { GrBus } from "react-icons/gr";
import { FaRegCreditCard } from "react-icons/fa";

import { HiXMark } from "react-icons/hi2";



function Layout() {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(true)
  return (
    <div className='_layout'>

        <div className={collapsed ? "sideBar collapsed" : "sideBar"}>
            <div className="sideBarTop">
                <img src='/src/assets/images/logo.png' />
                <HiXMark className='menuIcon' onClick={()=>setCollapsed(true)} />
            </div>
            <div className="sidebarContent">
                <Link to={''} className='sidebarLink'>
                    Home
                </Link>
                <Link to={''} className='sidebarLink'>
                    Card
                </Link>
                <Link to={''} className='sidebarLink'>
                    About
                </Link>
                <Link to={''} className='sidebarLink'>
                    Contact us
                </Link>
                <Link to={''} className='sidebarLink'>
                    Feed back
                </Link>
                <Link to={''} className='sidebarLink'>
                    Follow us
                </Link>
            </div>
            <div className="sideBarFooter">
                Connected as Develloper Auth
            </div>
        </div>

        <div className="topBar">
            <IoMenu className='menuIcon' onClick={()=>setCollapsed(false)} />
            <img src='/src/assets/images/logo.png' />
            <TbLogout2 className='menuIcon' onClick={()=>navigate('/login')} />

        </div>
        <div className="content">
            <Outlet />
        </div>
        <div className="bottomBar">
            <Link to={'/'} className='bottomLink'>
                <FaHome className='menuIcon' />
            </Link>
            <Link to={'/road'} className='bottomLink'>
                <BiTrip className='menuIcon' />
            </Link>
            <Link to={'/qrscanner'} className='bottomLink'>
                <HiMiniArrowsRightLeft className='menuIcon center' />
            </Link>
            <Link to={'/trip-price'} className='bottomLink'>
                <GrBus className='menuIcon' />
            </Link>
            <Link to={'/card'} className='bottomLink'>
                <FaRegCreditCard className='menuIcon' />
            </Link>
        </div>
    </div>
  )
}

export default Layout