var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets) {
    crsr.style.left= dets.x+50 + "px"
    crsr.style.top= dets.y + "px"
    blur.style.left= dets.x -200 + "px"
    blur.style.top= dets.y -200 + "px"

})

   


var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #96c11e";
        crsr.style.backgroundColor = "#96c11e";
    });
  });



gsap.to(".nav",{
       backgroundColor: "rgba(0, 0, 0, 0.950)",
       height: "80px",
       duration: "1",
       scrollTrigger:{
                 trigger:".nav",
                 scroller:"body",
                 start: "top  -10px",
                 end: "top -11px",
                 scrub: 2,

       }
})
gsap.to(".main",{
    backgroundColor:"rgba(0, 0, 0, 0.950)",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start: "top -20%",
        end: "top -100%",
        scrub: 2,
    }
})

gsap.from(".about img, .about-content", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:0.9,
    scrollTrigger: {
      trigger: ".about",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 4,
    },
  });

  gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
    //    markers:true,
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });
  
  gsap.from("#colon1",{
    y:-90,
    x:-90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub: 3

    }
  })

  gsap.from("#colon2",{
    y:90,
    x:90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub: 3

    }
  })

  gsap.from(".page4 h2",{
    y:50,
    scrollTrigger:{
      trigger:".page4 h2",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"top 75%",
      scrub: 2

    },
  });

  
  