import "../Projects/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="shinProjectsSection">
      <h2 className="shinProjectsTitle">Projects</h2>

      <div className="shinProjectGrid">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <article key={i} className="shinProjectCard">
            <div className="shinThumbnail" />

            <h3>Project Title</h3>
            <p>
              프로젝트 설명이 들어갑니다. 사용 기술과 핵심 기능을 요약합니다.
            </p>

            <div className="shinTags">
              <span>React Native</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <div className="shinLinks">
              <a href="#">
                <img src="/sun/git.png" alt="git" />
                Code
              </a>
              <a href="#">
                <img src="/sun/share.png" alt="share" />
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
