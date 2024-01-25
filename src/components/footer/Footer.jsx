import React from 'react';
import {FaWhatsapp,FaLinkedin,FaGithub,FaInstagram,FaTwitter} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
        <footer className="footer">
            <div className="footer__container container grid">
               <div className="footer__socials">
                    <a href="https://wa.link/br0lsr" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/yogesh1dev"  target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/yogeshmlv" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/its__novo/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/Yogesh__Dev" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <FaTwitter />
                    </a>
                </div>

                    <p className="footer__copyright text-cs">
                     &copy; 2024 <span>Yogesh Singh</span>. All Rights Reserved
                    </p>

                    <p className="footer__copyright text-cs"> Developed by  
                     <span> Yogesh Singh </span>
                    </p>
            </div>
        </footer>
  )
}

export default Footer