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

const nearby__swiper = new Swiper('.nearby__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 12,

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});

const advantages__swiper = new Swiper('.advantages__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

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

gsap.to(".paralax__col__mob_right", {
    y: "-15%", 
    ease: "none",
    scrollTrigger: {
        trigger: ".paralax", 
        start: "top bottom",       
        end: "bottom top",           
        scrub: true                  
    }
});




function openAddress() {
    $('.map_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeAddress() {
    $('.map_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.map_popup__close').on('click', closeAddress);

$('.address_popup__open').on('click', openAddress);


function openSale() {
    $('.sale_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeSale() {
    $('.sale_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.sale_popup__close').on('click', closeSale);

$('.sale_popup__open').on('click', openSale);


function openFeedback() {
    $('.feedback_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeFeedback() {
    $('.feedback_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup__close').on('click', closeFeedback);

$('.feedback_popup__open').on('click', openFeedback);