import { HashLink } from "react-router-hash-link"
import React, {useState} from 'react';
import './index.scss'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const[Toggle, setToggle] = useState(false);

    
    return <> 
    <header className='header'>
        <nav className='nav container'>
            <NavLink exact='True' className={isActive =>
                "nav__logo" + (!isActive ? " unselected" : "")
                } to='/'>© Orhan Ozbasaran</NavLink>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <HashLink exact='True' className='nav__link' activeclassname='selected' to='/#home' smooth={true}>
                            <i className='uil uil-estate nav__icon'></i>
                            Home
                        </HashLink>
                    </li>
                    <li className='nav__item'>
                        <HashLink exact='True' className='nav__link' activeclassname='selected' to='/#about' smooth={true}>
                            <i className='uil uil-user nav__icon'></i>
                            About
                        </HashLink>
                    </li>
                    <li className='nav__item'>
                        <HashLink exact='True' className='nav__link' activeclassname='selected' to='/#skills' smooth={true}>
                            <i className='uil uil-file-alt nav__icon'></i>
                            Skills
                        </HashLink>
                    </li>
                    <li className='nav__item'>
                        <HashLink exact='True' className='nav__link' activeclassname='selected' to='/#projects' smooth={true}>
                            <i className='uil uil-briefcase-alt nav__icon'></i>
                            Projects
                        </HashLink>
                    </li>   
                    <li className='nav__item'>
                        <HashLink exact='True' className='nav__link' activeclassname='selected' to='/#edex' smooth={true}>
                            <i className='uil uil-scenery nav__icon'></i>
                            Experience
                        </HashLink>
                    </li>  
                    <li className='nav__item'>
                        <HashLink exact='True' className='nav__link' activeclassname='selected' to='/#contact' smooth={true}>
                            <i className='uil uil-message nav__icon'></i>
                            Contact
                        </HashLink>
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
