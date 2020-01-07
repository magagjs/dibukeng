$(document).ready(function() {	

    // function to hide navigation home link/button on home page
    hideHomeNav = function(){
        if( $('body').find("#home-main-content").length >0 ){
            console.log("Found #home-main-content");
            $("#buk-home-link").addClass("buk-home-link-hide").removeClass("buk-home-link-show");
        }else
            console.log("Cannot Find #home-main-content");
    }
    window.hideHomeNav = hideHomeNav;
});