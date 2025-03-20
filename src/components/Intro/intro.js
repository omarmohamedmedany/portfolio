import React from 'react';
import './intro.css';
import bg from '../../assets/image2.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Omar</span> <br />Frontend Developer</span>
                    <p className="introPara"> a passionate frontend developer currently studying at Capital Language School. <br />I have a strong foundation in HTML, CSS, JavaScript, React, and Python,<br/>and I'm constantly learning and improving my skills</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;