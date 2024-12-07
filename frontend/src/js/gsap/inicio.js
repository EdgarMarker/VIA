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
    opacity: 0,
    scale: 0.06,
    duration: 1,
    ease: "elastic.out(1,0.5)",
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

  //Hero image move
  const img1 = document.querySelector('.wrapper__shape__hero');
  const img2 = document.querySelector('.secondary__img');
  const heroTriggerOption = {
    trigger: '#section__hero',
    start: 'top 20%',
    end: '70% 20%',
    scrub: true,
    markers: true,
  }

  gsap.from(img1, {
    x: '-50px',
    scrollTrigger: {
      ...heroTriggerOption,
    }
  })

  gsap.from(img2, {
    x: '50px',
    scrollTrigger: {
      ...heroTriggerOption,
    }
  })

  
  
}
