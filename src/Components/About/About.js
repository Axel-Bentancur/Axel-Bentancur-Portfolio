import React, { useEffect } from "react";
import SectionName from "../SectionName";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  let t1 = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    t1.staggerFrom(
      ".about-text",
      1,
      { y: 10, opacity: 1, ease: Power3.easeOut, delay: 0.2 },
      "Start"
    );
    gsap.from(".about-text", {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".about-text",
        toggleActions: "restart complete",
      },
    });
  });
  return (
    <div className="section-container" id="about">
      <SectionName
        position="text-left"
        color1="cian"
        color2="gray"
        color3="cian"
        sectionName="ABOUT"
      />
      <p className="about-text">
        I have realized that I love developing web applications. Like everyone,
        in the beginning I was struggling to make simple tasks but my
        perseverance kept me going and helped me to improve constantly. You can
        actually check the applications I created which reflect my journey on
        this path. There is something unique and satisfying whenever I finish
        the proyect I was working on, it feels like Dr. Frankenstein when he
        created the monster and said "He is alive!!".
      </p>
    </div>
  );
}
export default About;
