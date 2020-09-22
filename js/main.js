;(function() {
  "use strict";
  
  $(".md-menu li a").hover(
    function(){
      $(this).parent().addClass("hover")
    },
    function(){
      $(this).parent().removeClass("hover")
    }
  );

  $('.md-menu-toggle .checkbox4').on('change', function () {
    $('.md-main-nav-mobile').toggleClass('active');
    $('.md-header-contacts').toggleClass('opacity');
  });

  let overlay = document.getElementById('overlay');
  let vid = document.getElementById('md-video');

if(overlay.addEventListener){
		overlay.addEventListener("click", play, false)
	}else if(overlay.attachEvent){
		overlay.attachEvent("onclick", play)
	}

function play() { 
    if (vid.paused){
        vid.play(); 
        overlay.className = "o";
    }else {
        vid.pause(); 
        overlay.className = "";
    }
} 

})();
