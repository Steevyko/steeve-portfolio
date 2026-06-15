import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./project";
import { Contacts } from "./contact";
export default function Home() {
  return (
    <>
   
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </>
  );
}