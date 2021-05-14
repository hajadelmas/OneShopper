import { Link } from 'gatsby'
import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'

export default class BannerOption extends Component {
    render() {
        return (
            <div className="container-fluid mt-0 bannerOption_Background">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"className='svg1'>
                    <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
                    <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                </svg>
                <div className="row d-flex justify-content-around p-4 bannerOptionRow">
                    <div className="col-lg-3 col-sm-12 col-md-6 bannerOptionGeneral" data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease-out-sine">
                        <h2>Click and collect</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Pour ne pas perdre le goût en ces temps difficiles, retrouvez nos meilleurs plats disponibles en click & collect près de chez vous. </p>
                            <Link to='/Click' className=''>Click & collect</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 bannerOptionGeneral" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-sine">
                        <h2>Nos restaurants</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Nos restaurants et franchises sont à découvrir en cliquant sur le bouton ci-dessous. </p>
                            <Link to='/Click'>Nos restaurants</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 bannerOptionGeneral" data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-out-sine">
                        <h2>Notre carte</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Nos plats en vogue, les meilleurs desserts, pourquoi nos entrées sont si bonnes ? Retrouvez toute la carte en cliquant sur le bouton ci dessous. </p>
                            <Link to='/store'>Notre carte</Link>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"className='svg2'>
                    <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
                    <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                </svg>
            </div>
        )
    }
}
