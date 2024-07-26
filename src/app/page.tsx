import Intro from "./pages/Intro";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
// import Gallery from "./pages/Gallery";
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
