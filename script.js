function timeline1(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start: "top top",
            end: "+=" + (window.innerHeight * 7),
            scrub: 1,
            pin: true,
        },
    })
    
    tl
    .to("#centerimg",{
        left: "50%",
        ease: Power0
    })
    .to("#img-container img",{
        scale: 1,
        ease: Power0,
        delay: .01,
        duration: 1.6
    }, "same")
    .to("#circle #btm img",{
        rotate: "-180deg",
        ease: Power0,
        stagger: .04,
        delay:-.05,
    }, "same")
    .to("#heads h1:nth-child(1)",{
        ease: Power0,
        // y:380,
        y: "200%",
        delay:-.053
    }, "same")
    .from("#purple",{
        ease: Power0,
        scale:.5,
        top: "130%",
        delay:-.25
    }, "same")
    .to("#circle",{
        scale:0,
        ease: Power0,
        delay:.054
    }, "same")
    .to("#centerimg span",{
        ease: Power0,
        opacity: 0,
        duration: .05
    }, "same")
    .to("#cimg img",{
        scale:0,
        ease: Power0,
        delay:.001,
        duration:.3
    }, "same")
    .to("#purple",{
        opacity:0,
        duration: .05,
        delay: .4
    }, "same")
    .to("#smcircle",{
        scale:0,
        ease: Power0,
        delay:.27
    }, "same")
    .to("#heads h1:nth-child(2)",{
        y: "0%",
        rotate: "0deg",
        ease: Power0,
        delay:.18
    }, "same")
    .to("#square",{
        top: "0",
        ease: Power0,
        delay:.45
    }, "same")
    .to("#square",{
        top: "-65%",
        ease: Power0,
        delay:1.4
    }, "same")
}

function timeline2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#msecond",
            start: "top top",
            scrub: 1,
            end: "+=" + (window.innerHeight * 7),
            pin: true
        },
    })
    
    
    tl2
    .to(".scircle",{
        top: "50%",
        scale: 1,
        stagger: .1,
        ease: Power0,
    })
    .to(".scircle",{
        left: "50%",
        ease: Power0,
        delay: .4
    })
    .to(".scircle",{
        scale: .7,
        ease: Power0,
    })
    .to(".scircle",{
        scale: 1,
        ease: Power0,
    })
    .to(".scircle",{
        scale: 6,
        ease: Power0,
        ease: Expo.easeIn
    }, "same2")
    .to(".dr1",{
        left: "0%",
        delay: -.8,
        duration: 3.8,
        ease: Power0,
    }, "same2")
    .to("#h1-wrapper h1:nth-child(1)",{
        y: "-100%",
        delay:.25,
        duration: 1.25,
        ease: Power0,
    }, "same2")
    .to("#h1-wrapper h1:nth-child(2)",{
        y: "-100%",
        delay: .25,
        duration: 1.25,
        ease: Power0,
    }, "same2")
    .to("#h1-wrapper h1:nth-child(3)",{
        y:"-100%",
        delay: .25,
        duration: 1.25,
        ease: Power0,
    }, "same2")
    .to("#stop",{
        borderBottom: "2px solid #fff"
    }, "same2")
    .to("#stop h1",{
        left: "-320%",
        delay: .9,
        duration: 12,
        ease: Power0,
    }, "same2")
    .to("#sbtm>h1:nth-child(2)",{
        opacity: 0,
        delay: 2,
        duration: 2,
        ease: Power0
    }, "same2")
    .to("#sbtm>h1:nth-child(3)",{
        opacity: 1,
        delay: 4.5,
        duration: 2,
        ease: Power0
    }, "same2")
    .to("#sliding",{
        left: "0",
        delay: 1.5,
        duration: 10,
        ease: Power0,
    }, "same2")
    .to(".dr2",{
        left: "0%",
        delay: 6,
        duration: 10,
        ease: Power0,
    }, "same2")
    .to("#h1-wrapper h1:nth-child(2)",{
        y: "-200%",
        delay: 7.5,
        duration: 2,
        ease: Power0,
    }, "same2")
    .to("#h1-wrapper h1:nth-child(3)",{
        y: "-200%",
        delay: 7.5,
        duration: 2,
        ease: Power0,
    }, "same2")
    .to(".column",{
        height: "100%",
        stagger: .25,
        delay: 12,
        duration: 2,
        ease: Power0
    }, "same2")
    .to(".column .row",{
        x: "-50%",
        delay: .3,
        ease: Power0
    })
    .to(".column .row:nth-child(2)",{
        x: "-75%",
        ease: Power0
    })
}

window.addEventListener("DOMContentLoaded", function(){
    timeline1()
    timeline2()
})