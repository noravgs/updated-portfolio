import Intro from "./pages/intro";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
// import Gallery from "./pages/gallery";
import '../styles/globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro /> 
      <Projects />
      <Skills />
     
      {/* <Gallery /> */}
    </main>
  );
}
