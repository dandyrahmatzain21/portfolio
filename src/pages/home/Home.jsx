import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className="home__img" />
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Dandy R Zain.</span> Web Designer</h1>
                    <p className="home__description">As a dedicated Web Developer, I possess strong experience in designing and developing responsive and functional websites. My skills encompass front-end and back-end programming, along with implementing best practices in web development. I am proficient in using various technologies such as HTML, CSS, JavaScript, and frameworks like Vue.Js, React.Js and Laravel.</p>
                    <p className="home__description">Furthermore, I have the ability to collaborate within development teams, communicate effectively, and understand user needs to create an outstanding user experience. I am also accustomed to testing and debugging to ensure high-quality products.</p>
                    <p className="home__description">I am always eager to continue learning and stay updated on the latest advancements in web technology. I believe that the combination of creativity and technical expertise can result in innovative solutions. With my robust background in web development, I am ready to contribute to exciting projects and make a positive impact through my web development skills.</p>
                    <Link to='about' className='button'>More About Me <span className='button__icon'><FaArrowRight /></span></Link>
                </div>
            </div>
            <div className='color__block'></div>
        </section>
    )
}

export default Home