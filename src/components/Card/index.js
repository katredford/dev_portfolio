import React from "react";

export default function Card(props) {
  return (
    <section className="work-container">
      <div>
        <div className="link">
          <a href={`${props.link}`} target="_blank" rel="noopener noreferrer">
            <div
              className="work-style"
              style={{ backgroundImage: `url(${props.img})` }}
              >
              <div className="card-title">{props.title}</div>
            </div>
          </a>
        </div>
        <p className="work-description">{props.description}</p>

        <div className="repo-link">
          <a href={`${props.repo}`} target="_blank" rel="noopener noreferrer">
            github repo
          </a>
        </div>
      </div>
    </section>
  );
}

