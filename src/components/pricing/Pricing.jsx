import React from 'react';
import shapeTwo from '../../assets/shape-2.png';
import './pricing.css';
import ShapeOne from "../../assets/shape-1.png";
import { FaCheck,FaArrowRight } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
        <h2 className="section__title text-cs">Pricing</h2>
    <p className="section__subtitle">
        My <span>Pricing Board</span>
    </p>

    <div className="pricing__container container grid">
        <div className="pricing__item card card-one">
            <span className="pricing__subtitle text-cs">Hourley Basis</span>
            <h3 className="pricing__price">
                8 <span> $ </span><em> Hour </em>
            </h3>

            <p className="pricing__description">
             Hourly, I excel in web development and UI/UX design. Proficient in React, HTML/CSS, JavaScript,
             Laravel, and jQuery, I prioritize user-friendly interfaces, 
             robust functionality, and seamless communication for successful project outcomes.
            </p>

            <ul className="pricing__list">
                <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Brand Design</span>
                </li>
                <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Web Development</span>
                </li>

                <li className="list__item">
                    <del>Advertising</del>
                </li>

                <li className="list__item">
                    <del>Photography</del>
                </li>
            </ul>

            <a href="#contact" className="btn pricing__btn text-cs">
                Start Project 
                <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
            </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>

        <div className="pricing__item-wrapper">
            <span className="pricing__label text-cs">Popular</span>
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Freelancing</span>
                <h3 className="pricing__price">
                    160 <span> $ </span><em> Week </em>
                </h3>

                <p className="pricing__description">
                  Specializing in web development and UI/UX, I bring expertise in technologies like React,
                 HTML/CSS, JavaScript, Laravel, and jQuery. With a commitment to delivering 
                 top-notch solutions tailored to your project's needs, I prioritize user experience.
                </p>

                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Brand Design</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>

                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Advertising</span>
                    </li>

                    <li className="list__item">
                        <del>Photography</del>
                    </li>
                </ul>

                <a href="#contact" className="btn pricing__btn text-cs">
                    Start Project 
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
        </div>

        <div className="pricing__item card card-one">
            <span className="pricing__subtitle text-cs">Full Time</span>
            <h3 className="pricing__price">
                500 <span> $ </span><em> Month </em>
            </h3>

            <p className="pricing__description">
           Committed to web development and UI/UX excellence, with skills in React,React-Router,Redux 
              HTML/CSS, JavaScript, Laravel, and jQuery. Dedicated to consistently delivering outstanding results 
              and driven by ongoing improvement.
            </p>

            <ul className="pricing__list">
                <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Brand Design</span>
                </li>
                <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Web Development</span>
                </li>

                <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Advertising</span>
                </li>

                <li className="list__item">
                    {/* <FaCheck className='list__icon'></FaCheck> */}
                    <del>Photography</del>
                </li>
            </ul>

            <a href="#contact" className="btn pricing__btn text-cs">
                Start Project 
                <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
            </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>

        <div className="section__deco deco__left">
                <img src={ShapeOne} alt="" className='shape'/>
            </div>
    </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Pricing</span>
        </div>
    </section>
  )
}

export default Pricing
