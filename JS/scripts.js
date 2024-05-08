$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        1100: {
            items: 4
        }
    }
});


$(window).on('load', function() {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});