import React from 'react';
import coverImage from "../../assets/radial rainbow.jpg";

function About() {
    return (
        <section>
            <h1 id="about"> About Me</h1>
            <img src ={coverImage} style={{ width: "50%" }}alt="cover"/>
        </section>
    );
}

export default About;