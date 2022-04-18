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
            I have been a practicing studio artist since my graduation from State University of New York in New Paltz with a Master of Fine Arts. I have experience using a wide range of materials and techniques that can be adapted for teaching programs for children and families. My studio practice and mixed media experience as well as my time teaching has informed my presentation strategies, I am able to give a dynamic and engaging demonstration that is entertaining and informative. 
                </p>
                <br />
            <p>    
            As a recent graduate from the UW Extended Campus Coding Boot Camp I have developed a passion for computer science, specifically web development. These new skills are a natural extension of my work as an artist, educator, and problem solver given the field requires ingenuity, practice and out of the box thinking; all things I have honed and developed as an artist and educator and during my time attending the bootcamp. I am eager to learn more about web development including MERN stack with graphql, one of my favorite modules. I like getting my hands on every part of an application including vanilla javascript and css.
            </p>
            </div>
                
        </section>
    );
}

export default About;