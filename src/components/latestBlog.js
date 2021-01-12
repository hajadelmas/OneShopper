import React, { Component } from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"

export default class LatestBlogs extends Component {
    render() {

        const { data } = this.props;

        return (
            <div className="container-fluid latestBlogPage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"className='svg1'>
                    <g color='#00B05B'>
                        <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" fill='currentColor'/>
                        <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" fill='currentColor' />  
                    </g>
                </svg>
                <div className="text-center">
                    <h2 className="with-underline">Articles a la une</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"className='svg2'>
                    <g color='black'>
                        <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" fill='currentColor'/>
                        <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" fill='currentColor' />  
                    </g>
                </svg>
                {/* <ul className="latest-blog">
                    {data.edges.map(items => (
                        <li key={items.node.id} data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-sine">
                            <div className="inner">
                                <Link to={items.node.slug}></Link>
                                <Img sizes={items.node.featureImage.fluid} />
                                <h2>{items.node.title}</h2>
                            </div>
                        </li>
                    ))}
                </ul> */}
            </div>
        );
    }
}