import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './NewWed.css'; // Import CSS file for styling

const NewWed = () => {
    const [leftImage, setLeftImage] = useState('');

    const images = [
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yej9kvf3duo05pc6abjv.jpg",
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aw7sudyvi7r0ylygbvo0.jpg",
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s4xpp8jlablczq7g96at.jpg",
        // "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gpvigtom7154vuetpaui.jpg",
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hko63756fhwap4pefvzz.jpg"
    ];
const rightImage = [
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v99h9ofcmnsz8ukcdgi9.png",
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/71zapcqj66crxn5fidby.png",
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/evca5i40n8fffi7pwaxm.png",
  ];
    useEffect(() => {
        const selectRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            const imageUrl = images[randomIndex];
            setLeftImage(imageUrl);
        };

        selectRandomImage();
        const intervalId = setInterval(selectRandomImage, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='container'>
            <div className='left-div'>
                <img className="left-img" src={leftImage} alt="" />
            </div>
            <div className='rightDiv'>
                <Slider {...settings}>
                    {rightImage.map((imageUrl, index) => (
                        <div key={index} className="right-img-container">
                            <img className="right-img" src={imageUrl} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default NewWed;





