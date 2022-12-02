/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react' 
import { BsFacebook, BsInstagram } from "react-icons/bs/";
import { AiFillTwitterCircle } from "react-icons/ai/";
import lines from '../assets/images/lines.png'

// eslint-disable-next-line no-lone-blocks
const Footer =()=>{{
    return (
        <div className='footer'>         
            <div className='flex'>
                <div className='footerText'>
                    <a>Pet-First</a>
                </div>
                <div className='free'>
                    <img src={lines} className="lines" alt="lines"/>
                </div>
                <div className='footerColumn'>
                    <div className='footerThings'>
                        <button className='footer_button'>About</button>
                        <button className='footer_button'>Project</button>
                        <button className='footer_button'>Service</button>
                        <button className='footer_button'>Client</button>
                        <button className='footer_button'>Team</button>
                        <button className='footer_button'>Blog</button>
                        <button className='footer_button'>Contact</button>
                    </div>
                    <div className='otherFooterThings'>
                        <button className='footer_button'>Flow</button>
                            <button className='footer_button'><BsFacebook/></button>
                            <button className='footer_button'><BsInstagram/></button>                        
                            <button className='footer_button'><AiFillTwitterCircle/></button>  
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Footer