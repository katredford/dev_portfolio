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
             <p className="bottom-work-description"> Click and see what kitty says!</p>
          
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
             <p className="bottom-work-description"> An app where you can keep track of plants health and care schedule</p>
          
            <div className="repo-link">
            <a href="https://github.com/JSheleg/garden-thyme" target="_blank">github repo</a>
            </div>
                </div>
                </div>
        </section>
    );
}

export default Work;