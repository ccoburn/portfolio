(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 200,
      edge: 'left',
      closeOnClick: true,
      draggable: true
    });
    $('.parallax').parallax();
    $('ul.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space
