import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
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

    const { BannerData } = this.props;

    return (
      <div className="slider-section">
        {/* <Slider {...settings} className="contain-slick"> */}
          {BannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img sizes={items.node.image.fluid} />
                <div className="Banner-details">
                  <div className=''>
                    {/* <span className="sub-title">{items.node.subHeading}</span> */}
                    {/* <h1 className='bannerTitle'>{items.node.title}</h1> */}
                    <img src={LogoBanner} className='w-75' />
                    <div className='Banner-details-button d-flex justify-content-between'>
                      <Link to="/store">La carte</Link>
                      <Link to="/Click">Commander</Link>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* </Slider> */}
      </div>
    );
  }
}