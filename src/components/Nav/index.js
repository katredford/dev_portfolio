import React from 'react';

function Nav() {
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
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Work</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;