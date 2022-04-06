$(document).ready(function(){
    var MAX_WIDTH = 920, $window = $(window), toggleEnabled = true;

    $window.on('resize', function() {
        if ($window.width() < MAX_WIDTH){
            $(".vegi-division").removeClass("d-flex");
            $(".vegi-division").hide();
        }
        else{
            $(".vegi-division").addClass("d-flex");
            $(".vegi-division").show();
        }
    });
});




$(document).ready(function () {
    // $('.carousel').slick({
    //     slidesToShow: 3,
    //     dots: true,
    //     centerMode: true,
    // });
    // $(".variable").slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     centerMode: true,
    //     variableWidth: true,
    //     arrows: false

    // });
    $('.variable').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
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

    // $('.variable').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4
    //   });
    $(".nxt").click(function () {
        $('.variable').slick("slickNext");
    })
    $(".prev").click(function () {
        $('.variable').slick("slickPrev");
    })

    $('.minus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }

        $input.val(value);

    });

    $('.plus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }

        $input.val(value);
    });

    $('.var-bs').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
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
    $(".nxt-bs").click(function () {
        $('.var-bs').slick("slickNext");
    })
    $(".prev-bs").click(function () {
        $('.var-bs').slick("slickPrev");
    })
});

