let tl = gsap.timeline();

tl.from(".inner h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 0.5,

});

tl.from(".inner p", {
  opacity: 0,
  duration: 0.5,
  y: 30,
  delay: 0.1,
});

tl.from(".trial", {
  opacity: 0,
  duration: 0.5,
  x: 30,
  delay: 0.5,
});



tl.from(".inner img", {
  opacity: 0,
  duration: 0.5,
  x: 30,
  delay: 0.5,
});