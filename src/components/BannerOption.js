import { Link } from 'gatsby'
import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'

export default class BannerOption extends Component {
    render() {
        return (
            <div className="container-fluid mt-0">
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
                            <Link to='/restaurants'>Nos restaurants</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6 bannerOptionGeneral" data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-out-sine">
                        <h2>Notre carte</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Nos plats en vogue, les meilleurs desserts, pourquoi nos entrées sont si bonnes ? Retrouvez toute la carte en cliant sur le bouton ci dessous. </p>
                            <Link to='/store'>Notre carte</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
