/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import arrow from '../assets/images/arrow.png'
import dog from '../assets/images/dog3.png' 
import dog1 from '../assets/images/dog1.png' 
import dog2 from '../assets/images/dog2.png' 
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Banner =()=>{
    return (
        <div className='container'>
            <div className='flex'>
                <div className="box1">
                    <div className="box33">  
                        <div className="logo_arrow">
                            <img src={arrow} className="arrow" alt="arrow"/>
                            <a className="available">Available in selected states</a>
                        </div>
                        <div className="text_first">
                            <p className="pet-first">A PET FIRST</p>
                            <p className="approach">APPROACH TO</p>
                            <p className="wellness">WELLNESS</p>
                        </div>
                        <button className="learnMoreButton">Learn More</button>
                    </div>
                </div>
                <div className="slideshow">
                    <Slide indicators={true} >
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${dog})`}}>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${dog1})`}}>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${dog2})`}}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div> 
        </div>
    )
}
export default Banner