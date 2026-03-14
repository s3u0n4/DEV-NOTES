import "../Skills/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="shinSkillsSection">
      <h2 className="shinSectionTitle">Skills & Technologies</h2>

      <div className="shinSkillGrid">
        <div className="shinSkillCard">
          <h3>Frontend</h3>
          <span>Flutter</span>
          <span>React Native</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
        </div>

        <div className="shinSkillCard">
          <h3>Backend</h3>
          <span>Node.js</span>
          <span>Python</span>
          <span>Flask</span>
          <span>MySQL</span>
          <span>MSSQL</span>
        </div>

        <div className="shinSkillCard">
          <h3>DevOps & Tools</h3>
          <span>Git</span>
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
}
