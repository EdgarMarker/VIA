// Btn ScrollTo:
const heroBtn = document.querySelector("#section__hero .btn");
heroBtn.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#section__intro",
    ease: "power4.out",
  });
});

const toBtn = document.querySelector("#toOurMethod");
toBtn.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#home_ourMethod",
    ease: "power4.out",
  });
});

gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {
  // Hero animación:
  var tl = gsap.timeline();

  tl.from("h1", {
    opacity: 0,
    x: -50,
    duration: 0.5,
    delay: 1,
    ease: "power1.out",
  })
    .from(
      "h2",
      {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2"
    )
    .from(
      "p",
      {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2"
    )
    .from(
      "#section__hero .btn",
      {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2"
    )
    .from(
      "#section__hero picture",
      {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power1.out",
      },
      "-=0.8"
    );

  const container = document.querySelector("#section__intro");
  const triggerOptions = {
    trigger: container,
    start: "top center",
    end: "center center",
    scrub: true,
  };
  gsap.from(".dot", {
    scale: 0.06,
    duration: 1,
    ease: "power4.out",
    stagger: 0.4,
    scrollTrigger: {
      ...triggerOptions,
    },
  });
  gsap.from(".line", {
    width: "0px",
    duration: 1,
    ease: "power4.out",
    stagger: 0.4,
    scrollTrigger: {
      ...triggerOptions,
    },
  });
  gsap.from(".h3", {
    opacity: 0,
    y: "50px",
    ease: "power4.out",
    stagger: 0.4,
    scrollTrigger: {
      ...triggerOptions,
    },
  });
}
