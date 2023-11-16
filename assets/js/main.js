
// 커서 포인트 
window.addEventListener("mousemove", function (e) {
  gsap.to('.cursor',0,{
    x:e.clientX,
    y:e.clientY,
    ease:'none'
  })

})

  // 버튼 토글
  $('.menu-btn').click(function(){
    $('.nav-wrap').toggleClass('on')
  })



  // 텍스트 스크롤 트리거
$('[data-text]').each(function(i,el){
  child=$(this).find('.child');
  gsap.from(child,{
    scrollTrigger: {
      trigger: el,
      start: "0% 50%",
      end: "bottom center",

    },
    opacity:0,
    yPercent:100,
    stagger:0.1,
  })
})

// 버튼호버효과
const btnTxt = new SplitType('#BtnHov', { types: 'words, chars', });

hovMotion = gsap.timeline({
  paused:true,
})

hovMotion
.to('#BtnHov .char',{ yPercent:-100, stagger:0.01,  })
.set('#BtnHov  .char',{ yPercent:100, })
.to('#BtnHov .char',{ yPercent:0, stagger:0.01,  })

$('#BtnHov').mouseover(function () {
    m1=setTimeout(() => {
      hovMotion.restart();
    }, 100);
})
$('#BtnHov').mouseout(function () {
  clearTimeout(m1)
})


// 텍스트 이펙트
const introText = gsap.to('.text-area .parent .child',3,{
  yPercent:100,
  stagger:{ from:"random", each: 0.1, },
  paused:true,
})

  const introTl = gsap.timeline({
    onComplete:function(){
      $('.sc-visual .bg').addClass('end');
      $('body').removeClass('hidden');
      introText.play()

    }
  })



  // 메인 로딩 후 효과
  introTl.to('.sc-visual .bg-item',0.5,{ opacity:1, stagger:{ from:"random", each: 0.05, }, })
  introTl.to('.sc-visual .bg-inner',{ scale:0.9})
  introTl.to('.sc-visual .bg-inner',{ scale:1},'a')
  $('.sc-visual .bg-cont').each(function(i,el){
    getX=$(this).data('x');
    getY=$(this).data('y');
    getR=$(this).data('r');
    introTl.to(`.sc-visual .bg-item:nth-child(${i+1}) .bg-cont`,{yPercent:getX,xPercent:getY,rotation:getR},'a')
  })




// sc-info
gsap.set('.sc-info .bg-item:nth-child(1)',{
  opacity:0,xPercent:50,yPercent:10,rotation:10
})
gsap.set('.sc-info .bg-item:nth-child(2)',{
  opacity:0,xPercent:-50,yPercent:-30,rotation:0
})
gsap.set('.sc-info .bg-item:nth-child(3)',{
  opacity:0,xPercent:-50,yPercent:10,rotation:0
})

const infoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-info',
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
})
infoTl.to('.sc-info .bg-item',{ 
  opacity: 1, xPercent: 0, yPercent: 0, rotation: 0, 
})

const bgItems = document.querySelectorAll('.sc-info .bg-item');
bgItems.forEach((item, index) => {
  infoTl.to(item, { 
    opacity: 1, 
    xPercent: index === 0 ? 35 : -35, 
    yPercent: 100, 
    rotation: 0, 
  }, 'a');
  infoTl.to('.sc-info .bg-item:nth-child(1)',{ 
    opacity:1, xPercent:35, yPercent:-100, rotation:0, 
  },'a')
  infoTl.to('.sc-info .bg-item:nth-child(2)',{ 
    opacity:1, xPercent:-35, yPercent:100, rotation:0, 
  },'a')
  infoTl.to('.sc-info .bg-item:nth-child(3)',{ 
    opacity:1, xPercent:-35, yPercent:100, rotation:0, 
  },'a')
});

const infoText = gsap.to('.sc-info .parent .child', {
  duration: 3,
  yPercent: 100,
  stagger: 0.2, 
  scrollTrigger: {
    trigger: '.sc-info .con',
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
})



  text = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-white-box',
      start: "0% 0%",
      end: "100% 100%",
      invalidateOnRefresh: true,  

    },
    delay:3,    
  })

  text.to('.sc-white-box [data-number]',{
    x:()=>{
      return $('.sc-white-box .cont-wrap .cont-area .content').innerWidth();
    },
    xPercent:-100,
    fontWeight:900,
  })

  text.to('.sc-white-box [data-number] ',{
    delay:2,
    x:0,
    xPercent:-0,
    fontWeight:500,
  })

  text.to('.sc-white-box [data-number]',{
    delay:1,
    x:()=>{
      return $('.sc-white-box .cont-wrap .cont-area .content').innerWidth()/2;
    },
    xPercent:-100,
    fontWeight:100,
    delay:3,
  })

  text2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-white-box',
      start: "0% 0%",
      end: "100% 100%",
      invalidateOnRefresh: true,  

    },
    delay:3,
    
  })
  text2.to('.sc-white-box [data-txt]',{
    x:()=>{
      return $('.sc-white-box .cont-wrap .cont-area .content').innerWidth();
    },
    xPercent:-100,
    fontWeight:900,
  })

  text2.from('.sc-white-box [data-txt] ',{
    delay:2,
    x:0,
    xPercent:-0,
    fontWeight:500,
  })

  text2.to('.sc-white-box [data-txt]',{
    delay:1,
    x:()=>{
      return $('.sc-white-box .cont-wrap .cont-area .content').innerWidth()/2;
    },
    xPercent:-50,
    fontWeight:100,
    delay:3,
  })



  $('.typo-btn').hover(function(){
    text=$(this).text();
    $('.sc-typo-info .preview span').text(text)
  })

  $('.sc-typo-info .dropdown-item').click(function(){
    weight=$(this).data('weight');
    $('.sc-typo-info .typo_list').css('font-weight',weight)
    $('.dropdown-box').removeClass('show');
  })

  $('.dropdown-btn').click(function(){
    $('.dropdown-box').toggleClass('show');
  })




  $('.bar-item input').on('input', function() {
      $(this).parents('.bar-item').find('.curr').text($(this).val());

      $('#textarea').css($(this).data('change'),$(this).val()+$(this).data('unit'))

  })
 

  // Swiper 슬라이더 설정
  var swiper2 = new Swiper(".mySwiper2", {
    // direction: "vertical",
    loop:true,
    // grabCursor: true,
    effect: "creative",
    autoplay: {
      delay: 3000,
    },
    creativeEffect: {
      prev: {
        translate: [0, "-100%", 0],
      },
      next: {
        translate: [0, 0, -400],
      },
    },
  })

  var swiper1 = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    loopedSlides: 1,
    scrollbarDragEnd: true,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 100,
    on: {
      slideChangeTransitionStart: function () {
        var currentSlide = this.slides[this.activeIndex];
        var tl = gsap.timeline();

        tl.to(currentSlide, 0.5, { scale: 1, opacity: 1 });

        if (this.previousIndex >= 0) {
          var prevSlide = this.slides[this.previousIndex];
          tl.to(prevSlide, 1, { scale: 0.5, opacity: 0.9 }, "-=0.5");
        }
      },
    },
  })

  swiper2.init();
  swiper1.init();


  gsap.set('.sc-language .bg-item:nth-child(1)',{
    opacity:0,xPercent:-50,yPercent:0,rotation:0
  })
  gsap.set('.sc-language .bg-item:nth-child(2)',{
    opacity:0,xPercent:50,yPercent:0,rotation:0
  })
  gsap.set('.sc-language .bg-item:nth-child(3)',{
    opacity:0,xPercent:0,yPercent:30,rotation:0
  })
  gsap.set('.sc-language .bg-item:nth-child(4)',{
    opacity:0,xPercent:-50,yPercent:-30,rotation:0
  })
  gsap.set('.sc-language .bg-item:nth-child(5)',{
    opacity:0,xPercent:0,yPercent:100,rotation:0
  })
  gsap.set('.sc-language .bg-item:nth-child(6)',{
    opacity:0,xPercent:50,yPercent:-30,rotation:0
  })
  
  
  
  langTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-language',
      start: "0% 100%",
      end: "100% 0%",
      scrub:0,
    },
  })
  
  langTl.to('.sc-language .bg-item',{ 
    opacity:1, xPercent:0, yPercent:0, rotation:0, 
  })


  langTl.to('.message', {
    scrollTrigger: {
      trigger: '.sc-language',
      start: "0% 50%",
      end: "100% 0%",
      scrub: 0,
    },
    fontWeight: 800, // 원하는 폰트 굵기로 변경합니다.
    letterSpacing: "5px", 
  });


  gsap.set('.sc-contact .bg-item:nth-child(1)',{ opacity:0,xPercent:0,yPercent:-100,rotation:-45 })
  gsap.set('.sc-contact .bg-item:nth-child(2)',{opacity:0,xPercent:0,yPercent:-100,rotation:-45})
  gsap.set('.sc-contact .bg-item:nth-child(3)',{opacity:0,xPercent:30,yPercent:100,rotation:-45})
  gsap.set('.sc-contact .bg-item:nth-child(4)',{opacity:0,xPercent:-100,yPercent:100,rotation:-45})
  gsap.set('.sc-contact .bg-item:nth-child(5)',{opacity:0,xPercent:70,yPercent:-70,rotation:-45})
  gsap.set('.sc-contact .bg-item:nth-child(6)',{opacity:0,xPercent:-100,yPercent:-100,rotation:-45})


    
  contSt = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-contact',
      start: "0% 0%",
      end: "100% 100%",
      scrub:0,
    },
    
  })
  
  contSt.from('.sc-contact .con-item',{opacity: 0, yPercent:200, stagger:0.1},'a')

  contSt.to('.sc-contact .bg-item',{opacity: 1, xPercent: 0, yPercent: 0, rotation: 0,   },'a')
  
    contSt.to('.sc-contact .bg-item:nth-child(1)',{opacity:0,xPercent:0,yPercent:-100,rotation:-45  },'b')
  contSt.to('.sc-contact .bg-item:nth-child(2)',{opacity:0,xPercent:0,yPercent:-100,rotation:-45  },'b')
  contSt.to('.sc-contact .bg-item:nth-child(3)',{opacity:0,xPercent:30,yPercent:100,rotation:-45  },'b')
  contSt.to('.sc-contact .bg-item:nth-child(4)',{opacity:0,xPercent:-100,yPercent:100,rotation:-45  },'b')
  contSt.to('.sc-contact .bg-item:nth-child(5)',{opacity:0,xPercent:70,yPercent:-70,rotation:-45  },'b')
  contSt.to('.sc-contact .bg-item:nth-child(6)',{opacity:0,xPercent:-100,yPercent:-100,rotation:-45  },'b')

  contSt.to('.sc-contact .con-item',{opacity: 0, yPercent:-200, stagger:0.1})



