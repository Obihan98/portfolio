import './index.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tiyqmmr', 'template_6focqz5', form.current, 'bO5YtfDurWMrL3JvQ')
        e.target.reset();
    };
    
    return <>
     <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact me</span>

        <div className='container contact__container grid'>
            <div className='contact__content'>
                <h3 className='contact__title'>Talk to me</h3>
                <div className='contact__info'>
                    <div className='contact__card'>
                        <i className='bx bx-mail-send contact__card-icon'></i>
                        <h3 className='content__card-title'>Email</h3>
                        <span className='contact__card-data'>orhan.ozbasaran@outlook.com</span>

                        <a href='mailto:orhan.ozbasaran@outlook.com' className='contact__button'>
                            Write me {" "}
                            <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                    <div className='contact__card'>
                        <i className='bx bx-phone contact__card-icon'></i>
                        <h3 className='content__card-title'>Mobile</h3>
                        <span className='contact__card-data'>+1 (310) 866-7316</span>

                        <a href='tel:310-866-7316' className='contact__button'>
                            Call me {" "}
                            <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                    <div className='contact__card'>
                        <i className='bx bxl-linkedin contact__card-icon'></i>
                        <h3 className='content__card-title'>Linkedin</h3>
                        <span className='contact__card-data'>orhanozbasaran</span>

                        <a href='https://www.linkedin.com/in/orhanozbasaran/' className='contact__button'>
                            Message me {" "}
                            <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                </div>
            </div>


            <div className='contact__content'>
                <h3 className='contact__title'>Send me a message</h3>
                <div className='contact__info'>
                    <form ref={form} onSubmit={sendEmail} className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder='Insert your name'
                            />
                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder='Insert your email'
                            />
                        </div>
                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Message</label>
                            <textarea name='project' cols={"30"} rows={"10"} className="contact__form-input" placeholder='Write your message'></textarea>
                        </div>
                        <button className='button button--flex'>
                            Send Message<i class="uil uil-message send__icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>

     </section>
    </>
}

export default Contact;