import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar';
const slider1 = require('assets/images/sliders/main/1.jpg');
const slider2 = require('assets/images/sliders/main/2.jpg');
const slider3 = require('assets/images/sliders/main/3.jpg');
const slider4 = require('assets/images/sliders/main/4.jpg');
const slider5 = require('assets/images/sliders/main/5.jpg');

const MainHeader = (props) => {
    return (
        <React.Fragment>
            <div className="header-wrapper">
                <Navbar />
                <header className="text-center">
                    <div className="title">
                        <h1 className="text-center">UAE National Day <br/> Gateway In Seychelles</h1>
                        <button onClick={()=> window.location = "https://be.synxis.com/?adult=1&arrive=2020-11-28&chain=27304&child=0&currency=EUR&depart=2020-11-29&fbclid=IwAR0_5FnIdWSirzcAEwfXlaClMylBbXdAdfxKhSZ-ti5PdvriLNRDPcyREfw&hotel=78325&level=hotel&locale=en-US&promo=UAE&rooms=1"} className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                    </div>
                </header>
                {/* <Carousel
                    dynamicHeight={false}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                >
                    <div>
                        <img src={slider1} />
                        <div className="title">
                            <h1 className="text-center">UAE National Day Gateway In Seychelles</h1>
                            <button className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                        </div>
                    </div>
                    <div>
                        <img src={slider2} />
                        <div className="title">
                            <h1 className="text-center">UAE National Day Gateway In Seychelles</h1>
                            <button className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                        </div>
                    </div>
                    <div>
                        <img src={slider3} />
                        <div className="title">
                            <h1 className="text-center">UAE National Day Gateway In Seychelles</h1>
                            <button className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                        </div>
                    </div>
                    <div>
                        <img src={slider4} />
                        <div className="title">
                            <h1 className="text-center">UAE National Day Gateway In Seychelles</h1>
                            <button className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                        </div>
                    </div>
                    <div>
                        <img src={slider5} />
                        <div className="title">
                            <h1 className="text-center">UAE National Day Gateway In Seychelles</h1>
                            <button className="btn-theme btn-book-now px-4 mt-4 py-2">Book Now</button>
                        </div>
                    </div>
                </Carousel> */}
            </div>
        </React.Fragment>
    );
}

export default MainHeader;