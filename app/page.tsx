import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
