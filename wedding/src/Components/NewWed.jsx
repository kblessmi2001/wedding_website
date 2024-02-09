import React, { useState, useEffect } from 'react';
import './NewWed.css'; // Import CSS file for styling

const NewWed = () => {
    const [leftImage, setLeftImage] = useState('');

    const images = [
        "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519220407669-06f9912b4aca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1519307212971-dd9561667ffb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

    return (
        <div className='container'> 
            <img className="left-img" src={leftImage} alt="" />
            <div style={{display:"flex",flexDirection:"column"}}> 
                <img className="right-img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v99h9ofcmnsz8ukcdgi9.png" alt="" />
                <img className="right-img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v99h9ofcmnsz8ukcdgi9.png" alt="" />
                <img className="right-img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v99h9ofcmnsz8ukcdgi9.png" alt="" />
            </div>
        </div>
    );
}

export default NewWed;




