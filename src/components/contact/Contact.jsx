import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import {FaRegAddressBook,FaRegEnvelope,FaRegUser,FaRegMap} from 'react-icons/fa';
import ShapeOne from "../../assets/shape-1.png";
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [form, setForm] = useState({
        name:'',
        email:'',
        subject:'',
        message:'',
        phone:''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
      });
      const [showNotification, setShowNotification] = useState(false);
      const hideNotification = () => {
        setShowNotification(false);
    };

    useEffect(() => {
        if (showNotification) {
            // Automatically hide the notification after 10 seconds
            const timeoutId = setTimeout(() => {
                hideNotification();
            }, 3000);

            // Clean up the timer when the component unmounts or when showNotification changes
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [showNotification]);

      const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        if (form.name.trim() === '') {
          newErrors.name = 'Name is required';
          valid = false;
        } else {
          newErrors.name = '';
        }
    
        if (!isValidEmail(form.email)) {
          newErrors.email = 'Invalid email format';
          valid = false;
        } else {
          newErrors.email = '';
        }
    
        // Validate Phone Number (assuming it's a 10-digit number)
        if (!isValidPhoneNumber(form.phone)) {
          newErrors.phone = 'Invalid phone number (10 digits required)';
          valid = false;
        } else {
          newErrors.phone = '';
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const isValidEmail = (email) => {
        // Splitting the email into local part and domain part
        const parts = email.split('@');
        if (parts.length !== 2) {
          return false;
        }
    
        const localPart = parts[0];
        const domainPart = parts[1];
    
        // Checking if local part and domain part are not empty
        if (localPart.length === 0 || domainPart.length === 0) {
          return false;
        }
    
        // Checking if domain part contains at least one dot
        if (!domainPart.includes('.')) {
          return false;
        }
    
        return true;
      };  
      
      const isValidPhoneNumber = (phone) => {
        // Remove non-digit characters and check if the resulting string has exactly 10 digits
        const digitsOnly = phone.replace(/\D/g, '');
        return digitsOnly.length === 10;
      };  

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validateForm()) {
        emailjs.sendForm('service_x2slgr4', 'template_0wg0e4i', e.target, 'f4TtFEdZG9E0Vl_ih')
          .then((response) => {
            // Clearing form fields
            setForm({ name: '', email: '', subject: '', message: '', phone: '' });
            // Show the notification after successful submission
            setShowNotification(true);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            // Handle error here
          });
      }
    }; 

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>


            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>


                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Gurgaon, Haryana, India</p>
                    </div>


                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>


                        <h3 className="contact__card-title">Freelance</h3>
                        <p className="contact__card-data">Available Right Now</p>
                    </div>


                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>


                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">fe.devloper@gmail.com</p>
                    </div>


                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>


                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+91 8318561551</p>
                    </div>
                </div>

                <form className="contact__form" action="" onSubmit={handleSubmit}>
                  <div className="contact__form-group grid">
                    <div className="contact__form-div tooltip">
                      <label className="contact__form-tag text-cs">
                        Your Full Name <b>*</b>
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                        className={`contact__form-input ${errors.name ? 'error-border' : ''}`}
                      />
                      {errors.name && (
                        <div className="tooltiptext">{errors.name}</div>
                      )}
                    </div>

                    <div className="contact__form-div tooltip">
                      <label className="contact__form-tag text-cs">
                        Your Email Address <b>*</b>
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                        className={`contact__form-input ${errors.email ? 'error-border' : ''}`}
                      />
                      {errors.email && (
                        <div className="tooltiptext">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="contact__form-div tooltip">
                    <label className="contact__form-tag text-cs">Your Subject</label>
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      value={form.subject}
                      className={`contact__form-input ${errors.subject ? 'error-border' : ''}`}
                    />
                    {errors.subject && (
                      <div className="tooltiptext">{errors.subject}</div>
                    )}
                  </div>
                  <div className="contact__form-div tooltip">
                    <label className="contact__form-tag text-cs">
                      Your Phone Number <b>*</b>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      value={form.phone}
                      className={`contact__form-input ${errors.phone ? 'error-border' : ''}`}
                    />
                    {errors.phone && (
                      <div className="tooltiptext">{errors.phone}</div>
                    )}
                  </div>

                  <div className="contact__form-div contact__form-area tooltip">
                    <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      value={form.message}
                      className={`contact__form-input ${errors.message ? 'error-border' : ''}`}
                    ></textarea>
                    {errors.message && (
                      <div className="tooltiptext">{errors.message}</div>
                    )}
                  </div>

                  <div className="contact__submit">
                    <p>* Accept the terms and conditions</p>
                    <button type="submit" className="btn text-cs">
                      Send Message
                    </button>
                  </div>
                </form>

            </div>

            <div className="section__deco deco__left">
                <img src={ShapeOne} alt="" className='shape'/>
            </div>

            <div className="section__bg-wrapper">
             <span className="bg__title">Contact Me</span>
            </div>

            {/* Notification */}
            <div className={`contact__notification ${showNotification && 'show'}`}>
                We will contact you soon..................
            </div>
    </section>
  )
}

export default Contact
