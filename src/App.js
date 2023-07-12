import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToursPackagesListing from './Components/Tourandpackages/ToursPackagesListing/ToursPackagesListing';
import ToursPackagesDetail from './Components/Tourandpackages/ToursPackagesDetail/ToursPackagesDetail';
import ChangeFlight from './Components/ChangeFlight/ChangeFlight';
import Success from './Components/Success/Success';
import ChangeHotel from './Components/ChangeHotel/ChangeHotel';
import ChangeCab from './Components/ChangeCab/ChangeCab';
import Scroll from './Components/Scroll/Scroll';
import GrabDealListing from './Components/GrabDeal/GrabDealListing';
import Sidebar from './Components/Sidebar/Sidebar';
import Sidebar1 from './Components/Sidebar1/Sidebar1';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact index element={<Home />} />
          <Route exact path="/tourspackageslist" element={<ToursPackagesListing />} />
          <Route exact path="/tourpackagesdetail" element={<ToursPackagesDetail />} />
          <Route exact path="/changeFlight" element={<ChangeFlight />} />
          <Route exact path="/changeHotel" element={<ChangeHotel />} />
          <Route exact path="/changeCab" element={<ChangeCab />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/scroll" element={<Scroll />} />
          <Route exact path="/grabdeallisting" element={<GrabDealListing />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
          <Route exact path="/sidebar1" element={<Sidebar1 />} />
      </Routes>
    </BrowserRouter>
  );
}
