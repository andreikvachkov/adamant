const category__swiper = new Swiper('.category__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.category__swiper__next',
        prevEl: '.category__swiper__prev',
    },

});

const slider__swiper = new Swiper('.slider__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.slider__swiper__next',
        prevEl: '.slider__swiper__prev',
    },

});


gsap.registerPlugin(ScrollTrigger);


gsap.to(".category__bottom__content", {
    y: "-25%", 
    ease: "none",
    scrollTrigger: {
        trigger: ".category__bottom", 
        start: "top bottom",       
        end: "bottom top",           
        scrub: true                  
    }
});


gsap.to(".model__center", {
    y: "+17%", 
    ease: "none",
    scrollTrigger: {
        trigger: ".model", 
        start: "top bottom",       
        end: "bottom top",           
        scrub: true                  
    }
});



gsap.to(".paralax__col__left", {
    y: "-41%", 
    ease: "none",
    scrollTrigger: {
        trigger: ".paralax", 
        start: "top bottom",       
        end: "bottom top",           
        scrub: true                  
    }
});

gsap.to(".paralax__col__right", {
    y: "-43.5%", 
    ease: "none",
    scrollTrigger: {
        trigger: ".paralax", 
        start: "top bottom",       
        end: "bottom top",           
        scrub: true                  
    }
});

gsap.to(".paralax__col__center", {
    y: "-64.5%", 
    ease: "none",
    scrollTrigger: {
        trigger: ".paralax", 
        start: "top bottom",       
        end: "bottom top",           
        scrub: true                  
    }
});
