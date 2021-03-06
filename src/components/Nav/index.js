import React from "react";
import "../../assets/index.css";
import "../../assets/responsive.css";

function Nav(props) {
  return (
    <header>
      <h1 className="title">
        <a href="https://katredford.github.io/dev_portfolio">
          Katie Redford Portfolio
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <span
              onClick={e => {
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
            <span>
              <a
                href="https://docs.google.com/document/d/1posGyekVmRyHkwEmDo2j5aLTIo_UnpQXfZeu9hLy59I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
