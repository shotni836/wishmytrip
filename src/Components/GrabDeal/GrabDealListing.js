import React, { useState, useMemo } from 'react'
import './GrabDealListing.css'
import Select from 'react-select'
import SimpleHeader from '../SimpleHeader/SimpleHeader'
import 'bootstrap-daterangepicker/daterangepicker.css';
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryList from 'react-select-country-list'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Modal from 'react-modal';
import banner2 from '../../assets/images/banner2.jpg'
import PackageCallRequest from '../PackageCallRequest/PackageCallRequest'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar1 from '../Sidebar1/Sidebar1';
import MobileTopbar from '../MobileTopbar/MobileTopbar';


const customStyles = {

    control: (base, state) => ({
        ...base,
        background: "none",
        border: 'none',
        color: 'black'
        // match with the menu
    }),
}

const options1 = [
    { value: 'return', label: 'Return' },
    { value: 'one-way', label: 'One-way' },
    { value: 'multi-city', label: 'Multi-city' },
    { value: 'nomad', label: 'Nomad' }
]
const options2 = [
    { value: 'economy', label: 'Economy' },
    { value: 'premium-economy', label: 'Premium Economy' },
    { value: 'Business', label: 'Business' },
    { value: 'first-class', label: 'First Class' }
]

const GrabDealListing = () => {
    const [value, setValue] = React.useState(2);

    const options = useMemo(() => countryList().getData(), [])

    const [countFlight, setCountFlight] = useState(['return'])
    const [check1, setCheck1] = useState(true)
    const [check2, setCheck2] = useState(true)
    const [check3, setCheck3] = useState(true)
    const [check4, setCheck4] = useState(true)
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const setNoOfFlight = (option) => {
        console.log(option)
        setCountFlight(option.value)
    }

    const showTextNow = () => {
        setShowText(true)
    }

    const notShow = () => {
        setShowText(false)
    }

    const [showText, setShowText] = useState(false)

    const [startDate, setStartDate] = useState('');
    const selectionRange = {
        startDate: null,
        endDate: null,
        key: 'selection',
    }
    const [dateRange, setDateRange] = useState([
        {
            startDate: '',
            endDate: '',
            key: 'selection'
        }
    ]);
    const handlePriceValue = (eve) => {
        console.log(eve.target.value)
        setPriceValue(eve.target.value)
    }
    const [priceValue, setPriceValue] = useState(['Any Price'])
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className='grabdeallisting'>
            <MobileTopbar />
            {/* <SimpleHeader /> */}
            {/* <Sidebar1 /> */}
            <div className='main-search-div container mt-3'>
                <div className='row'>
                    <div className='col-12'>
                        Where to spend holidays?
                    </div>
                    {/* <div className='col-2'>
                  <Select styles={customStyles} options={options2}
                  className='shadow1'
                    id='trip_class'
                    placeholder={<div className='placeHolder '>Premium</div>}
                    components={{
                      IndicatorSeparator: () => null
                    }} />
                </div> */}
                </div>
                <div className='row mt-3'>
                    <div className='col-md-5 position-relative height-54'>
                        <Select options={options}
                            className='shadow1'
                            placeholder={<div className='placeHolder'>Search destination<br /></div>}
                            components={{
                                IndicatorSeparator: () => null
                            }} />
                    </div>
                    <div className="col-md-2 datepick-1" style={{ paddingRight: '0' }}>
                        <div className='datepicker-div'>
                            <DatePicker className='simple-datepicker check-in-hotel' placeholderText='From' selected={startDate === "" ? null : startDate} onChange={(date) => setStartDate(date)} />
                            {/* <div className='departure-datepicker'>Departure</div> */}
                        </div>
                    </div>
                    <div className="col-md-2 datepick-2" style={{ paddingLeft: '0' }}>
                        <div className='datepicker-div'>
                            <DatePicker className='simple-datepicker check-out-hotel' placeholderText='To' selected={startDate === "" ? null : startDate} onChange={(date) => setStartDate(date)} />
                            {/* <div className='departure-datepicker'>Departure</div> */}
                        </div>
                    </div>
                    <div className='col-md-3 datepick-3 add-border'>
                        <div class="dropdown shadow1 d-flex align-items-center h-100">
                            <input type="checkbox" id="my-dropdown" value="" name="my-checkbox" />
                            <label for="my-dropdown"
                                data-toggle="dropdown" className='adult-and-child-label'>
                                2 adults 0 child
                            </label>
                            <ul className='adult_child'>
                                <li>
                                    <label className='make-heavy-font'><i class="fa fa-male" aria-hidden="true"></i> Adults</label>
                                    <div class="quantity buttons_added">
                                        <input type="button" value="-" class="minus" />
                                        <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                        <input type="button" value="+" class="plus" />
                                    </div>
                                </li>
                                <li>
                                    <label className='make-heavy-font'><i class="fa fa-child" aria-hidden="true"></i> Children</label>
                                    <div class="quantity buttons_added">
                                        <input type="button" value="-" class="minus" />
                                        <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                        <input type="button" value="+" class="plus" />
                                    </div>
                                </li>
                                <li>
                                    <label className='make-heavy-font'><i class='fas fa-hotel'></i> Rooms</label>
                                    <div class="quantity buttons_added">
                                        <input type="button" value="-" class="minus" />
                                        <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                        <input type="button" value="+" class="plus" />
                                    </div>
                                </li>
                                <li>
                                    <input type='text' className='form-control' placeholder="Child's Age" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-9 flight-last-row'>
                        Package including
                        <div className='mx-3 d-flex align-items-center'>
                            <input type="checkbox" className='direct-flight' id="direct-flight1" name="direct-flight1" value="direct-flight" checked={check1} onChange={() => setCheck1(check1 => !check1)} />
                            <label for="direct-flight">Flights</label>
                        </div>
                        <div className='mx-3 d-flex align-items-center'>
                            <input type="checkbox" className='direct-flight' id="direct-flight2" name="direct-flight2" value="direct-flight" checked={check2} onChange={() => setCheck2(check2 => !check2)} />
                            <label for="direct-flight">Hotel</label>
                        </div>
                        <div className='mx-3 d-flex align-items-center'>
                            <input type="checkbox" className='direct-flight' id="direct-flight3" name="direct-flight3" value="direct-flight" checked={check3} onChange={() => setCheck3(check3 => !check3)} />
                            <label for="direct-flight">Activities</label>
                        </div>
                        <div className='mx-3 d-flex align-items-center'>
                            <input type="checkbox" className='direct-flight' id="direct-flight4" name="direct-flight4" value="direct-flight" checked={check4} onChange={() => setCheck4(check4 => !check4)} />
                            <label for="direct-flight">Cab Facility</label>
                        </div>
                    </div>
                    <div className='col-md-3 d-flex justify-content-end'>
                        <button className='btn btn-primary' style={{ borderRadius: '25px' }}>Search</button>
                    </div>
                </div>
            </div>
            <div className='grabdealgrid mt-3'>
                <div className='container'>
                <div className='row'>
                    <div className='col-md-3 grabdealfilter'>
                        <div class="series-search">
                            <span>Price</span><br/>
                            <span id='price-value' style={{color: 'blue', fontWeight: '400'}}>0 &#8377; - {priceValue} &#8377;</span>
                            <input className='w-100 mt-2' id="typeinp" type="range" min="0" max="100000"  step="5000" onChange={handlePriceValue}/>
                            <div className='d-flex'>
                                <p>0 &#8377;</p><p>Any</p>
                            </div>
                        </div>
                        <div class="series-search mt-4">
                            <span>Stops</span>
                            <ul class="filters" style={{ paddingLeft: "0" }}>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Any
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> 0
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> 1
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> 2 or more
                                </li>
                            </ul>
                        </div>
                        <div class="series-search mt-4">
                            <span>ARRIVAL TIME</span>
                            <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Early morning ( 12 am - 8 am )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Morning ( 8 am - 12 pm )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Mid-day ( 12 pm - 4 pm )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Evening ( 4 pm - 8 pm )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Night ( 8 pm - 12 am )
                                </li>
                            </ul>
                        </div>
                        {/* <div class="series-search mt-4">
                            <span>STOPS</span>
                            <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                                <li>
                                    <input type="checkbox" /> Non-stop
                                </li>
                                <li>
                                    <input type="checkbox" /> 1
                                </li>
                                <li>
                                    <input type="checkbox" /> 2 or more
                                </li>
                            </ul>
                        </div> */}
                        <div class="series-search mt-4">
                            <span>AIRLINES</span>
                            <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Air India ( 10 Flights )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Indigo ( 4 Flights )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Vistara ( 12 Flights )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> South West ( 5 Flights )
                                </li>
                                <li>
                                    <input type="checkbox" className='checkbox' /> Emirates ( 1 Flights )
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className="tourpackagelist row">
                            <div className="detail col-md-9">
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="more-details col-md-3">
                                <div>
                                    <div className='price-symbol-red justify-content-center'>12000 &#8377;</div>
                                </div>
                                <Link to='/tourpackagesdetail'><button className="btn mt-5">
                                    Select
                                </button></Link>
                            </div>
                        </div>
                        <div className="tourpackagelist row">
                            <div className="detail col-md-9">
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="more-details col-md-3">
                                <div>
                                    <div className='price-symbol-red justify-content-center'>12000 &#8377;</div>
                                </div>
                                <Link to='/tourpacakgesdetail'><button className="btn mt-5">
                                    Select
                                </button></Link>
                            </div>
                        </div>
                        <div className="tourpackagelist row">
                            <div className="detail col-md-9">
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="more-details col-md-3">
                                <div>
                                    <div className='price-symbol-red justify-content-center'>12000 &#8377;</div>
                                </div>
                                <Link to='/tourpacakgesdetail'><button className="btn mt-5">
                                    Select
                                </button></Link>
                            </div>
                        </div>
                        <div className="tourpackagelist row">
                            <div className="detail col-md-9">
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="more-details col-md-3">
                                <div>
                                    <div className='price-symbol-red justify-content-center'>12000 &#8377;</div>
                                </div>
                                <Link to='/tourpacakgesdetail'><button className="btn mt-5">
                                    Select
                                </button></Link>
                            </div>
                        </div>
                        <div className="tourpackagelist row">
                            <div className="detail col-md-9">
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="more-details col-md-3">
                                <div>
                                    <div className='price-symbol-red justify-content-center'>12000 &#8377;</div>
                                </div>
                                <Link to='/tourpacakgesdetail'><button className="btn mt-5">
                                    Select
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <div class="grabdeallistingwrapper">
                <div className='container'>
                    <div class="d-md-flex align-items-md-center">
                        <div class="h3 mb-0">Best Deals</div>
                    </div>

                    <div class="d-sm-flex align-items-sm-center pt-2 clear">
                        <div class="text-muted filter-label">Applied Filters:</div>
                        <div class="green-label font-weight-bold p-1 mx-sm-1 mx-0 my-sm-0 my-2" style={{ cursor: 'pointer', color: 'black' }}>Price : &lt; 20000 <span class=" px-1 close" style={{ marginTop: '1px' }}>&times;</span> </div>
                        <div class="green-label font-weight-bold p-1 mx-sm-1 mx-0" style={{ cursor: 'pointer', color: 'black' }}>Stops: Any <span class=" px-1 close">&times;</span> </div>
                    </div>
                    <div class="filters"> <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filter<span class="px-1 fas fa-filter"></span></button> </div>
                    <div id="mobile-filter">
                        <div class="py-3">
                            <h5 class="font-weight-bold">Stops</h5>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Any <span class="badge badge-primary badge-pill">328</span> </li>
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 0 <span class="badge badge-primary badge-pill">112</span> </li>
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 1 <span class="badge badge-primary badge-pill">32</span> </li>
                                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 2 or <span class="badge badge-primary badge-pill">48</span> </li>
                            </ul>
                        </div>
                        <div class="py-3">
                            <h5 class="font-weight-bold">Brands</h5>
                            <form class="brand">
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Royal Fields <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Crasmas Fields <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Vegetarisma Farm <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Farmar Field Eve <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-1"> <label class="tick">True Farmar Steve <input type="checkbox" /> <span class="check"></span> </label> </div>
                            </form>
                        </div>
                        <div class="py-3">
                            <h5 class="font-weight-bold">Rating</h5>
                            <form class="rating">
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                            </form>
                        </div>
                    </div>
                </div>
                <section>
                    <div class="content row">
                        <div id="sidebar" className='col-md-3'>
                            <div className='py-3'>
                                <h5 class="font-weight-bold">Price</h5>
                                <form class="brand">
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Any<input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 10000 <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 20000 <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 30000 <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">&lt; 40000 <input type="checkbox" /> <span class="check"></span> </label> </div>
                                </form>
                            </div>
                            <div class="py-3">
                                <h5 class="font-weight-bold">Stops</h5>
                                <ul class="list-group">
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> Any <span class="badge badge-primary badge-pill">328</span> </li></button>
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 0 <span class="badge badge-primary badge-pill">112</span> </li></button>
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 1 <span class="badge badge-primary badge-pill">32</span> </li></button>
                                    <button className='stops-grabdeallist' style={{ border: 'none', backgroundColor: 'transparent' }}><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 2 <span class="badge badge-primary badge-pill">48</span> </li></button>
                                </ul>
                            </div>
                            <div class="py-3">
                                <h5 class="font-weight-bold">Carriers</h5>
                                <form class="brand">
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Air India <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Indigo <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Air Arabia <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Jet Airways <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Emirates Airline <input type="checkbox" /> <span class="check"></span> </label> </div>
                                </form>
                            </div>
                            <div class="py-3">
                                <h5 class="font-weight-bold">Rating</h5>
                                <form class="rating">
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                                </form>
                            </div>
                        </div>
                        <div id="products" className='col-md-9'>
                            <div class="container py-3">
                                <div class="d-lg-flex" style={{ marginTop: '-16px', marginBottom: '10px', marginLeft: '-11px' }}>
                                    <div class="form-inline d-flex grabdeallistselectors">
                                        <div>
                                            <button className='btn btn-danger'>Best : 1200 $ - 24h</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger mx-2'>Fatest : 1600 $ - 20h 12m</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger'>Cheapest : 1000 $ - 24h</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3' style={{ borderLeft: '1px solid #10a5b2' }}>
                                        <div style={{ textAlign: 'center', marginTop: '140px' }}>
                                            <span>Only 10 seats left</span>
                                            <p style={{ fontSize: '22px' }}>$ 1000</p>
                                            <button className='btn btn-primary' onClick={() => setShowLogin(true)} style={{ padding: '10px 30px', marginTop: '40px' }}>Select</button>
                                            <PackageCallRequest show={showLogin} close={() => setShowLogin(false)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3' style={{ borderLeft: '1px solid #10a5b2' }}>
                                        <div style={{ textAlign: 'center', marginTop: '140px' }}>
                                            <span>Only 10 seats left</span>
                                            <p style={{ fontSize: '22px' }}>$ 1000</p>
                                            <button className='btn btn-primary' onClick={() => setShowLogin(true)} style={{ padding: '10px 30px', marginTop: '40px' }}>Select</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='grabdeallist-listing row'>
                                    <div className='col-md-9'>
                                        <p>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                        <div className='position-relative'>
                                            <hr style={{ position: 'absolute', width: '100%', color: 'red' }}></hr>
                                            <div style={{ textAlign: 'center', paddingTop: '5px', cursor: 'pointer' }}><span style={{ background: 'red', borderRadius: '12px', padding: '5px 10px', color: 'white' }}>2 Nights in Bali</span></div>
                                        </div>
                                        <p style={{ marginTop: '20px' }}>Mon 1 Jul</p>
                                        <ul style={{ listStyleType: 'disc', position: 'relative' }}>
                                            <vl className='vl'></vl>
                                            <li>01:00 Indra Gandhi International Airport</li>
                                            <li>10h 15m <span className='badge primary-badge'>Direct</span></li>
                                            <li>11:15 Phi Phi Island</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3' style={{ borderLeft: '1px solid #10a5b2' }}>
                                        <div style={{ textAlign: 'center', marginTop: '140px' }}>
                                            <span>Only 10 seats left</span>
                                            <p style={{ fontSize: '22px' }}>$ 1000</p>
                                            <button className='btn btn-primary' onClick={() => setShowLogin(true)} style={{ padding: '10px 30px', marginTop: '40px' }}>Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div> */}
        </div>
    )
}

export default GrabDealListing