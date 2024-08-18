function screenLoader() {
    let tl = gsap.timeline()
    tl.from("#loader h3", {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    tl.to("#loader h3", {
        opacity: 0,
        x: -60,
        stagger: 0.1,
        duration: 1
    })
    tl.to("#loader", {
        opacity: 0
    })
    tl.from(".page1-content h1 span", {
        y: 400,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        delay: -0.5
    })
    tl.to("#loader", {
        display: "none"
    })
}
screenLoader()

function cursorEffect() {
    let page1Content = document.querySelector(".page1-content")
    let cursor = document.querySelector(".cursor")

    page1Content.addEventListener("mousemove", function (para) {
        gsap.to(cursor, {
            x: para.x,
            y: para.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("open");
})
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("navbar").classList.remove("open");
})

document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown(count) {
        document.getElementById("countdown").textContent = count + " seats";
    }

    function startCountdown() {
        let count = 8;
        const countdownInterval = setInterval(function () {
            if (count >= 4) {
                updateCountdown(count);
                count--;
            } else {
                clearInterval(countdownInterval);
            }
        }, 300);
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCountdown();
                }
            });
        },
        { threshold: 0 }
    );

    const page5Element = document.getElementById("page5");
    if (page5Element) {
        observer.observe(page5Element);
    }
});


function page2Animation() {
    gsap.from(".line", {
        y: 100,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 95%",
            end: "top 50%",
            // markers:true,
            scrub: 4
        }
    })
    gsap.from(".heading h1", {
        y: 200,
        duration: 2,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 70%",
            end: "top 49%",
            // markers:true,
            scrub: 4
        }
    })

}
page2Animation()

function page4Animation() {
    gsap.from(".page4-para h1", {
        y: 300,
        duration: 2,
        delay: 0.3,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 90%",
            end: "top 50%",
            // markers:true,
            scrub: 4
        }
    })
    gsap.from(".page4-para h4", {
        y: 100,
        duration: 3,
        delay: 0.3,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 90%",
            end: "top 50%",
            // markers:true,
            scrub: 4
        }
    })
}
page4Animation()

function page5Animation() {
    gsap.from(".page5-part1-content h1", {
        y: 200,
        duration: 2,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page5-part1",
            scroller: "body",
            start: "top 95%",
            end: "end 40%",
            scrub: 4
        }

    })
    gsap.from(".page5-part1-content h4", {
        y: 110,
        duration: 2,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page5-part1",
            scroller: "body",
            start: "top 95%",
            end: "end 40%",
            scrub: 4
        }

    })
}
page5Animation()

function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        autoplay: {
            delay: 850,
            disableOnInteraction: false,
        },
    });
}
sliderAnimation()

function page7Animation() {
    gsap.from("#page7 h1", {
        y: 200,
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "body",
            start: "top 90%",
            end: "end 40%",
            scrub: 4
        }
    })
}
page7Animation()

gsap.from(".page8-content", {
    y: -300,
    duration: 2,
    delay: 0.5,
    opacity: 0,
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
