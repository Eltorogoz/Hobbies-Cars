import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";
import HobbyCards from "./components/HobbyCards";
import Footer from "./components/Footer";
import "./index.css";

const carouselItems = [
  {
    image: "/images/bmw-engine.jpg",
    title: "BMW Engines",
    description:
      "Learning how BMW inline six and V8 engines are designed, from the classic M3 motors to modern turbo units.",
  },
  {
    image: "/images/bmw-m3.jpg",
    title: "BMW M3",
    description:
      "Studying the evolution of the M3 across generations, how they handle, and how people modify them.",
  },
  {
    image: "/images/porsche-gt3rs.jpg",
    title: "Porsche 911 GT3 RS",
    description:
      "Breaking down aerodynamics, weight reduction, and track setups on the GT3 RS.",
  },
  {
    image: "/images/jdm-rx7.jpg",
    title: "Mazda RX-7",
    description:
      "Rotary engines, lightweight chassis, and why the RX-7 is a JDM icon.",
  },
  {
    image: "/images/r34-monalisa.jpg",
    title: 'Skyline R34 "Mona Lisa"',
    description:
      "The R34 from Tokyo Drift and how it represents tuning culture and JDM styling.",
  },
];

const accordionItems = [
  {
    title: "How I got into cars",
    content:
      "It started with watching car videos and movie cars like the R34 in Tokyo Drift. That turned into a deeper interest in engines, handling, and tuning.",
  },
  {
    title: "What I am learning right now",
    content:
      "BMW engine families, rotary reliability and tuning, and how aero and suspension setups change track performance.",
  },
  {
    title: "Dream builds",
    content:
      "A sorted BMW M3, a track-focused GT3 RS, and a JDM trio of RX-7, Mitsubishi 3000 GT, and an R34 skyline built the way I like it.",
  },
];

const hobbies = [
  {
    title: "BMW Engines and M3",
    description:
      "Reading about different engine codes, common issues, and how people extract more power from each M3 generation.",
    icon: "🚗",
    link: {
      label: "BMW M site",
      href: "https://www.bmw-m.com",
    },
  },
  {
    title: "Porsche 911 GT3 RS",
    description:
      "Watching onboard laps, setup videos, and breakdowns of what makes this car work so well on track.",
    icon: "🏁",
  },
  {
    title: "JDM Legends",
    description:
      "Mitsubishi 3000 GT, Mazda RX-7, and the Tokyo Drift R34. Looking at specs, history, and different tuning paths.",
    icon: "🔥",
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        title="Kris’s Hobby Garage"
        subtitle="BMW engines, M3s, GT3 RS dreams, and JDM legends."
      />

      <main className="flex-1 py-10 space-y-12">
        <HobbyCards hobbies={hobbies} />

        <section className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cars I am learning about
            </h2>
            <Carousel items={carouselItems} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              More about this hobby
            </h2>
            <Accordion items={accordionItems} />
          </div>
        </section>
      </main>

      <Footer
        year={2025}
        brand="Kris"
        tagline="Single page app built with React and Tailwind CSS."
        links={[
          {
            label: "YouTube car channels",
            href: "https://www.youtube.com",
            newTab: true,
          },
          {
            label: "Email me",
            href: "mailto:you@example.com",
            newTab: false,
          },
        ]}
      />
    </div>
  );
}

export default App;
