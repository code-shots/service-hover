//Service background animation
let services = document.querySelectorAll('.service-wrapper');

services.forEach((service) => {
  service.addEventListener('mouseenter', (event) => {
   anime.remove(service.querySelector('.arrow'));
   anime.remove(service.querySelector('.arrow-small'));
   anime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      scale: 30,
      duration: 1000,
   })

   anime({
      targets: service.querySelector('.arrow-small'),
      easing: 'easeOutExpo',
      scale: 7,
      duration: 1300,
   })

   anime.timeline()
      .add({
         targets: service.querySelector('svg'),
         translateX: -25,
         translateY: 25,
         easing: 'easeOutExpo',
         duration: 400,
      })
      .add({
         targets: service.querySelector('svg'),
         translateX: 0,
         translateY: 0,
         easing: 'easeOutExpo',
         duration: 1700,
         offset: 100,
      })
  })

  service.addEventListener('mouseleave', (event) => {
   anime.remove(service.querySelector('.arrow'));
   anime.remove(service.querySelector('.arrow-small'));
   anime({
      targets: service.querySelector('.arrow'),
      easing: 'easeOutExpo',
      scale: 1,
      duration: 600,
   })

   anime({
      targets: service.querySelector('.arrow-small'),
      easing: 'easeOutExpo',
      scale: 1,
      duration: 900,
   })

    anime.timeline()
      .add({
         targets: service.querySelector('svg'),
         translateX: -25,
         translateY: 25,
         easing: 'easeOutExpo',
         duration: 400,
      })
      .add({
         targets: service.querySelector('svg'),
         translateX: 0,
         translateY: 0,
         easing: 'easeOutExpo',
         duration: 1700,
         offset: 100,
      })
  })
})
