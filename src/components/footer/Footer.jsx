import React from 'react';
import {FaWhatsapp,FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
        <footer className="footer">
            <div className="footer__container container grid">
               <div className="footer__socials">
                    <a href="https://wa.me/918318561551" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/yogesh-singh-4b909b149"  target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/yogeshmlv" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/its__novo/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaInstagram />
                    </a>
                </div>

                    <p className="footer__copyright text-cs">
                     &copy; 2023 <span>Yogesh Singh</span>. All Rights Reserved
                    </p>

                    <p className="footer__copyright text-cs"> Developed by  
                     <span> Yogesh Singh </span>
                    </p>
            </div>
        </footer>
  )
}

export default Footer