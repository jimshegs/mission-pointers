export const metadata = {
  title: "Mission Pointers",
  description: "Tech & AI support for charities",
};

import Hero from "@/components/hero-home";
import Services from "@/components/services";
import Tools from "@/components/tools";
import About from "@/components/about";
import Why from "@/components/why-mission-pointers";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Tools />
      <About />
      <Why />
      <LargeTestimonial />
      <Cta />
      <Contact />
    </>
  );
}
