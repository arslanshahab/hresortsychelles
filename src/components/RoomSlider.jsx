import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const room1 = require('assets/images/room1.png');
const room2 = require('assets/images/room2.png');
const room3 = require('assets/images/room3.png');
const room4 = require('assets/images/room4.png');

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "70px",
};
const rooms = [
    {
        title: "Junior Suite King",
        image: room1,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area.",
            "Bathroom with bath, shower & toiletries.",
            "Air conditioning & Free WiFi.",
            "Balcony overlooking the resort gardens",
            "Tea/coffee facilities & Minibar"
        ],
        rate: 1087.81,
        original: 1200.05,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Garden Junior Suite King",
        image: room2,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area.",
            "King bed & Lounge area.",
            "Bathroom with bath, shower & toiletries.",
            "King bed & Lounge area.",
            "Air conditioning & Free WiFi.",
        ],
        rate: 500.27,
        original: 347.02,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Garden Junior Suite Twin",
        image: room3,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area.",
            "King bed & Lounge area.",
            "Bathroom with bath, shower & toiletries.",
            "King bed & Lounge area.",
            "Air conditioning & Free WiFi.",
        ],
        rate: 1305.37,
        original: 1500.78,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Grand Beach Villa With King Bed",
        image: room4,
        accomodation: {
            left: 4,
            sleeps: 2,
            size: 'King',
            area: 55,
        },
        additional_details_list: [
            "King bed & Lounge area.",
            "King bed & Lounge area.",
            "Bathroom with bath, shower & toiletries.",
            "King bed & Lounge area.",
            "Air conditioning &amp; Free WiFi.",
        ],
        rate: 439.06,
        original: 600.95,
        room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },

]
const RoomSlider = () => {
    return (
        <div className="room-slider-wrapper py-4">
            <h1 className="section-title">Celebrate UAE National Day with us in Seychelles.</h1>
            <p className="w-75 text-center mx-auto">We've created a special offer for all UAE residents seeking peace, quite, tranquility and incredible food! But don't take our word for it.</p>
            <Carousel
                dynamicHeight={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                centerMode
                centerSlidePercentage={50}
                className="room-carousel"
            >
                {
                    rooms.map(x => (
                        <div>
                            <img src={x.image} />
                            <div className="slide-content py-3">
                                <h1>{x.title}</h1>
                                <ul>
                                    {x.additional_details_list.map(li => (
                                        <li>{li}</li>
                                    ))}
                                </ul>
                                <p className="rate my-3">
                                    € {x.rate}
                                </p>
                                <p className="rate-deleted my-3">
                                    <del style={{opacity: 0.9}}>€ {x.original}</del>
                                </p>
                                <button onClick={()=> window.location = "https://be.synxis.com/?adult=1&arrive=2020-11-28&chain=27304&child=0&currency=EUR&depart=2020-11-29&fbclid=IwAR0_5FnIdWSirzcAEwfXlaClMylBbXdAdfxKhSZ-ti5PdvriLNRDPcyREfw&hotel=78325&level=hotel&locale=en-US&promo=UAE&rooms=1"} className="btn-book-now my-2">BOOK NOW</button>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default RoomSlider;