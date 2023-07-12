import React from 'react'
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <>
            <div className='sidebar' style={{display: props.value ? 'block' : 'none'}}>
                <ul>
                    <div class="dropdown-sidebar">
                        <span>Top Beach Destinations</span>
                        <div class="dropdown-content-sidebar">
                            <p>Maldives</p>
                            <p>Bali</p>
                            <p>Phi Phi Island</p>
                            <p>Monkey Island</p>
                            <p>Goa</p>
                            <p>Budapest</p>
                            <p>Kerela</p>
                        </div>
                    </div>
                    <div class="dropdown-sidebar">
                        <span>Europe Experience</span>
                        <div class="dropdown-content-sidebar">
                            <p>Rome</p>
                            <p>London</p>
                            <p>Paris</p>
                            <p>Prague</p>
                            <p>Amsterdam</p>
                            <p>Athens</p>
                            <p>Santorini</p>
                            <p>Florence</p>
                        </div>
                    </div>
                    <div class="dropdown-sidebar">
                        <span>Tours and Packages</span>
                        <div class="dropdown-content-sidebar">
                            <p>Europe</p>
                            <p>Spain</p>
                            <p>India</p>
                            <p>USA</p>
                            <p>Bali</p>
                            <p>Thailand</p>
                            <p>Beaches</p>
                        </div>
                    </div>
                    <div class="dropdown-sidebar">
                        <span>Seasonal Tour</span>
                        <div class="dropdown-content-sidebar">
                            <p>Summer</p>
                            <p>Winter</p>
                            <p>Moonson</p>
                            <p>Autumn</p>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Sidebar