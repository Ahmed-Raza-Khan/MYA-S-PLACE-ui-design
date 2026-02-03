$(document).ready(function(){
    function initFeatureSlider() {
        if ($(window).width() <= 425) {
            if (!$('.feature-slider').hasClass('slick-initialized')) {
                $('.feature-slider').slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1, // Shows exactly one card
                    slidesToScroll: 1,
                    arrows: false,
                    adaptiveHeight: true
                });
            }
        } else {
            if ($('.feature-slider').hasClass('slick-initialized')) {
                $('.feature-slider').slick('unslick');
            }
        }
    }

    // Run on load and on resize
    initFeatureSlider();
    $(window).resize(function() {
        initFeatureSlider();
    });
});