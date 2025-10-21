"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-12 sm:pt-16 pb-12 mb:pb-4">
      <h2 className="text-center max-w-7xl pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Servies
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContentOne = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-one" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We design and develop{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                high-performance websites and apps
              </span>{" "}
              tailored to your business goals. Our approach blends clean code,
              intuitive UI/UX, and scalable architecture, ensuring seamless
              functionality across devices. From concept to launch, we deliver
              reliable digital solutions that engage users and drive measurable
              growth.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() =>
                  window.location.replace(
                    "/services/website-and-app-development/"
                  )
                }
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Read More
              </Button>

              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Get A Quote
              </Button>
            </div>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentTwo = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-two" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We craft{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                intuitive interfaces and stunning visuals
              </span>{" "}
              that blend creativity with usability. Our UI/UX process
              prioritizes seamless user journeys, while our graphic design
              elevates brand identity with precision. From wireframes to
              polished assets, we deliver cohesive, high-impact designs that
              engage audiences and strengthen your brand presence.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() =>
                  window.location.replace(
                    "/services/digital-marketing-and-seo/"
                  )
                }
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Read More
              </Button>

              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Get A Quote
              </Button>
            </div>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentThree = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-three" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We create{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                stunning visuals and videos
              </span>{" "}
              that capture attention and elevate your brand. Our photography and
              editing services blend creativity, precision, and storytelling to
              produce striking content for social media, advertising, or
              campaigns, ensuring your audience stays engaged and your brand
              leaves a lasting impression.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() =>
                  window.location.replace(
                    "/services/photography-and-video-editing/"
                  )
                }
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Read More
              </Button>

              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Get A Quote
              </Button>
            </div>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentFour = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-four" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We help transform your{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                ideas into functional MVPs and prototypes
              </span>{" "}
              quickly and efficiently. By validating concepts early and
              minimizing risk, we accelerate your time to market. Our team
              focuses on usability, scalability, and innovation to ensure your
              product captures investors’ interest and customers’ attention from
              day one.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() =>
                  window.location.replace("/services/mvps-and-prototypes/")
                }
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Read More
              </Button>

              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Get A Quote
              </Button>
            </div>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentFive = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-five" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We design intuitive{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                intuitive interfaces and stunning visuals
              </span>{" "}
              that deliver seamless, enjoyable experiences. Combining
              research-driven UX strategies with bold, modern visuals, we create
              designs that improve usability and build emotional connections.
              Every detail reflects your brand identity and enhances engagement,
              resulting in products users love and remember.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() =>
                  window.location.replace(
                    "/services/ui-ux-and-graphics-designing/"
                  )
                }
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Read More
              </Button>

              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Get A Quote
              </Button>
            </div>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContentSix = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content-six" + index} className="">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans  mb-8">
              We shape powerful brand identities and manage your public image
              with precision. Our services blend strategy, design, and
              communication to establish trust,{" "}
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                boost awareness, and influence perception.
              </span>{" "}
              From creating compelling narratives to executing effective PR
              campaigns, we position your brand to thrive in competitive markets
              and stay relevant.
            </p>

            <div className="flex gap-6">
              <Button
                onClick={() =>
                  window.location.replace(
                    "/services/branding-and-pr-management/"
                  )
                }
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Read More
              </Button>

              <Button
                onClick={() => window.location.replace("/new-quote")}
                variant="outline"
                className="text-sm md:text-base cursor-pointer md:px-8 md:py-6"
              >
                Get A Quote
              </Button>
            </div>

            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain hidden"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Web + App Power",
    title: "Website & App Development",
    src: "/services/website-development.jpg",
    content: <DummyContentOne />,
  },
  {
    category: "Boost Online Reach",
    title: "Digital Marketing & SEO",
    src: "/services/digital-marketing.jpg",
    content: <DummyContentTwo />,
  },

  {
    category: "Pixel-Perfect Experiences",
    title: "UI/UX & Graphic Designing",
    src: "/services/uiux.jpg",
    content: <DummyContentFive />,
  },
  {
    category: "Ideas Into Actions",
    title: "Building MVPs & Prototypes",
    src: "/services/mvp.jpg",
    content: <DummyContentFour />,
  },
];
