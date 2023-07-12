import React, {useState} from 'react'
import './MobileTopbar.css'
import { $ }  from 'react-jquery-plugin'
import logo from '../../assets/images/wishmytrip.jpg'
import Sidebar from '../Sidebar/Sidebar';


const MobileTopbar = () => {
    const handleClick = () => {
        openSidebar == true ? setOpenSideBar(false) : setOpenSideBar(true)
    }

    const [openSidebar, setOpenSideBar] = useState(false)

    return (
        <>
            <div className='mobile-header'>
                <Sidebar value={openSidebar} />
                <div>
                    <img src={logo} height='29px' />
                </div>
                <div className='hamburger' onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
export default MobileTopbar