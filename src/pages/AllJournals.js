import React, { useState, useEffect } from 'react';
import Journal from './Journal'
import Banner from '../components/Banner';
import Card from '../components/Card';
import './AllJournals.css'
import JournalHeader from '../components/JournalHeader';

function AllJournals() {

    return (
        <div>
            <JournalHeader />
            <div className="home">
            <Banner /> 
            <div className='home__section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Motivational Monday"
                    description="Reflect on Unique experiences as you chime your way through an inspiring Monday."
                    price="Day 2"
                    num={1}
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Bright Tuesday"
                    description="Get the day and week right, with fabulous affirming talks."
                    price="Day 3"
                    num={2}
                    
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Hello, Wednesday"
                    description="Get comfortable with the week's goals, and show gratitude."
                    price="Day 4"
                    num={3}
                   
                />
            </div>
            <div className='home__section'>
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="It's Thursday Already?"
                    description="Reflect on your little wins, and accomplished goals."
                    price="Day 5"
                    num={4}
                    
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Fire Friday"
                    description="Reflect on finishing up what you've started. "
                    price="Day 6"
                    num={5}
                    
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="Party Saturday"
                    description="Take a bird-eye view of the week, and reflect on your progress"
                    price="Day 7"
                    num={6}
                    
                />
            </div>
        </div>
        </div>
    )
}

export default AllJournals
