import React from "react";
import { Dock, Home, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos, Archive } from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Archive />

      <Home />
    </main>
  );
};

export default App;
