import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import CurrentlyLearning from "@/components/home/CurrentlyLearning";
import GithubStats from "@/components/home/GithubStats";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <About />

      <Education />

      <Experience />

      <Skills />

      <Projects />

      <CurrentlyLearning />



      <GithubStats />

      <Contact />


      <Footer />
    </Layout>
  );
}