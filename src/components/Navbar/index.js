import { NavLink } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return <> 
    <header>
        <div className='logo'>Orhan Ozbasaran</div>
        <ul>
            <li><NavLink exact='True' className='nav-link' activeclassname='active' to='/'>Home</NavLink></li>
            <li><NavLink exact='True' className='nav-link' activeclassname='active' to='/About'>About</NavLink></li>
            <li><NavLink exact='True' className='nav-link' activeclassname='active' to='/Contact'>Projects</NavLink></li>
            <li><NavLink exact='True' className='nav-link' activeclassname='active' to='/Projects'>Contact</NavLink></li>
        </ul>
    </header>     
    </>
}

export default Navbar;