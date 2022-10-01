function chal(){
    gsap.registerPlugin(ScrollTrigger);    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#bg"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#bg", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
    });
    

    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
chal()
gsap.from("#leftimg",{
  y:80,
  ease:"Expo.esaeInOut",
  duration:1.5
})
gsap.from("#topimg",{
  x:"90",
  ease:"Expo.esaeInOut",
  duration:1.5
})
gsap.from("#bottomimg",{
  y:"-80",
  ease:"Expo.esaeInOut",
  duration:1.5
})

gsap.from("#part2 h2,#part2 h1,#aboutus",{
  y:65,
  opacity:0,
  duration:2,
  ease:"Expo.easeInOut",
  scrollTrigger:{
   trigger:"#part2 h2",
   start:"top 70%",
   end:"top 30%",
   scroller:"#bg",
   scrub:5
  },
})

gsap.from("#part3-left-left1,#part3-left-right1",{
  y:65,
  opacity:0,
  duration:2,
  ease:"Expo.easeInOut",
  stagger:0.6,
  scrollTrigger:{
   trigger:"#part3-left1-topimg  img",
   start:"top 70%",
   end:"top 40%",
   scroller:"#bg",
   scrub:3
  },
})

gsap.from("#part3-profile-text",{
  y:40,
  opacity:0,
  duration:3,
  ease:"Expo.easeInOut",
  scrollTrigger:{
   trigger:"#part3-left1-topimg  img",
   start:"top 15%",
   end:"top 0%",
   scroller:"#bg",
   scrub:5
  },
})
gsap.from("#part4 h1,#part4-brand-containor",{
  y:40,
  opacity:0,
  duration:3,
  stagger:2,
  ease:"Expo.easeInOut",
  scrollTrigger:{
   trigger:"#part4 h1,#part4-brand-containor",
   start:"top 90%",
   end:"top 60%",
   scroller:"#bg",
   scrub:4
  },
})

gsap.from(".part5-img",{
  y:40,
  opacity:0,
  duration:3,
  ease:"Expo.easeInOut",
  scrollTrigger:{
   trigger:".part5-img",
   start:"top 90%",
   end:"top 60%",
   scroller:"#bg",
   scrub:2
  },
})

gsap.from("#page5-box",{
  y:40,
  opacity:0,
  duration:4,
  ease:"Expo.easeInOut",
  scrollTrigger:{
   trigger:"#page5-box",
   start:"top 92%",
   end:"top 75%",
   scroller:"#bg",
   scrub:2
  },
})

gsap.from("#part8-box1,#part8-box2,#part8-box3,#part8-box4,#part8-box5",{
  y:55,
  opacity:0,
  stagger:3,
  ease:"Expo.easeInOut",
  scrollTrigger:{
   trigger:"#part8-box1",
   start:"top 92%",
   end:"top 80%",
   scroller:"#bg",
   scrub:2
  },
})






var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });