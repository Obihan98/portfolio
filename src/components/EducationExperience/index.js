import './index.scss'
import React, {useState} from 'react';

const Qualifications = () => {
    const [toggle, setToggle] = useState(1);

    const handleToggle = (index) => {
        setToggle(index);
    }
    
    
    return <>
        <section className='qualification section' id='edex'>
            <h2 className='section__title'>
                Education / Experience
            </h2>
            <span className='section__subtitle'>
                What I offer
            </span> 

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => handleToggle(1)}>
                        <i className='uil uil-graduation-cap qualification__icon'></i>{" "}
                        Education
                    </div>
                    <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => handleToggle(2)}>
                        <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
                        Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Computer Science
                                </h3>
                                <span className='qualification__subtitle'>
                                    University of California, Irvine
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2021 - 2023
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'>

                                </span>
                                <span className='qualification__line'>

                                </span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>


                            <div>
                                <span className='qualification__rounder'>

                                </span>
                                <span className='qualification__line'>

                                </span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>
                                    Full-stack Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    App Brewery Bootcamp
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2022
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Software Engineer Intern
                                </h3>
                                <span className='qualification__subtitle'>
                                    Profit Cyclops, Long Beach, CA
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2022 – 2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'>

                                </span>
                                <span className='qualification__line'>

                                </span>
                            </div>
                        </div>
                        <div className='qualification__data'>
                            <div></div>


                            <div>
                                <span className='qualification__rounder'>

                                </span>
                                <span className='qualification__line'>

                                </span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>
                                    IT Support Specialist
                                </h3>
                                <span className='qualification__subtitle'>
                                    Click2Refund, Toronto, ON
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2019 – April
                                </div>
                            </div>
                            
                        </div>

                        <div className='qualification__data'>

                            

                            <div>
                                <h3 className='qualification__title'>
                                    Computer Science Instructor
                                </h3>
                                <span className='qualification__subtitle'>
                                    Old World Village Foundation, Huntington Beach, CA
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2019 – 2020
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'>

                                </span>
                                <span className='qualification__line'>

                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </>
}

export default Qualifications;