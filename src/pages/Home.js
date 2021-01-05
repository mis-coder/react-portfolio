import Menu from "../components/Menu";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobNav from "../components/MobNav";

function Home() {
  return (
    <>
      <MobNav />
      <Menu />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
