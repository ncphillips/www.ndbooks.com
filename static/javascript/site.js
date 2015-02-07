if (document.getElementById('js-menu')) {
var button = document.getElementById('js-menu-trigger');
var div = document.getElementById('js-menu');
    if (div.style.transform !== 'translateX(-220px)') {
        div.style.transform = 'translateX(-220px)';
    }
button.onclick = function() {
    
    if (div.style.transform !== 'translateX(-220px)') {
        div.style.transform = 'translateX(-220px)';
    }
    else {
        div.style.transform = 'translateX(0)';
    }
    return false; 
};

window.onresize = function() {
  mainnav.style.transform = 'block';
  navicon.style.transform = 'none';
}};






// transform(translateX(0))
















// // underline under the active nav item
//   $(".nav .nav-link").click(function() {
//     $(".nav .nav-link").each(function() {
//       $(this).removeClass("active-nav-item");
//     });
//     $(this).addClass("active-nav-item");
//     $(".nav .more").removeClass("active-nav-item");
//   });
// // show-hide the side menu
//   $('.js-menu-trigger').on('click touchstart', function(e){
//     $('.js-menu').toggleClass('is-visible');
//     $('.js-menu-screen').toggleClass('is-visible');
//     e.preventDefault();
//   });

//   $('.js-menu-screen').on('click touchstart', function(e){
//     $('.js-menu').toggleClass('is-visible');
//     $('.js-menu-screen').toggleClass('is-visible');
//     e.preventDefault();
//   });
// // Smooth Scroll
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({scrollTop: target.offset().top}, 600);
//         return false;
//       }
//     }
//   });
// });





// jQuery(document).ready(function($){
//   var contentSections = $('.cd-section'),
//     navigationItems = $('#cd-vertical-nav a');

//   updateNavigation();
//   $(window).on('scroll', function(){
//     updateNavigation();
//   });

//   //smooth scroll to the section
//   navigationItems.on('click', function(event){
//         event.preventDefault();
//         smoothScroll($(this.hash));
//     });
//     //smooth scroll to second section
//     $('.cd-scroll-down').on('click', function(event){
//         event.preventDefault();
//         smoothScroll($(this.hash));
//     });

//     //open-close navigation on touch devices
//     $('.touch .cd-nav-trigger').on('click', function(){
//       $('.touch #cd-vertical-nav').toggleClass('open');

//     });
//     //close navigation on touch devices when selectin an elemnt from the list
//     $('.touch #cd-vertical-nav a').on('click', function(){
//       $('.touch #cd-vertical-nav').removeClass('open');
//     });

//   function updateNavigation() {
//     contentSections.each(function(){
//       $this = $(this);
//       var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
//       if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
//         navigationItems.eq(activeSection).addClass('is-selected');
//       }else {
//         navigationItems.eq(activeSection).removeClass('is-selected');
//       }
//     });
//   }

//   function smoothScroll(target) {
//         $('body,html').animate(
//           {'scrollTop':target.offset().top},
//           600
//         );
//   }
// });


$(function () {
     $('.script-only').removeClass('hidden');
 });
