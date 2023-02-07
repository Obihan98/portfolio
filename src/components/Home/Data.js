import './index.scss';
import 'animate.css';
import AnimatedLetters from './AnimatedLetters';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

const Data = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstName = ['O', 'r', 'h', 'a', 'n']
    const lastName = [ 'O', 'z', 'b', 'a', 's', 'a ','r', 'a', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e']
    const jobArray2 = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    return <>
        <div className='home__data'>
            <h1 className='home__title'>
                <div className='no-wrap'>
                    <div className='name'><AnimatedLetters letterClass={letterClass} strArray={firstName} idx={1}/></div>
                    <span> </span>
                    <div className='name'>
                        <AnimatedLetters letterClass={letterClass} strArray={lastName} idx={1}/>
                        <FontAwesomeIcon className='home__hand' icon={faHand}/>
                    </div>
                </div>
            </h1>
            <h3 className='home__subtitle'>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={1}/>
                <span> </span>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={1}/>  
            </h3>
            <p className='home__description'>
                I'm a software engineer based in California, and I'm very passionate and dedicated to my work.
            </p>
            <NavLink exact='True' className='button button--flex' activeclassname='selected' to='/Contact'>
                Say Hello<i class="uil uil-message send__icon"></i>
            </NavLink>
        </div>
    </>
}

export default Data;