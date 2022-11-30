import React from 'react'
import headphone from '../assets/images/headphone.png' 
import scissors from '../assets/images/sciss.png' 

const Banner3 =()=>{
    return (
        <div className='banner3'>
            <div className='ourService'>
                <p>Our Service</p>
            </div>
            <div className='flex'>
                <div className='flexF'> 
                    <div className="parallelogram">
                        <div className='explore'>
                            <div className='exploreR'>
                                <img src={headphone} className="sourceImage" alt="sourceImage"/>
                                <p className='sourcePh'>Pharmacy</p>
                                <p className='sourceP'>Apouel is an oral tablet that works 
                                    differently than other allergy medications. 
                                    It goes straight to the source to help relieve
                                    itch and inflammation at its core-addressing
                                    the underlying cause of irritation.
                                </p>
                                <button className='explore_button'>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="parallelogram2">
                        <div className='explore'>
                            <img src={scissors} className="sourceImage" alt="sourceImage"/>
                            <p className='sourcePh'>Breed-specific Haircuts</p>
                            <p className='sourceP'>Regular grooming is essential to your pet’s
                                health as it helps prevent skin issues such as matting.
                            </p>
                            <button className='explore_button'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner3