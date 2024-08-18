document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("open");
})
document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("navbar").classList.remove("open");
})

ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.mini-cont h1', { delay: 100, origin: 'top', intervel: 50 });


gsap.from(".page8-content", {
  y: -300,
  duration: 2,
  delay: 0.5,
  opacity: -2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "body",
    start: "top 90%",
    end: "top 40%",
    // markers:true,
    scrub: 4
  }
})

function footer() {
  gsap.from("#footer h1 span", {
    y: -200,
    duration: 2,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "body",
      start: "top 90%",
      end: "top 50%",
      scrub: 4
    }
  })
}
footer()

