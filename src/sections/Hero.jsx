import React from "react";
import { words } from "../constants/Constants";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        {/* bg img */}
        <img loading="lazy" src="/images/bg.png" alt="bg img" />
      </div>

      {/* main layout */}
      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          {/* inner content */}
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map(({ text, src }, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={src}
                          alt={`${text} img`}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl z-10 relative pointer-events-none">
              {/* <img
                alt="wave emoji"
                loading="lazy"
                width="50"
                height="50"
                src="https://musamueed.vercel.app/wave.svg"
              /> */}
              Hi 👋🏻, I'm Muhammad Musa Mueed, Full Stack Developer with passion
              to learn, create, and deploy
            </p>

            {/* Explore Button */}
            <Button href="#home" className={'md:w-80 md:h-16 w-60 h-12'} id="button" >See my Work</Button>
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
      </div>
    </section>
  );
};

export default Hero;
