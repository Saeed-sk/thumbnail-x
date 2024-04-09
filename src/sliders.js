
let particles = $("#particles-js")[0]
let left_side_slides = new Swiper(".left-side-slides", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 1000,
    allowSlideNext:false,
    allowSlidePrev:false,
    mousewheel: true,
    speed:1500,
    initialSlide:0
});
left_side_slides.on('slideChange',()=>{
    gsap.fromTo(".center-image-x-parent",{rotateY:"360deg"},{rotateY:0,duration:1});
})
$(".left-side-slides .btn-change-slide").on("click",()=>{
    left_side_slides.slideNext()
})

let particlesShow = gsap.timeline({paused:true})
particlesShow.to(particles,{opacity:0}).fromTo(particles,{display:"unset"},{display:"none"})
let slide_left_Logic = false;
$(".left-side-slides .first-slide-button").on("click",()=>{
    if (slide_left_Logic){
        left_side_slides.allowSlideNext=false;
        left_side_slides.allowSlidePrev=false
        slide_left_Logic = false;
        particlesShow.reverse()
    }else {
        left_side_slides.allowSlideNext=true
        left_side_slides.allowSlidePrev=true
        slide_left_Logic = true
        particlesShow.play()
    }
})

// right side slider setting
let right_side_slides = new Swiper(".right-side-slides", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 1000,
    allowSlideNext:false,
    allowSlidePrev:false,
    mousewheel: true,
    speed:1500,
    initialSlide:0
});


right_side_slides.on('slideChange',()=>{
    gsap.fromTo(".ImageXParent",{rotateY:"360deg"},{rotateY:0,duration:1})
})
let slide_right_Logic = false;
$(".right-side-slides .first-slide-button").on("click",()=>{
    if (slide_right_Logic){
        right_side_slides.allowSlideNext=false;
        right_side_slides.allowSlidePrev=false
        slide_right_Logic = false;
        particlesShow.reverse()
    }else {
        right_side_slides.allowSlideNext=true;
        right_side_slides.allowSlidePrev=true;
        slide_right_Logic = true;
        particlesShow.play()
    }
})

$(".right-side-slides .btn-change-slide").on("click",()=>{
    right_side_slides.slideNext()
})

// particles setting on particles.json in src file
particlesJS.load('particles-js', 'src/particles.json', function() {});

// section accordion setting
let accordion = new Accordion(".accordion-container",{
    duration: 400,
    showMultiple: false,
    openOnInit:[0]
})