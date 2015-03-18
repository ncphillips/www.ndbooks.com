
  $("img").unveil(300, function() {
    $(this).load(function() {
      this.style.opacity = 1;
    });
  });



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
};};
$('a').smoothScroll({offset: -120,
  afterScroll: function() {
    this.addClass("flash-success")
  },
  easing: 'swing',
});

$(document).ready(function() {
         $('#tipue_search_input').tipuesearch({
            highlightEveryTerm: true,
            descriptiveWords: 100
         });
    });


BackgroundCheck.init({
  targets: '.overlay',
  images: '.featured_image'
});

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

