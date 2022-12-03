import React from 'react'
import parent from '../assets/images/parent.png';

const Parent =()=>{
    return (
        <div className='banner5'>         
            <div className='flex'>
                <div className='easy_pet'>
                    <div className='easy_pet_image'>
                        <img src={parent} className="parent" alt="parent"/>
                    </div>
                </div>
                <div className='easy_pet_text'>
                    <div className='pet_parent'>
                        <p>Making pet parenting easy for everyone.</p>
                    </div>
                    <div className='pet_parent_desc'>
                        <p>Could this be the dog with the longest tail? The Rampur
                            Greyhound - shy, sensitive, alert, and faithful. This is a breed
                            that has climbed its way to being top dog because of its intelligence</p>
                    </div>
                    <div className='pet_parent_list'>
                        <label>
                            <input type="radio" checked="checked" name="radio"/>
                            <span class="checkMark"></span>
                            Adoption
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <span class="checkMark"></span>
                            Frozen Row
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <span class="checkMark"></span>
                            Next Day Delivery
                        </label>
                    </div>
                    <button className='pet_parent_button'>Explore</button>
                </div>
            </div>
        </div>
    );
}

export default Parent