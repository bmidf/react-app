import React from 'react'
import different45 from '../assets/images/45.png' 
import rabbit from '../assets/images/rabbit.jpg' 
import dog4 from '../assets/images/dog4.jpg' 
import dog5 from '../assets/images/dog5.jpg' 
import middleDog from '../assets/images/middledog.png' 
import cat from '../assets/images/cat.jpg' 
import cat2 from '../assets/images/cat2.jpg' 
import goat from '../assets/images/goat.jpg' 
import hamster from '../assets/images/hamster.jpg' 
import parrot from '../assets/images/parrot.jpg' 

const Banner2 =()=>{
    return (
        <div className='banner2_container'>
            <div className='flex'>
                <div className='image_banner2'>
                        <img src={different45} className="img45" alt="45"/>
                </div>
                <div className="allDogs">
                    <div className='dogs'><img src={rabbit} className="rabbit" alt="rabbit"/></div>
                    <div className='dogs2'><img src={dog4} className="rabbit" alt="45"/></div>
                </div>
                <div className="oneDog">
                    <div className='textDogs'><p>Dog (jasper)</p></div>
                    <div className='middleImage'><img src={middleDog} className="middleDogImg" alt="middleDogImg"/></div>
                </div>
                <div className="allDogs">
                    <div className='dogs'><img src={dog5} className="rabbit" alt="dog5"/></div>
                    <div className='dogs2'><img src={cat} className="rabbit" alt="cat"/></div>
                </div>
                <div className="allDogs">
                    <div className='dogs'><img src={cat2} className="rabbit" alt="cat2"/></div>
                    <div className='dogs2'><img src={goat} className="rabbit" alt="goat"/></div>
                </div>
                <div className="allDogs">
                    <div className='dogs'><img src={hamster} className="rabbit" alt="hamster"/></div>
                    <div className='dogs2'><img src={parrot} className="rabbit" alt="parrot"/></div>
                </div>
            </div>
        </div>
    );
}
export default Banner2
