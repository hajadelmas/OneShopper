import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Link } from "gatsby";
import LogoBanner from '../images/logo-banner-white.png'
import { Parallax } from 'react-parallax';
import imgBackground from '../images/background-main.jpg'


var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Banner extends Component {
  render() {

    // const { BannerData } = this.props;

    return (

      <div>

        <div className='parallax-perso'>

          <div className="Banner-details">
            <img src={LogoBanner} className='w-75' />
            <div className='Banner-details-button d-flex justify-content-between'>
              <Link to="/store" className=''>La carte</Link>
              <Link to="/Click">Commander</Link> 
            </div>           
          </div>
        </div>


      </div>
      
    );
  }
}