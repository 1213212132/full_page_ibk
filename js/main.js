$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



    $(".main_content").fullpage({
        navigation: true,//네비게이션 유무
        navigationPosition: "right",//네비게이션 위치

        navigationTooltips: ["MAIN", "NEWS", "3번", "4번"],//네비게이션 텍스트, 배열의 형식
        showActiveTooltip: true//네비게이션 선택 메뉴 활성화
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });





    $('.sub_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        dots: false,
    });


    $('.sub_visual .arrows .left').on('click', function () {
        $('.sub_slide').slick('slickPrev');
    });
    $('.sub_visual .arrows .right').on('click', function () {
        $('.sub_slide').slick('slickNext');
    });




    $('.fnt').each(function () {
        $(this).prop('fnt', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



    $('.company_slide').slick({
        arrows: false,
        fade: true,
        dots: false,
        // autoplay: true,
        // autoplaySpeed: 1000,
        pauseOnHover: true,
    });

})


