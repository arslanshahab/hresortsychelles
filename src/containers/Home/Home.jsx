import React, { Component } from 'react';
import MainHeader from 'components/MainHeader';
import SearchForm from 'components/SearchForm';
import ServiceCard from 'components/ServiceCard';
import { Container, Grid } from '@material-ui/core';
import DescriptionCard from 'components/DescriptionCard';
import HotelInfoCard from 'components/HotelInfoCard';
import AboutCard from 'components/AboutCard';
import CopyrightFooter from 'components/CopyrightFooter';
import ServiceTabs from 'components/ServicesTabs';
import RoomSlider from 'components/RoomSlider';
import GuestReviews from 'components/GuestReviews';
import BottomNavigator from 'components/BottomNavigator';

const transportation = require('assets/images/icon-transport.png');
const restaurant = require('assets/images/icon-food.png');
const relaxation = require('assets/images/icon-spa.png');

const room1 = require('assets/images/room1.png');
const room2 = require('assets/images/room2.png');
const room3 = require('assets/images/room3.png');
const room4 = require('assets/images/room4.png');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
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
                        "King bed &amp; Lounge area.",
                        "King bed &amp; Lounge area.",
                        "Bathroom with bath, shower &amp; toiletries.",
                        "King bed &amp; Lounge area.",
                        "Air conditioning &amp; Free WiFi.",
                    ],
                    rate: 1087.81,
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
                        "King bed &amp; Lounge area.",
                        "King bed &amp; Lounge area.",
                        "Bathroom with bath, shower &amp; toiletries.",
                        "King bed &amp; Lounge area.",
                        "Air conditioning &amp; Free WiFi.",
                    ],
                    rate: 1305.37,
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
                        "King bed &amp; Lounge area.",
                        "King bed &amp; Lounge area.",
                        "Bathroom with bath, shower &amp; toiletries.",
                        "King bed &amp; Lounge area.",
                        "Air conditioning &amp; Free WiFi.",
                    ],
                    rate: 5439.06,
                    room_details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                },

            ]
        }
    }
    render() {
        const { cards } = this.state;
        return (
            <React.Fragment>
                <MainHeader />
                <RoomSlider />
                <div className="service-tabs-wrapper">
                    <h1 className="text-center p-2">Explore our luxurious Facilities</h1>
                    <ServiceTabs />
                </div>
                {/* <div className="rooms-wrapper p-4">
                    <h1 className="title text-center">Select your suite or villa</h1>
                    {
                        this.state.rooms.map(x => (
                            <div className="room-item">
                                <HotelInfoCard title={x.title} image={x.image} rate={x.rate} accomodation={x.accomodation} additional_details_list={x.additional_details_list} room_details={x.room_details} />
                            </div>
                        ))
                    }
                </div> */}
                <GuestReviews />
                <AboutCard />
                <CopyrightFooter />
                <BottomNavigator />
            </React.Fragment>
        );
    }
}

export default Home;