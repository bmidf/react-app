import React from 'react'
import footerDog from '../assets/images/footerDog.png' 

const Banner4 =()=>{
    return (
        <div className='banner4'>
            <div className='flex'>
                <div className='banner4_1'>
                    <div className='footer_dog'>
                        <img src={footerDog} className="footerDog" alt="sourceImage"/>
                    </div>
                </div>
                <div className='banner4_2'>
                    <div className='emailText'>
                        <p>Subscribe & Get Pet Update and News</p>
                    </div>
                    <div className='inputMail'>
                        <input className='inputMail2'type="text" name="name" placeholder='Mail' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner4
