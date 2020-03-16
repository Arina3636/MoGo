function myFunction(x) {
    x.classList.toggle("change");
  }


$(function(){

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
    $('.header-slider').slick({
        infinite: true,
        fade: false,
        arrows: false,
        asNavFor: '.slider-dotshead'
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider'
    });

    $('.slider-comments').slick({
        infinite: true,
        autoplay: false,
        fade: false,
        arrows: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="images/arrow-right.svg" alt="">',
    });






    // $('.activities-info__item-btn').on('click', function (){
    //     $(this).toggleClass('active');
    // });

      $('.activities-info__item-btn--1').on('click', function(){
        $('.activities-info__item-content--1').slideToggle();
        $(this).toggleClass('active');
    });

    $('.activities-info__item-btn--2').on('click', function(){
        $('.activities-info__item-content--2').slideToggle();
        $(this).toggleClass('active');
    });

    $('.activities-info__item-btn--3').on('click', function(){
        $('.activities-info__item-content--3').slideToggle();
        $(this).toggleClass('active');
    });

    

    var show = true;
    var countbox = ".about__items";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.about-info__item-number').css('opacity', '1');
            $('.about-info__item-number').each(function () {
                $(this).prop('Counter',0).animate({
                Counter: $(this).text()
                }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                $(this).text(Math.ceil(now));
                }
                });
              });
            show = false;
        }
    });



    new WOW().init();


});