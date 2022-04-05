import React from "react";

function Nav(props) {

   

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="clown"> 🚫🤡</span> no joke
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <span
							onClick={(e) => {
								props.setCurrentPage("about");
							}}
						>
							About me
						</span>
                    </li>
                    <li>
                        <span
							onClick={() => {
								props.setCurrentPage("work");
							}}
						>
							Work
						</span>
                    </li>
                    <li>
                        	<span
							onClick={() => {
								props.setCurrentPage("contact");
							}}
						>
							Contact
						</span>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1posGyekVmRyHkwEmDo2j5aLTIo_UnpQXfZeu9hLy59I/edit?usp=sharing" target="_blank">Resume</a>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;