const counters = document.querySelectorAll('.value');
const speed = 20;
counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('value');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 100);
        }else{
          counter.innerText = value;
        }
     
   }
   animate();
});



document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      arrows: false,
      dots: false,
      autoplay: true,
      interval: 2000,
      loop: true,
      speed: 800,
      pagination: false,
      pauseOnHover: false,
    }).mount();

    var main = new Splide( '#main-carousel', {
        fixedWidth  : 336,
        fixedHeight : 373,
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
        breakpoints: {
          1024: {
            fixedWidth  : 250,
            fixedHeight : 260,
          },
          767: {
            fixedWidth  : 150,
            fixedHeight : 160,
          },
        },
    } );

    var thumbnails = new Splide( '#thumbnail-carousel', {
      fixedWidth  : 210,
      fixedHeight : 233,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints: {
        1024: {
          fixedWidth  : 120,
          fixedHeight : 120,
        },
        767: {
          fixedWidth  : 80,
          fixedHeight : 80,
        },
      },
    } );

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();

});
  


let closeBtn = document.querySelector('.close-btn');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');
nav.addEventListener('click', () => {
  body.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  body.classList.remove('active');
})
