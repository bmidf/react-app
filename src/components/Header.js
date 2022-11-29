import React from 'react'

const Header =()=>{
    return (
        <div className='flex'>
            <div className='main_header'>
                <div className='pet'>
                    <button className='pet_first' >Pet-First</button>
                </div>
                <div className='middle'>
                        <button className='header_button'>About</button>
                        <button className='header_button'>Service</button>
                        <button className='header_button'>Madi-Care</button>
                        <button className='header_button'>Blog</button>
                </div>
                <div className='sign_up'>
                    <button className='sign_up_button'>Sign up</button>
                </div>
            </div>
        </div>
    )
}
export default Header;