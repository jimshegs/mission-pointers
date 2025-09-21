export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Services from "@/components/services";
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
      <About />
      <Why />
      <LargeTestimonial />
      <Cta />
      <Contact />
    </>
  );
}
