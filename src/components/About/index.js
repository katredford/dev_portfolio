import React from 'react';
import portrait from "../../assets/images/katie.JPG";
import "../../assets/index.css"
import "../../assets/responsive.css"



function About() {
    return (
        <section className="about-me">
           { <img src={portrait}  alt="cover" /> }
             <div className="bio-text">
            <p>
            Software Developer with a background in Fine Art and Education. Excellent communication skills with an emphasis on collaboration when developing and maintaining user friendly applications. An innovative problem solver with a passion for software engineering, has been recognized for delightful humor and focus when working independently or on a team. 
                </p>
                <br />
           
            </div>
                
        </section>
    );
}

export default About;