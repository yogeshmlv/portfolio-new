import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/Poject3.png';
import Project4 from './assets/Project4.png';
import Project5 from './assets/Project5.jpg';
import Project6 from './assets/Project6.jpg';

import Testimonial1 from './assets/Testimonial.jpg';
import Testimonial2 from './assets/Testimonial.jpg';
import Testimonial3 from './assets/Testimonial.jpg';
import Testimonial4 from './assets/Testimonial.jpg';
import Testimonial5 from './assets/Testimonial.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web App Development',
    description:
      'I excel at creating visually captivating and responsive interfaces while ensuring optimal user experiences. With a focus on code quality and performance optimization, I deliver scalable and maintainable web applications.',
  },
  {
    id: 2,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Mastering the art of web design and logo development, I sculpt captivating online experiences. Whether its for your business or personal brand,Lets collaborate and elevate your online presence to new heights!',
  },
  {
    id: 3,
    name: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 4,
    name: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 5,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
];

export const skills = [
  
  {
    id: 1,
    name: 'JavaScript',
    percentage: 95,
    description:
      'Proficient in JavaScript for front-end development, with expertise in building responsive web applications using libraries like React, emphasizing JavaScript as the primary language',
  },

  {
    id: 2,
    name: 'HTML / CSS',
    percentage: 95,
    description:
      'Proficient in HTML, CSS, and Bootstrap to craft responsive, visually captivating, and user-centric web interfaces with an emphasis on compelling and intuitive design.',
  },

  {
    id: 3,
    name: 'React',
    percentage: 90,
    description:
      'Skilled in React for creating dynamic, interactive, and visually engaging web applications, elevating user experiences through captivating front-end development.',
  },

  {
    id: 4,
    name: 'PHP',
    percentage: 70,
    description:
      'Proficient in Laravel for foundational web application development, with expertise in front-end technologies like jQuery for interactive user interfaces',
  },

  {
    id: 5,
    name: 'Jquery',
    percentage: 70,
    description:
      'Skilled in jQuery, jQuery UI, and date picker libraries for creating highly interactive and user-friendly web interfaces with advanced date selection capabilities.',
  },

  {
    id: 6,
    name: 'SQL',
    percentage: 50,
    description:
      'Familiar with basic SQL for essential database management, data retrieval, and elementary query writing.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    linkUrl:'https://deskohome.com/',
    category: 'Branding',
    title: 'DeskoHome',
    description:
      'On this website, I have crafted seamless responsiveness and captivating frontend functionalities.',
  },
  {
    id: 2,
    img: Project2,
    category: 'UI UX Design',
    linkUrl: 'https://scholarshipkart.com/',
    // title: 'Scholarshipkart',
    title: 'Scholarshipkart',
    description:
      'I developed the websites UI, functionalities, and ensured responsiveness using Bootstrap, jQuery, and HTML.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    linkUrl:'https://woodmart.xtemos.com/demo-retail/demo/retail/',
    // title: 'WoodMart',
    title: 'WoodMart',
    description:
      'On this website, I leveraged React and built a custom Bootstrap design from scratch, enhancing it with Redux for a captivating user experience.',
  },
  // {
  //   id: 4,
  //   img: Project4,
  //   category: 'Development',
  //   linkUrl:'https://book.dccpets.in/',
  //   title: 'BookingPortal',
  //   description:
  //     'We used jQuery, core JavaScript, PHP for backend, and added Pickadate for enhanced functionality on the website.',
  // },
  {
    id: 5,
    img: Project5,
    category: 'Development',
    linkUrl:'https://aude-sapere-yttmlv-gmailcom.vercel.app/',
    title: 'AudeSapere',
    description:
      'I built this website from scratch using React and Bootstrap, integrated Firebase for data handling, and employed EMAILJS for email functionality.',
  },
  // {
  //   id: 6,
  //   img: Project6,
  //   category: 'Branding',
  //   linkUrl:'https://vet360-monarch.aaldaehr.com/',
  //   title: 'AdminPanel',
  //   description:
  //     'This website was crafted with Laravel, incorporating jQuery, HTML, CSS, and Bootstrap for a seamless experience.',
  // },
];

export const cv = [
  {
    id: 1,
    title: 'Rajasthan Technical University, Kota',
    subtitle: 'B.Tech',
    date: '2015 - 2019',
    description:
      'In 2019, I proudly graduated with honors, earning my B.Tech degree in the specialized field of Textile Engineering, a testament to my dedication and commitment to excellence.',
    category: 'education',
  },

  {
    id: 2,
    title: 'UP Board',
    subtitle: 'Intermediate',
    date: '2013 - 2015',
    description:
      'In 2015, I achieved the second rank in my school while pursuing the Science stream (PCM), and I graduated with an impressive 88% score.',
    category: 'education',
  },

  {
    id: 3,
    title: 'UP Board',
    subtitle: 'High School',
    date: '2011 - 2013',
    description:
      'In 2013, I completed my education in the Science stream with an impressive 80% score.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Software Engineer',
    subtitle: 'Aalda Pte Ltd',
    date: '2023 - PRESENT',
    description:
      'I am currently immersed in the development of a pet care booking and customer visit platform. Harnessing my skills in HTML, CSS, Bootstrap, JQUERY, JQUERY UI, and LARAVEL I am spearheading the creation of a streamlined and intuitive system that enables pet owners to conveniently schedule and manage appointments for their beloved companions.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Full Stack Web Devloper (Intern)',
    subtitle: 'Newton School',
    date: '2022 - 2022',
    description:
      'Full Stack Web Development Along with problem-solving.Technical Stack Learnt: React, JavaScript, Node JS, HTML, CSS, Bootstrap, and Data Structure with Java.Participated in various coding contests organized by the platform',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Operation Engineer',
    subtitle: 'Vardhman Textile Limited',
    date: '2019 - 2022',
    description:
      'Managed yarn manufacturing operations, optimizing quality and efficiency while meeting customer demands. Led cross-functional teams to achieve consistent production.',
    category: 'experience',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Dr. Anoop',
    author: 'CEO Company (Aude Sapere',
    description:
      'Absolutely outstanding service! The website not only met but exceeded all my expectations. Its user-friendly, visually stunning, and incredibly responsive. A game-changer for my business!',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Sunny Shah',
    author: 'CEO & Founder (Desko Home)',
    description:
      'Did great job, would love to rehire again with my next project! great in communicating, and always available for a consult and for project! i wish to have! Thank you!',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Durga Kumar',
    author: 'CEO & Founder (AiDigitek)',
    description:
      'He communicate very well.Understood what needed to be done.Estimated very well and committed to his estimation.Deliver in time.Fast and have the solution.Profissional.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Harikesh Singh',
    author: 'Freelancer (Scholarshipkart)',
    description:
      'Yogesh was great! Very knowledgeable and has great communication. Will hire him again in the future..',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Abhisek Yadav',
    author: 'Consultant',
    description:
      'Yogesh exceeded expectations! Exceptionally skilled and incredibly responsive. Looking forward to collaborating with him again.',
  },
];
