import React from 'react';

function Nav() {

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role='img' aria-label="clown"> 🚫🤡</span> no joke
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#work" onClick={() => handleClick()}>
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handleClick()}>
                            Contact
                        </a>
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