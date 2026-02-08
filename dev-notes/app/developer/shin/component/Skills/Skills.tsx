import "../Skills/Skills.css";
export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="sectionTitle">Skills & Technologies</h2>

      <div className="skillGrid">
        <div className="skillCard">
          <h3>Frontend</h3>
          <span>Flutter</span>
          <span>React Native</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </div>

        <div className="skillCard">
          <h3>Backend</h3>
          <span>Node.js</span>
          <span>Python</span>
          <span>Flask</span>
          <span>MySQL</span>
          <span>MSSQL</span>
        </div>

        <div className="skillCard">
          <h3>DevOps & Tools</h3>
          <span>Git</span>
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
}
