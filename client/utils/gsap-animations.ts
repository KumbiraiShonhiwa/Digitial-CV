import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (
  selector: string,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number | { amount: number; from: string };
  } = {},
) => {
  const { duration = 0.6, delay = 0, stagger = 0 } = options;

  gsap.utils.toArray<Element>(selector).forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
};

export const heroTextReveal = (selector: string) => {
  gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    },
  );
};

export const staggeredFadeIn = (
  selector: string,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number;
  } = {},
) => {
  const { duration = 0.5, delay = 0, stagger = 0.1 } = options;

  gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power2.out",
    },
  );
};

export const scaleOnScroll = (selector: string) => {
  gsap.utils.toArray<Element>(selector).forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
};

export const slideInFromLeft = (selector: string) => {
  gsap.utils.toArray<Element>(selector).forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
};

export const slideInFromRight = (selector: string) => {
  gsap.utils.toArray<Element>(selector).forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
};

export const parallaxScroll = (selector: string, distance: number = -100) => {
  gsap.to(selector, {
    y: distance,
    scrollTrigger: {
      trigger: selector,
      scrub: 1,
      markers: false,
    },
  });
};

export const countUp = (
  selector: string,
  end: number,
  duration: number = 2,
) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: end,
    duration,
    onUpdate: function () {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = Math.ceil(obj.value).toString();
      }
    },
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};

export const cleanup = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
