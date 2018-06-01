//tests:
//console.log(`content.js file is loaded`);

$(document).ready(function(){
    //change header opacity on scroll:
    let scrollBreak = 20;
    $(window).scroll(function() {
        let position =$(this).scrollTop();
        if(position >= scrollBreak) {
            $('header').addClass('dim');
        } else {
            $('header').removeClass('dim');
        }
    });    
}); 