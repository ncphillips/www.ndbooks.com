  $(".dropdown-button").click(function() {
    $(".dropdown-menu").toggleClass("show-menu");
    $(".dropdown-menu > li").click(function(){
      $(".dropdown-menu").removeClass("show-menu");
    });
    $(".dropdown-menu.dropdown-select > li").click(function() {
      $(".dropdown-button").html($(this).html());
    });
  });




document.documentElement.className = document.documentElement.className.replace("no-js","js");
// BackgroundCheck.init({
//   targets: '.overlay',
//   images: '.featured_image'
// });

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






// jQuery(document).ready(function($){
//   var contentSections = $('.cd-section'),
//     navigationItems = $('#cd-vertical-nav a');

//   updateNavigation();
//   $(window).on('scroll', function(){
//     updateNavigation();
//   });

