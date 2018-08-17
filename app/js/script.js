//Scripts
jQuery(function ($) {

//Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 440) {
            $('.menu-catalogue').addClass("fix");
            $('#back-to-top').fadeIn();
        } else {
            $('.menu-catalogue').removeClass("fix");
            $('#back-to-top').fadeOut();
        }
    });
// scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

//Carousel responsive
    $(function () {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 991) {
                    width = width / 2;
                } else if (width >= 767) {
                    width = width;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular',
                animation: {
                    duration: 1000,
                    speed: 1000,
                    easing: 'linear',
                    complete: function () {
                    }
                }
            })
            .jcarouselAutoscroll({
                interval: 10000,
                target: '+=1',
                autostart: true,
            })
            .on('mouseover', function (e) {
                $(this).jcarouselAutoscroll('stop');
            })
            .on('mouseout', function (e) {
                $(this).jcarouselAutoscroll('start');
            });

        var jcarousel = $('.jcarousel.work');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular',
                animation: {
                    duration: 1000,
                    speed: 1000,
                    easing: 'linear',
                    complete: function () {
                    }
                }
            })
            .jcarouselAutoscroll({
                interval: 10000,
                target: '+=1',
                autostart: true,
            })
            .on('mouseover', function (e) {
                $(this).jcarouselAutoscroll('stop');
            })
            .on('mouseout', function (e) {
                $(this).jcarouselAutoscroll('start');
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .on('click', function (e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function (page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });


    });
});
