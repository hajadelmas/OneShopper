import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class BannerOption extends Component {
    render() {
        return (
            <div className="container-fluid mt-0">
                <div className="row d-flex justify-content-around p-4 mb-5 bannerOptionRow">
                    <div className="col-lg-3 col-sm-12 bannerOptionGeneral">
                        <h2>Click and collect</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Nos plats en vogue, les meilleurs desserts, pourquoi nos entrées sont si bonnes ? Retrouvez toute la carte en cliant sur le bouton ci dessous. </p>
                            <Button className='bannerOption_btn'>Notre carte</Button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 bannerOptionGeneral">
                        <h2>Nos restaurants</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Nos plats en vogue, les meilleurs desserts, pourquoi nos entrées sont si bonnes ? Retrouvez toute la carte en cliant sur le bouton ci dessous. </p>
                            <Button className='bannerOption_btn'>Notre carte</Button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 bannerOptionGeneral">
                        <h2>Notre carte</h2>
                        <div className='bannerOptionGeneral_carre'>
                            <p>Nos plats en vogue, les meilleurs desserts, pourquoi nos entrées sont si bonnes ? Retrouvez toute la carte en cliant sur le bouton ci dessous. </p>
                            <Button className='bannerOption_btn'>Notre carte</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
