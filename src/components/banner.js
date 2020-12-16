import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Link } from "gatsby";

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
        <Slider {...settings} className="contain-slick">
          {BannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img sizes={items.node.image.fluid} />
                <div className="Banner-details" data-sal="fade" data-sal-delay="300" data-sal-easing="ease-out-sine">
                  <div className=''>
                    <span className="sub-title">{items.node.subHeading}</span>
                    <h1 className='bannerTitle'>{items.node.title}</h1>
                    <Link to="/store">La carte</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}