import React from "react"

export default function Card(props) {
  return (
    <section className="work-container">
  <div>
    <div className="link">
      <a
        href={`${props.imageLink}`}
        target="_blank"
            rel="noopener noreferrer">
            
            {/* "kitten-around" is where the image comes from  */}
            <div className="work-style">
              <img src={props.coverImage} alt=''></img>
              <div className="card-title">{props.title}</div>
            </div>
            
      </a>
          <p className="work-description">{props.description}</p>

      <div className="repo-link">
        <a
          href={`${props.repo}`}
          target="_blank"
          rel="noopener noreferrer">
          github repo
        </a>
      </div>
    </div>
  </div>
  
</section>

  )
}