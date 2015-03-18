var container = document.querySelector('#grid-container');
var msnry;
// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
  msnry = new Masonry( container, {
    
  itemSelector: '.item'
  });
});
