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

})();
