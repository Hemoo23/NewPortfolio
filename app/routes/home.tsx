import type { Route } from "./+types/home";
import { Navbar } from "~/Components/Navbar";
import { Hero } from "~/Components/Hero";
import { About } from "~/Components/About";
import { Skills } from "~/Components/Skills";
import { Projects } from "~/Components/Projects";
import { Resume } from "~/Components/Resume";
import { Contact } from "~/Components/Contact";
import { Loader } from "~/Components/Loader";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "My Portfolio" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  return (
    <Loader>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </Loader>
  );
}

