import React from 'react';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import image1 from '../BanarSlider/1.jpg';
import image2 from '../BanarSlider/2.jpg';


const BanarSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
       
            <div className="container">

<Slider>
          <div>
              <h2>Helo1</h2>
            <img src={image1} alt="" />
          </div>
          <div>
            <h3>2</h3>
            <img src={image2} alt="" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

            </div>
        
    );
};

export default BanarSlider;