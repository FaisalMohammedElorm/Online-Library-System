// GSAP ANIMATIONS || Animate on Scroll
gsap.registerPlugin(ScrollTrigger);
    // Story Container Animation
  gsap.from("#our-story .img-container", {
    duration: 0.5,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#our-story",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.1
    }
  });

  gsap.from("#our-story .title", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#our-story",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.1
    }
  });

  gsap.from("#our-story p", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#our-story",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.1
    }
  });

  gsap.from("#our-story button", {
    duration: 0.5,
    scale: 0.5,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#our-story", 
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.1
    }
  });

    // Featured Books Animation
    gsap.from(".featured-books .title-two", {
      duration: 0.5,
      x: -100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".featured-books",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.1
      }
    });

    gsap.from(".featured-books p", {
      duration: 0.5,
      x: 100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".featured-books",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.1
      }
    });

    gsap.from(".featured-books button", {
      duration: 0.5,
      scale: 0.5,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".featured-books",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.1
      }
    });


    // Genre section
    gsap.from(".genre .title-three", {
      duration: 0.5,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".genre",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.1
      }
    });

    gsap.from(".genre .card", {
      duration: 0.5,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".genre",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 0.1
      }
    });