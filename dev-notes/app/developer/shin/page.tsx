import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Main from "./component/Main/Main";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";

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
