import Main from "./component/Main/Main";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Blog from "./component/blog/Blog";
import Contact from "./component/Contact/Contact";

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
