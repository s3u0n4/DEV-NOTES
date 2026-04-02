import Main from "./component/main/main";
import Projects from "./component/projects/projects";
import Blog from "./component/blog/blog";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Skills from "./component/skills/skills";
import About from "./component/about/about";

export default function Page() {
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
