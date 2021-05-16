import React,{ useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import logo from "../images/quote.png";
import logo3 from "../images/quote-3.png";
import logo4 from "../images/quote-4.png";
import logo5 from "../images/quote-5.png";
import logo6 from "../images/quote-6.png";
import logo7 from "../images/quote-7.png";
import logo8 from "../images/quote-8.png";
import logo9 from "../images/quote-9.png";
import logo10 from "../images/quote-10.png";

import ImageGallery from 'react-image-gallery';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false)
    const images = [{ original: logo }, { original: logo3 }, { original: logo4 }, { original: logo5 }, { original: logo6 }, { original: logo7 }, { original: logo8 }, { original: logo9 }, { original: logo10 }]


    return (
        <div className='banner'>
            <div className="banner__search">
                <Button onClick={() => setShowSearch(!showSearch)}className="banner__searchButton" variant='outlined'>
                {showSearch ? 
                <div className="image__container">
                    <ImageGallery id="gallery" items={images} infinite={true} autoPlay={true} showNav={false} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} slideInterval={5000}/>
                </div>
                 : "Show Quotes" }  </Button>

            </div>
            <div className='banner__info'>
                <h1>Settle down and Reflect on your life</h1>
                <h5>
                    Find clarity and purpose in life with daily journaling, and be motivated all week long.
                </h5>
                <Button variant='outlined' onClick={()=> history.push('/journal-0')}>
                    Super Sunday
                </Button>
            </div>

        </div>
    )
}

export default Banner
