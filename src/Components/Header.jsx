import React, { useState } from 'react';
import './Header.css'
import rasm from '../../public/images/Two factor authentication-pana 1.png'
import login from '../../public/images/Frame.png'

const Header = () => {
    const [active, setActive] = useState(false)
    function handleclick(){
        setActive(btnState => !btnState);
    }
    let toggleClasscheck = active ? 'active' : '';
    return (
        <div className='Sign'>

            <div className={`header sign-in` + (active ? '' : '.active')}>
                <div className='left'>
                    <img src={rasm} alt="" />
                </div>
                <div className='right'>
                    <form action="#">
                        <div className='all'>
                            <h2>Sign Up</h2>
                            <p>Already have an account? <a href="#" className={`signin-link${toggleClasscheck}`} onClick={handleclick}>Sign in</a></p>
                            <input type="text" name="text" placeholder='First name' id="" />
                            <input type="text" name="text" placeholder='Last name' id="" />
                            <input type="number" name="text" placeholder='Phone' id="" />
                            <input type="Email" name="text" placeholder='Email' id="" />
                            <input type="password" name="text" placeholder='Password' id="" />
                            <button>Next step</button>
                        </div>
                    </form> 
                </div>
            </div>

            <div className='header sign-up'>
                <div className='left login1'>
                    <img src={login} alt="" />
                </div>
                <div className='right signin'>
                    <form action="#">
                        <div className='all leks'>
                            <h2>Sign In</h2>
                            <p>Do not you have an account? <a href="#" className={`signup-link${toggleClasscheck}`} onClick={handleclick}>Sign up</a></p>
                            <input type="Email" name="text" placeholder='Email' id="" />
                            <input type="password" name="text" placeholder='Password' id="" />
                            <button>Next step</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header;
