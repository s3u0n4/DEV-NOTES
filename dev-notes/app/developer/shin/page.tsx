import Main from "./component/Main/Main";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
