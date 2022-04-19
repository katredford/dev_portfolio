import React from "react";
import '../../assets/index.css';

function Work() {
    return (
        <section className="work-container">
              <div >

            <div className="link">
            <a href ="https://likica.github.io/kitty_translator/" target="_blank">
            <div className="kitten-around work-style">
                
                <div className="card-title">Just Kitten Around</div>
               
            </div>
             </a>
             <p className="work-description"> Click and see what kitty says!</p>
          
            <div className="repo-link">
            <a href="https://github.com/Likica/kitty_translator" target="_blank">github repo</a>
            </div>
                </div>
            </div>
            
    <div >
        <div className="link">
            <a href ="https://github.com/JSheleg/garden-thyme" target="_blank">
            <div className="garden-thyme work-style">
                
                <div className="card-title">Garden Thyme</div>
               
            </div>
             </a>
             <p className="work-description"> An app where you can keep track of plants health and care schedule</p>
          
            <div className="repo-link">
            <a href="https://github.com/JSheleg/garden-thyme" target="_blank">github repo</a>
            </div>
        </div>
            </div>
            
              <div >
        <div className="link">
            <a href ="https://gentle-wildwood-31451.herokuapp.com/" target="_blank">
            <div className="roast-me work-style">
                
                <div className="card-title">Roast Me</div>
               
            </div>
             </a>
             <p className="work-description"> Social media application for people who love coffee. Share your morning cup 'o joe and get 'roasted' with an insult as well.</p>
          
            <div className="repo-link">
            <a href="https://github.com/EACrook/Roast-Me" target="_blank">github repo</a>
            </div>
        </div>
            </div>
              <div >
        <div className="link">
            <a href ="https://bbcm-programs.herokuapp.com/" target="_blank">
            <div className="bbcm work-style">
                
                <div className="card-title">BBCM activities</div>
               
            </div>
             </a>
             <p className="work-description">  An app that will allow Museum employees to enter their activity planned for the day, and then print it for their convenience</p>
          
            <div className="repo-link">
            <a href="https://github.com/katredford/BBCM.programsDB" target="_blank">github repo</a>
            </div>
        </div>
    </div>
        </section>
    );
}

export default Work;