import React from 'react';
import profileImg from "../../assets/profile-img1.png";
import ShapeOne from "../../assets/shape-1.png";
import ShapeTwo from "../../assets/shape-2.png";

import {FaWhatsapp,FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';
import './home.css'
import CV from '../../assets/Yogesh-resume .pdf'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
                </p>
                <h1 className="home__title text-cs">
                    <span>Yogesh </span>Singh
                </h1>

                <p className="home__job">
                    <span className='text-cs'> I Am </span> <b>Web Devloper</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile'/>
                    </div>
                    <p className="home__data home__data-one">
                        <span className="text-lg text-cs">
                            2 <b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                            Years Of <span>Experience</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg text-cs"> 10 </span>

                        <span className="text-sm text-cs">
                            Completed <span>Projects</span>
                        </span>
                    </p>

                    <img src={ShapeOne} alt="" className="shape shape__1" />
                    <img src={ShapeTwo} alt="" className="shape shape__2" />
                    <img src={ShapeTwo} alt="" className="shape shape__3" />
                </div>

                <p className="home__text">
                Embark on a digital journey with a seasoned web development maestro hailing
                 from the vibrant city of Gorakhpur, India. With a knack for crafting visually
                  stunning web designs and a wealth of experience, I'm here to turn your online
                   dreams into captivating realities. Let's talk about your unique vision today!
                </p>

                <div className="home__socials">
                    <a href="https://wa.link/br0lsr" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/yogesh1dev"  target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/yogeshmlv" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/its__novo/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaInstagram />
                    </a>
                </div>

                <div className="home__btns">
                    <a download=' ' href={CV} className="btn">
                        Download CV</a>

                    <a href='#skills' className="hero__link text-cs">
                        My Skills</a>
                </div>
            </div>

            <div className="section__deco deco__left">
                <img src={ShapeOne} alt="" className='shape'/>
            </div>
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Web Devloper</span>
        </div>
    </section>
  )
}

export default Home
