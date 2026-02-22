import "../Main/Main.css";
export default function Main() {
  return (
    <section className="main">
      <span className="badge">👋 Welcome to my portfolio</span>

      <h1>Web Frontend Developer</h1>

      <p className="description">
        새로운 기술 앞에서 저는 먼저 “왜?”라는 질문을 던집니다. <br />그 위에서
        근본적인 구조를 설계하고, 기술은 그 구조에 가장 적합한 기술을
        선택합니다.
      </p>

      <div className="actions">
        <a href="#contact" className="btn primary">
          Get in touch
        </a>
        <a href="#projects" className="btn secondary">
          View Project
        </a>
      </div>
    </section>
  );
}
