const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".inter", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("#header, #banner", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
