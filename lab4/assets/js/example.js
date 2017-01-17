/*
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#sidebar').fadeIn();
    } else {
        $('#sidebar').fadeOut();
    }
});
*/

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $('.scrollToTop').fadeIn();
            $('#sidebar').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
            $('#sidebar').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
