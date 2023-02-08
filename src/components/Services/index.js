import './index.scss'
import React, {useState} from 'react';

const Services = () => {
    const [toggle, setToggle] = useState(0);

    const handleToggle = (index) => {
        setToggle(index);
    }

    return <>
        <section className='services section' id='services'>
            <h2 className='section__title'>
                Experience
            </h2>
            <span className='section__subtitle'>
                My professional life
            </span>  


            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>
                            Software Engineer
                            <br/>
                            Intern
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(1)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 1 ? "services__model active-model" : "services__model"}>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Profit Cyclops 
                                <br/>
                                Long Beach, CA
                            </h3>
                            <p className='services__model-description'>
                                Software Engineer Intern
                            </p>
                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Build web page components and models with UI Team by using HTML, CSS, and JavaScript,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Implement Ajax, JavaScript, and jQuery for asynchronous data transfer and for client-side functionality,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Conduct design and code reviews of development activity with an emphasis on performance and standards.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>
                            IT Support
                            <br/>
                            Specialist
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(1)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className='services__model'>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Click2Refund
                                <br/>
                                Toronto, ON
                            </h3>
                            <p className='services__model-description'>
                                IT Support Specialist
                            </p>

                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Image company remote desktop servers for over 40 employees,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Diagnose and fix tech-related issues through remote connections and one-on-one phones,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Manage user accounts and grant individual access to system and software.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>
                            Computer Science
                            <br/>
                            Instructor
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(1)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className='services__model'>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Old World Village Foundation
                                <br/>
                                Huntington Beach, CA
                            </h3>
                            <p className='services__model-description'>
                                Computer Science Instructor
                            </p>

                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Instruct 10 8th grade students on Python, C++, HTML, CSS, JavaScript, including basic science and mathematics,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Set up and deploy equipment, and accounts for students to use in class,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Organize games and collaborative discussions to engage students in an active learning.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Services;