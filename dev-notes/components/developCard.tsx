type Props = {
  icon: string;
  name: string;
  role: string;
  skills: string[];
};

export default function DeveloperCard({ icon, name, role, skills }: Props) {
  return (
    <article className="card">
      <div className="icon">
        <img src={icon} alt={name} />
      </div>

      <h2>{name}</h2>

      <h3>{role}</h3>

      <p className="core">CORE SKILLS</p>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}
