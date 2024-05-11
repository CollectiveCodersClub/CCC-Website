import React from "react";

import Navbar from "@/components/pages/navbar";
import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";
import Graphic from "@/components/pages/graphic";
import Projects from "@/components/pages/projects";
import Connect from "@/components/pages/connect";
import Footer from "@/components/pages/footer";

export default function Home() {
  return (
    <main className="relative w-screen">
      <Navbar />
      <section className="relative top-20">
      <Hero />
        <div className="bg-gradient-to-b from-black via-gray to-lightGray">
          <About />
          <Graphic />
          <Projects />
          <Connect />
          <Footer />
        </div>
      </section>
    </main>
  );
}
