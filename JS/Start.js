/*global $, window*/

var winHeight = $(window).height(),
    header = $("header"),
    nav = $("nav"),
    navButton = $('.navbar-toggler'),
    head = $('#head'),
    portfImg = $('.portfDiv img');

$(function () {
    'use strict';
    head.height("$(window).height()");
        
    if (winHeight === 176) {
        header.unwrap('');
        nav.addClass('navbar-shrink');
    }
});

navButton.click(function () {
    'use strict';
    
    $("nav ul").toggleClass('ml-auto').css({
        
        textAlign: "left",
        paddingLeft: "0",
        lineHeight: "1.5"
    });
});
$(window).on('resize', function () {
    'use strict';
    
    portfImg.width();
    portfImg.height();
    
});
