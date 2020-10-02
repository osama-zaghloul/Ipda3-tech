$(document).ready(function () {
    $('.offer-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        prevArrow: '.offer-prev',
        nextArrow: '.offer-next',
        // variableWidth: true,
        // centerMode: true,   
        // centerPadding: '20px',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.client-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        prevArrow: '.client-prev',
        nextArrow: '.client-next',
        // variableWidth: false,
        // centerPadding: '10%',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // $('.project-tour-items').slick({
    //     infinite: false,
    //     centerMode: true,
    //     centerPadding: '200px',
    //     slidesToShow: 3,
    //     rtl: true,
    //     prevArrow: '.project-tour-prev',
    //     nextArrow: '.project-tour-next',
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });

    // Start Smooth Carsoul 

    $num = $('.my-card').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;

    if ($num % 2 == 0) {
        $('.my-card:nth-child(' + $even + ')').addClass('active');
        $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
        $('.my-card:nth-child(' + $odd + ')').addClass('active');
        $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }

    $('.my-card').click(function () {
        $slide = $('.active').width();
        console.log($('.active').position().left);

        if ($(this).hasClass('next')) {
            $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
        } else if ($(this).hasClass('prev')) {
            $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
    });


    // Keyboard nav
    $('html body').keydown(function (e) {
        if (e.keyCode == 37) { // left
            $('.active').prev().trigger('click');
        }
        else if (e.keyCode == 39) { // right
            $('.active').next().trigger('click');
        }
    });

    $('.project-tour-next').click(function(){
        $('.active').next().trigger('click');
    });

    $('.project-tour-prev').click(function(){
        $('.active').prev().trigger('click');
    });

    // End Smooth Carsoul
});