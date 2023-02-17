import './index.scss'
import AboutImg from "../../assets/images/orhanandnihal.jpg"
import Info from './Info';
import { HashLink } from "react-router-hash-link"

const About = ({letterClass, strArray, idx}) => {
    return <>
        <section className='about section' id='about'>
            <h2 className='section__title'>
                About Me
            </h2>
            <span className='section__subtitle'>
                My Introduction
            </span>

            <div className='about__container container grid'>
                <img src={AboutImg} alt="Orhan_and_Nihal_Family_Photo" className='about__img'></img>
                <div className='about__data'>
                    <Info/>
                    <p className='about__description'>
                        As of June 2023, a new software engineer graduate from the University of California, Irvine.
                        My focus is on Machine Learning, Artificial Intelligence and Full-stack Web Development.
                    </p>

                    <HashLink exact='True' className='button button--flex' activeclassname='selected' to='/#contact'>
                        Say Hello<i class="uil uil-message send__icon"></i>
                    </HashLink>
                </div>
            </div>
        </section>
    </>
};

export default About;