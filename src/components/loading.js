import React, { Component } from 'react'
import Loader from '../images/churrasco_loader.gif'

export default class loading extends Component {
    render() {
        return (
            <div className='loadingPage'>
                <img src={Loader} alt="Loader" />
            </div>
        )
    }
}
