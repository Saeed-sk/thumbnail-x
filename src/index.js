let navbarAnimate = gsap.timeline();
navbarAnimate.from("#navbar", {translateY: -100, opacity: 0, delay: 1})

let fistSlideAnimate = gsap.timeline();
fistSlideAnimate.from(".center-image-x-parent", {scale: 2, duration: 2})
    .from(".bottomIconHeaderAnimate", {
        scale: 2,
        top: 500,
        duration: 2
    }, "<0.4")
    .from(".bottomIconTextAnimate", {opacity: 0})
    .to($(".bottomTextIcon h1.position-absolute"), {
        backgroundPositionX: "120%",
        duration: 6
    }, "=");

fistSlideAnimate.from($(".left-side-slides .first-slide-body .text-box h3"), {
    translateX: -100, opacity: 0, ease: "circ"
}, "-=4")
    .from($(".left-side-slides .swiper-slide .text-box p"), {
        translateX: -100,
        opacity: 0,
        ease: "circ"
    }, "<0.3")
    .from($(".left-side-slides .first-slide-button"), {translateX: -50, opacity: 0}, ">-0.1")

fistSlideAnimate.from($(".right-side-slides .first-slide-body .text-box h3"), {
    translateX: 100, opacity: 0, ease: "circ"
}, "-=4")
    .from($(".right-side-slides .swiper-slide .text-box p"), {
        translateX: 100,
        opacity: 0,
        ease: "circ"
    }, "<0.3")
    .from($(".right-side-slides .first-slide-button"), {translateX: 50, opacity: 0}, ">-0.1")

// left side animate on click first slide btn

let sliderLeftAnimate = gsap.timeline({paused: true, defaults: {ease: "sine.out"}});
sliderLeftAnimate.to(".greenXImage", {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
    .to(".purpleXImage", {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}, "=")
    .to($(".right-side-slides"), {opacity: 0, duration: 0.2}, "=")
    .to(".radialGradientDark", {opacity: 0}, "=")
    .to($(".thumbnail-background-image .left-side-effect"), {width: "100%"}, "=")
    .to($(".thumbnail-background-image .right-side-effect"), {width: "0"}, "=")
    .to(".center-image-x-parent", {translateX: "10%"}, "=")
    .to($(".thumbnail-background-image img"), {translateX: "30%", scale: 2.5}, "=")
    .to(".bottomTextIcon", {opacity: 0}, "=")
    .to($(".left-side-slides .first-slide-body .text-box"), {
        width: "100%",
        left: "-20%",
        translateY: "-10%"
    }, "=")
    .to($(".left-side-slides .first-slide-body  .first-text>h3"), {width: "80%", fontSize: 32, duration: 0.1}, "=")
    .to($(".left-side-slides .first-slide-body  .text-box p>strong"), {fontSize: 16}, "=")
    .to($(".left-side-slides  .first-text>p"), {width: "80%", duration: 0.1}, "=")
    .to($(".left-side-slides  .second-text>p"), {width: "70%"}, "=")
    .to($(".left-side-slides .first-slide-button"), {width: "30px", marginTop: 30,}, "=")
    .to($(".left-side-slides .opacity-0"), {opacity: 1}, "=")
let leftSideLogic = false;
$(".left-side-slides .first-slide-button").on("click", () => {
    if (leftSideLogic === false) {
        sliderLeftAnimate.play()
        leftSideLogic = true;
        $(".left-side-slides .first-slide-button").text("").html("<img style='; rotate: 180deg' src='../images/arrow.svg' alt='arrow' />")
    } else {
        sliderLeftAnimate.reverse();
        leftSideLogic = false;
        setTimeout(() => {
            $(".left-side-slides .first-slide-button").text("Read More...")
        }, 500)
    }
})


// right side animate on click first slide btn

let sliderRightAnimate = gsap.timeline({paused: true});
sliderRightAnimate
    .to(".purpleXImage", {clipPath: "polygon(0.01% 0, 100% 0%, 100% 100%, 0.01% 100%)"})
    .to(".greenXImage", {clipPath: "polygon(0 0, 0.01% 0, 0.01% 100%, 0 100%)"}, "=")
    .to($(".left-side-slides .first-slide-body"), {
    opacity: 0,
    duration: 0.2
}, "=")
    .to(".radialGradientDark", {opacity: 0}, "=")
    .to($(".thumbnail-background-image .right-side-effect"), {width: "100%"}, "=")
    .to($(".thumbnail-background-image .left-side-effect"), {width: "0"}, "=")
    .to(".center-image-x-parent", {translateX: "-110%"}, "=")
    .to($(".thumbnail-background-image img"), {translateX: "-30%", scale: 2.5}, "=")
    .to(".bottomTextIcon", {opacity: 0}, "=")
    .to($(".right-side-slides .first-slide-body .text-box"), {
        width: "100%",
        right: "30%",
        translateY: "-10%"
    }, "=")
    .to($(".right-side-slides .first-slide-body  .first-text>h3"), {width: "80%", fontSize: 32, duration: 0.1}, "=")
    .to($(".right-side-slides .first-slide-body  .text-box p>strong"), {fontSize: 16}, "=")
    .to($(".right-side-slides  .first-text>p"), {width: "80%", duration: 0.1}, "=")
    .to($(".right-side-slides  .second-text>p"), {width: "70%"}, "=")
    .to($(".right-side-slides .first-slide-button"), {width: "30px", marginTop: 30,}, "=")
    .to($(".right-side-slides .opacity-0"), {opacity: 1}, "=")

let rightSideLogic = false;
$(".right-side-slides .first-slide-button").on("click", () => {
    if (rightSideLogic === false) {
        sliderRightAnimate.play()
        rightSideLogic = true;
        $(".right-side-slides .first-slide-button").text("").html("<img src='../images/arrow.svg' alt='arrow' />")
    } else {
        sliderRightAnimate.reverse();
        rightSideLogic = false;
        setTimeout(() => {
            $(".right-side-slides .first-slide-button").text("Read More...")
        }, 800)
    }
})