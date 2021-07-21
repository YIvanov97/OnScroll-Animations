document.addEventListener('DOMContentLoaded', () => {
  let controller = new ScrollMagic.Controller();
  let firstIllustration = document.getElementById('firstIllustration'); 
  let secondIllustration = document.getElementById('secondIllustration'); 
  let chat = document.getElementById('chat'); 
  
  let timeline = new TimelineMax();

  firstIllustration.addEventListener('load', function () {
    let svg = firstIllustration.contentDocument;
    let notify = svg.getElementById('slidegroup');
    
    timeline
    .from(notify, 4, {
      x: 130,
      rotation: 45,
      opacity: 0,
      ease: Power3.easeInOut
    })
  })
  
  let scene = new ScrollMagic.Scene({
    triggerElement: '.container',
    duration: '100%',
    triggerHook: 0,
    offset: '300'
  })
  .setTween(timeline)
  .setPin('.container')
  .addTo(controller);
  
  
  let timeline2 = new TimelineMax();
  
  secondIllustration.addEventListener('load', function() {
    let svg = secondIllustration.contentDocument;
    let notify = svg.getElementById('notification');
    
    timeline2
    .from(notify, 4, {
      x: 130,
      y: 100,
      opacity: 0,
      ease: Power3.easeInOut
    })
  })
  
  let scene2 = new ScrollMagic.Scene({
    triggerElement: '.container2',
    duration: '100%',
    triggerHook: 0,
    offset: '350'
  })
  .setTween(timeline2)
  .setPin('.container2')
  .addTo(controller);

  let timeline3 = new TimelineMax();
  
  chat.addEventListener('load', function() {
    let svg = chat.contentDocument;
    let chat1 = svg.getElementById('chat1');
    let chat2 = svg.getElementById('chat2');
    let chat3 = svg.getElementById('chat3');
    
    timeline3
    .from(chat1, 4, {
      x: -130,
      opacity: 0,
      ease: Power3.easeInOut
    })
    .from(chat2, 4, {
      x: 130,
      opacity: 0,
      ease: Power3.easeInOut
    })
    .from(chat3, 4, {
      x: -130,
      opacity: 0,
      ease: Power3.easeInOut
    })
  })
  
  let scene3 = new ScrollMagic.Scene({
    triggerElement: '.container3',
    duration: '100%',
    triggerHook: 0,
    offset: '350'
  })
  .setTween(timeline3)
  .setPin('.container3')
  .addTo(controller);
})