import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import './index.scss'

const Navbar = () => {
    const[Toggle, setToggle] = useState(true);

    
    return <> 
    <header className='header'>
        <nav className='nav container'>
            <NavLink exact='True' className={isActive =>
                "nav__logo" + (!isActive ? " unselected" : "")
                } to='/'>© Orhan Ozbasaran</NavLink>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink exact='True' className='nav__link' activeclassname='selected' to='/'>
                            <i className='uil uil-estate nav__icon'></i>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink exact='True' className='nav__link' activeclassname='selected' to='/About'>
                            <i className='uil uil-user nav__icon'></i>
                            About
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink exact='True' className='nav__link' activeclassname='selected' to='/Contact'>
                            <i className='uil uil-file-alt nav__icon'></i>
                            Skills
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink exact='True' className='nav__link' activeclassname='selected' to='/Projects'>
                            <i className='uil uil-briefcase-alt nav__icon'></i>
                            Services
                        </NavLink>
                    </li>   
                    <li className='nav__item'>
                        <NavLink exact='True' className='nav__link' activeclassname='selected' to='/Projects'>
                            <i className='uil uil-scenery nav__icon'></i>
                            Portfolio
                        </NavLink>
                    </li>  
                    <li className='nav__item'>
                        <NavLink exact='True' className='nav__link' activeclassname='selected' to='/Projects'>
                            <i className='uil uil-message nav__icon'></i>
                            Contact
                        </NavLink>
                    </li>                  
                </ul>

                <i className='uil uil-times nav__close' onClick={() => setToggle(!Toggle)}></i>
            </div>

            <div className='nav__toggle' onClick={() => setToggle(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>     
    </>
}

export default Navbar;