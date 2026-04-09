import Main from "./component/Main/Main";
import Projects from "./component/Projects/Projects";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Skills from "./component/Skills/Skills";
import About from "./component/About/About";

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
