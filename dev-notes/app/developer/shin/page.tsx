import About from "./component/about/about";
import Blog from "./component/blog/blog";
import Contact from "./component/contact/contact";
import Main from "./component/main/main";
import Projects from "./component/projects/projects";
import Skills from "./component/skills/skills";

export default function Page() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
