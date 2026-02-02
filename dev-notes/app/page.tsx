import DeveloperCard from "../components/developCard";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title">
          <span>
            Choose Your <em>Developer</em>
          </span>
        </h1>
        <p>Select a developer to view their portfolio</p>
      </header>

      <section className="cardWrapper">
        <DeveloperCard
          icon="../webDesign.png"
          name="이선용"
          role="WEB · FRONTEND DEVELOPER"
          skills={[
            "React",
            "Next.js",
            "Vue.js",
            "HTML5",
            "CSS",
            "JavaScript",
            "TypeScript",
          ]}
        />

        <DeveloperCard
          icon="../mobile.png"
          name="신중하"
          role="MOBILE · FULL STACK DEVELOPER"
          skills={[
            "Docker",
            "React-Native",
            "Node.js",
            "Flutter",
            "Python",
            "TypeScript",
            "MySQL",
            "MSSQL",
            "Flask",
          ]}
        />
      </section>

      <footer className="footer">CLICK TO SELECT</footer>
    </main>
  );
}
