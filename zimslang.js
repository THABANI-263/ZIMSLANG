/*VIEWPORT CHECKER*/
$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});
/*BACK TO THE TOP ARROW*/
jQuery(document).ready(function() {
 var offset = 250;
 var duration = 300;
 jQuery(window).scroll(function() {
 if (jQuery(this).scrollTop() > offset) {
 jQuery(‘.back-to-top’).fadeIn(duration);
 } else {
 jQuery(‘.back-to-top’).fadeOut(duration);
}
 });
 
jQuery(‘.back-to-top’).click(function(event) {
event.preventDefault();
jQuery(‘html, body’).animate({scrollTop: 0}, duration);
return false;
})
});