import "../Header/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <h1 className="logo">&lt;/&gt;Developer Portfolio</h1>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
