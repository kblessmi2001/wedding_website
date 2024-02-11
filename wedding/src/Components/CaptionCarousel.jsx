import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: '50%', transform: 'translateX(50%)' }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: '50%', transform: 'translateX(-50%)' }}
      onClick={onClick}
    />
  );
};
const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};



const CaptionCarousel = () => {
  const [slider, setSlider] = useState([]);

  const cards = [
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v99h9ofcmnsz8ukcdgi9.png",
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/71zapcqj66crxn5fidby.png",
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/evca5i40n8fffi7pwaxm.png",
  ];

  return (
    <Box position={'relative'} height={'100%'} width={'100%'}>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            className="card-image"
            height={'469px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            overflow={"hidden"}
            width={"100%"}
            marginBottom={"2px"}
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default CaptionCarousel;
