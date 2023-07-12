import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import DifferentUs from '../DifferentUs/DifferentUs'
import Europe from '../Europe/Europe'
import Footer from '../Footer/Footer'
import GlobalEvents from '../GlobalEvents/GlobalEvents'
import GrabDeal from '../GrabDeal/GrabDeal'
import Header from '../Header/Header'
import India from '../India/India'
import InternationDeals from '../InternationDeals/InternationDeals'
import MiddleEast from '../MiddleEast/MiddleEast'
import MultipleCalendar from '../MultipleCalendar/MultipleCalendar'
import PopularTour from '../PopularTour/PopularTour'
import RemotePlace from '../RemotePlace/RemotePlace'
import SeasonalTour from '../SeasonalTour/SeasonalTour'
import SouthEastAsia from '../SouthEastAsia/SouthEastAsia'
import Testimonials from '../Testimonials/Testimonials'
import Tilt from '../Tilt/Tilt'
import TravelWithUs from '../TravelWithUs/TravelWithUs'
import './Home.css'
import Search from '../Search/Search'
import Scroll from '../Scroll/Scroll'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className="">
        <MultipleCalendar/>
        <Header/>
        <Sidebar />
        {/* <Search />   */}
        <div className='empty-div'></div>
        <GrabDeal/>
        <SeasonalTour/>
        {/* <RemotePlace/> */}
        <PopularTour/>
        
        <InternationDeals/>
        <India/>
        {/* <GlobalEvents/> */}
        {/* <div className='empty-div'></div> */}
        <Europe/>
        <MiddleEast/>
        <SouthEastAsia/>
        
        
        <Scroll/>
        {/* <DifferentUs/>
        <Testimonials/>
        <TravelWithUs/>
        <AboutUs/> */}
        <Footer/>
    </div>
  )
}

export default Home