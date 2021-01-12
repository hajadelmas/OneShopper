import React, { Component } from "react";

import { Link } from "gatsby";
import LogoBanner from '../images/logo-banner-white.png'



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
              <Link to="/store">La carte</Link>
              <Link to="/Click">Commander</Link> 
            </div>           
          </div>
        </div>


      </div>
      
    );
  }
}