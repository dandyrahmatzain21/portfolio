import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-5.jpg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Dandy',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Rahmat Zain',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indonesian',
  },

  {
    id: 5,
    title: 'Jobs : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Jakarta',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '087825049777',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'dandyrahmatzain21@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'dandy.zain',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Indonesia, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '9',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '10',
    title: 'Certificate',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Oct 2023 - Present',
    title: 'Full Stack Developer <span> PT. Bay Pacific Indonesia </span>',
    desc: <p>
      - Frontend and Backend Development: Design, develop, and maintain both the frontend and backend aspects of web applications. Ensure alignment between the application's appearance and functionality.<br /><br />
      - Collaboration with Design Team: Collaborate with the design team to translate visual designs into attractive and functional frontend elements.<br /><br />
      - Database Management: Design and manage the database structure, as well as execute operational database tasks to support the application.<br /><br />
      - Maintenance and Enhancement: Responsible for continuous maintenance, updates, and improvements across the entire technology stack, ensuring application security and performance.<br /><br />
      - API Integration: Integrate the application with external services and APIs, ensuring smooth and efficient communication between application components.<br /><br />
      - Scrum-Based Development: Utilize the Scrum development methodology to manage the project lifecycle, including sprint planning, daily stand-ups, sprint reviews, and retrospective meetings.<br /><br />
      - Quality Code Writing: Write clean, efficient, and maintainable code, actively participating in code review processes to enhance overall code quality.<br /><br />
      - Testing and Debugging: Conduct thorough testing, debugging, and resolution of bugs to ensure high quality and stability of the application.<br /><br />
      - Documentation: Compile comprehensive and adequate technical documentation to facilitate understanding and continuous development.</p>,
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jun 2022 - Dec 2012',
    title: 'Full Stack Developer <span> Citiasia Inc. </span>',
    desc: <p>
      - Frontend and Backend Development: Design, develop, and maintain both the frontend and backend aspects of web applications. Ensure alignment between the application's appearance and functionality.<br /><br />
      - Collaboration with Design Team: Collaborate with the design team to translate visual designs into attractive and functional frontend elements.<br /><br />
      - Database Management: Design and manage the database structure, as well as execute operational database tasks to support the application.<br /><br />
      - Maintenance and Enhancement: Responsible for continuous maintenance, updates, and improvements across the entire technology stack, ensuring application security and performance.<br /><br />
      - API Integration: Integrate the application with external services and APIs, ensuring smooth and efficient communication between application components.<br /><br />
      - Scrum-Based Development: Utilize the Scrum development methodology to manage the project lifecycle, including sprint planning, daily stand-ups, sprint reviews, and retrospective meetings.<br /><br />
      - Quality Code Writing: Write clean, efficient, and maintainable code, actively participating in code review processes to enhance overall code quality.<br /><br />
      - Testing and Debugging: Conduct thorough testing, debugging, and resolution of bugs to ensure high quality and stability of the application.<br /><br />
      - Documentation: Compile comprehensive and adequate technical documentation to facilitate understanding and continuous development.</p>,
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Sep 2018 - Sep 2019',
    title: 'Frontend Developer <span> Advertnative </span>',
    desc: <p>
      - Web Design and Development: Collaborate with the design team to translate visual designs into interactive and engaging web experiences. Write clean, efficient, and well-documented code.<br /><br />
      - User Interface (UI) Development: Create visually appealing and responsive user interfaces that align with project requirements and design specifications. Ensure seamless navigation and user experience.<br /><br />
      - Cross-Browser Compatibility: Optimize web applications for cross-browser compatibility and ensure consistent performance across various platforms and devices.<br /><br />
      - Mobile Responsiveness: Implement responsive design techniques to ensure that web applications are accessible and functional on a wide range of devices, including smartphones and tablets.<br /><br />
      - Code Optimization: Identify and address performance bottlenecks in frontend code. Optimize code for faster loading times and improved user experience.<br /><br />
      - Web Accessibility: Implement best practices for web accessibility, ensuring that web applications are usable by individuals with disabilities and comply with relevant accessibility standards.<br /><br />
      - Testing and Debugging: Conduct thorough testing of web applications, identify and fix bugs, and troubleshoot issues to ensure a high-quality, error-free user experience.
    </p>
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019 - 2023',
    title: 'Technic Informatics <span> Catur Insan Cendikia University </span>',
    desc: 'Grade Point Average : 3.72',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2018',
    title: 'Software Engineering <span> State High School 2 Kuningan </span>',
    desc: 'Grade Point Average : 8.50',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Laravel',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Vue',
    percentage: '90',
  },

  {
    id: 3,
    title: 'React',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Node',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Flutter',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Rest API',
    percentage: '90',
  },

  {
    id: 7,
    title: 'DBMS',
    percentage: '85',
  },

  {
    id: 8,
    title: 'Version Control',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Mbantu',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Based Application',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'PT. Bay Pacific Software',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Laravel, Vue.JS',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Kino',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Based Application',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'UCIC University',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Laravel, JavaScript',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'UMKM Cirebon',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Based Application',
      },
      {
        icon: <FiUser />,
        title: 'Company : ',
        desc: 'UCIC University',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Laravel, JavaScript',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
