import './index.scss'
import React, {useState} from 'react';

const Services = () => {
    const [toggle, setToggle] = useState(0);

    const handleToggle = (index) => {
        setToggle(index);
    }

    return <>
        <section className='services section' id='projects'>
            <h2 className='section__title'>
                Projects
            </h2>
            <span className='section__subtitle'>
                My contributions
            </span>  


            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>
                            Multiplayer TicTacToe Game with Java
                            <br/>
                            Client-Server App
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
                                MVC and Client-Server Architecture 
                            </h3>
                            <p className='services__model-description'>
                                <a href='https://github.com/Obihan98/TicTacToe-Client-Server-Game' className='services__button' target="_blank">
                                    GitHub Repository
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                            </p>
                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Implement an MVC design pattern for a client-server architecture with Java,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Create a model-view-controller pattern that supports multiple games simultaneously allowing each game to have its own thread,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Develop a client user interface that is able to communicate with the opponent through the network</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className='services__content'>
                    <div>
                        <i className='uil uil-processor services__icon'></i>
                        <h3 className='services__title'>
                            Machine Learning Classification Methods
                            <br/>
                            Fashion-MNIST
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(4)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 4 ? "services__model active-model" : "services__model"}>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Investigation of Classification Methods 
                                <br/>
                                for Fashion-MNIST
                            </h3>
                            <p className='services__model-description'>
                                Machine Learning / Data Mining
                            </p>

                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Implement and analyze kNN, logistic, decision tree, and feedforward neural networks applied to the dataset,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Explore dataset with visualization and generation of summary statistics, and conduct hyperparameter tuning,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Evaluate the performance of classifiers both individually and combined with ensemble and hybrid methods.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>
                            Python Package for Sparse Matrices
                            <br/>
                            Overloaded Operators
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(5)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 5 ? "services__model active-model" : "services__model"}>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Sparse Matrix Class for Python
                            </h3>
                            <p className='services__model-description'>
                                <a href='https://github.com/Obihan98/Sparse-Matrix-Class-for-Python' className='services__button' target="_blank">
                                    GitHub Repository
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                            </p>

                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Implement a class that represents and defines methods, operators, and an iterator to identify a 2-D Sparse Matrix,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Overload operators to enhance the usability and cover edge cases to prevent exceptions and errors,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Design and analyze advance algorithms to improve time and space complexity.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-x services__icon'></i>
                        <h3 className='services__title'>
                            TicTacToe Game
                            <br/>
                            HTML / CSS / JS
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(6)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 6 ? "services__model active-model" : "services__model"}>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                TicTacToe
                                <br/>
                                HTML / CSS / JS
                            </h3>
                            <p className='services__model-description'>
                                <a href='https://github.com/Obihan98/TicTacToe' className='services__button' target="_blank">
                                    GitHub Repository
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                                <br/>
                                <a href='https://obihan98.github.io/TicTacToe/' className='services__button' target="_blank">
                                    Play
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                            </p>

                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Implement a TicTacToe game with only HTML, CSS, and JavaScript,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Manipulate document object model with JavaScript to handle moves, and check win condition,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Design the model with least HTML, generate the board efficiently with DOM manipulation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-user services__icon'></i>
                        <h3 className='services__title'>
                            Portfolio Website
                            <br/>
                            Hosted by Firebase
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(3)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 3 ? "services__model active-model" : "services__model"}>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Portfolio Website
                                <br/>
                                React / Node.js
                            </h3>
                            <p className='services__model-description'>
                                <a href='https://github.com/Obihan98/portfolio' className='services__button' target="_blank">
                                    GitHub Repository
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                            </p>

                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Design and implement this beautiful user-friendly portfolio website from scratch,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Make use of various packages and APIs with React and Node.js,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Deploy and maintain on Firebase, and initiliaze a custom domain name.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='services__content'>
                    <div>
                        <i className='uil uil-clock services__icon'></i>
                        <h3 className='services__title'>
                            Musical Alarm Clock
                            <br/>
                            Embedded Software
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => handleToggle(2)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggle === 2 ? "services__model active-model" : "services__model"}>
                        <div className='services__model-content'>
                            <i className='uil uil-times services__model-close' onClick={() => handleToggle(0)}></i>
                            <h3 className='services__model-title'>
                                Universal, Digital, and Musical Alarm Clock
                            </h3>
                            <p className='services__model-description'>
                                <a href='https://github.com/Obihan98/Digital-Clock' className='services__button' target="_blank">
                                    GitHub Repository
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                                <br/>
                                <a href='https://www.youtube.com/watch?v=25HzhwQbgjs' className='services__button' target="_blank">
                                    Watch the Video
                                    <i className='uil uil-arrow-right services__button-icon'></i>
                                </a>
                            </p>
                            <ul className='services__model_services grid'>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Implement an MVC design pattern for a client-server architecture with Java,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Create a model-view-controller pattern that supports multiple games simultaneously allowing each game to have its own thread,</p>
                                </li>
                                <li className='services__model-service'>
                                    <i className='uil uil-check-circle services__model-icon'></i>
                                    <p className='sevices__model-info'>Develop a client user interface that is able to communicate with the opponent through the network</p>
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