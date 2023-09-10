import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg';
import Blog2 from '../../assets/blog2.jpg';
import Blog3 from '../../assets/blog3.jpg';
import ShapeOne from "../../assets/shape-1.png";
import './blog.css';
const Blog = () => {
  return (
    <section className="blog section" id="blog">
           <h2 className="section__title text-cs">Latest Blog</h2>
            <p className="section__subtitle">
                My <span>Articles and Advice</span>
            </p>


            <div className="blog__container container grid">
                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">SEPTEMBER 11, 2023</span>
                    <h3 className="blog__title">The Main Thing for Coder</h3>
                    <p className="blog__description">Prioritize user needs and experience, ensuring that
                     the software you create
                     ultimately serves its intended purpose and provides value to the 
                     end-users.Keep user feedback at the forefront of your design decisions,
                      iterating to continually enhance the user experience...
                    </p>


                    <a href="" className="link">
                    Read more
                    <FaArrowRight className='link_icon '></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
                </div>
                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">SEPTEMBER 8, 2023</span>
                    <h3 className="blog__title">Follow Your Design Process</h3>
                    <p className="blog__description">The UI/UX design process typically begins with research,
                     where designers gather insights about the target audience, their preferences,
                      and pain points. This research forms the foundation for creating user personas
                       and identifying key user journeys...
                    </p>


                    <a href="" className="link">
                    Read more
                    <FaArrowRight className='link_icon '></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
                </div>
                <div className="blog__item card card-two">
                    <span className="blog__date text-cs">October 1, 2023</span>
                    <h3 className="blog__title">Secrate to Create the Better Interface</h3>
                    <p className="blog__description">Strive for intuitive designs that seamlessly guide users
                     while fulfilling their specific needs. Implement user-centric
                      testing and feedback loops throughout the development process to
                       refine and optimize the interface continuously...
                    </p>


                    <a href="" className="link">
                    Read more
                    <FaArrowRight className='link_icon '></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
                </div>

                <div className="section__deco deco__right">
                <img src={ShapeOne} alt="" className='shape'/>
            </div>
            </div>

            <div className="section__bg-wrapper">
             <span className="bg__title">Blog</span>
            </div>
    </section>
  )
}

export default Blog