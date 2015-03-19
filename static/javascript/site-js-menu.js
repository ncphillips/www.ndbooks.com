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


  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

  $('#js-expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });

