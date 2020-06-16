/* NAVBAR */
gsap.from(".navbar div", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: "expo.inOut",
    stagger: 1
});
/* MEDIA */
gsap.from(".media ul li", {
    duration: 1.5,
    delay: 1.5,
    stagger: 0.08,
    opacity: 0,
    x: "-20",
    ease: "expo.inOut",
});
/* TEXT */
gsap.from(".text h1 .hide--text", {
    duration: 1.5,
    delay: 1,
    y: "100%",
    ease: "expo.inOut",
});
gsap.from(".text h3 .hide--text", {
    duration: 1.5,
    delay: 1.2,
    y: "100%",
    ease: "expo.inOut",
});
gsap.from(".text p .hide--text", {
    duration: 1.5,
    delay: 1.3,
    y: "200%",
    ease: "expo.inOut",
});
gsap.from(".text h2", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    x: "-10000",
    ease: "expo.inOut",
});
/* SPONSOR */
gsap.from(".sponsor img", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: "expo.inOut",
});
gsap.from(".sponsor p", {
    duration: 1.5,
    delay: 1.6,
    opacity: 0,
    y: "20",
    ease: "expo.inOut",
});
/* DISTORTION */
gsap.from(".distortion", {
    duration: 1.5,
    delay: 2,
    opacity: 0,
    y: "20",
    ease: "expo.inOut",
});

/* OVERLAY */
gsap.to(".first", {
    duration: 1.5,
    delay: 0.5,
    top: "-100%",
    ease: "expo.inOut",
});
gsap.to(".second", {
    duration: 1.5,
    delay: 0.6,
    top: "-100%",
    ease: "expo.inOut",
});

gsap.to(".third", {
    duration: 1.5,
    delay: 0.7,
    top: "-100%",
    ease: "expo.inOut",
});