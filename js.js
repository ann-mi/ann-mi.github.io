$(document).ready(function () {
    $(".header_ham").click(function () {
        $(this).toggleClass("active");
        $('.header_menu_list li ul li').removeClass('open');
        $('.header_menu_list li ul').removeClass('active');
        $('.header_menu_nav').toggleClass('active');
    });
    $(".header_menu_list li ul").click(function () {
        $(this).toggleClass("active");
        $(this).find('li').toggleClass('open');
    });
    $('.footer_tab_title').click(function () {
        $(this).parent().find('.footer_nav').slideToggle();
        $(this).toggleClass('active');
    });
    $('.header_menu_title').click(function () {
        $('.header_menu_list').slideToggle()
    });
    $('.main-slider').slick({
        autoplay: true,
        dots: true
    });
    $('.main_popular_slider').slick({
        // autoplay: true,
        dots: true,
        infinite: true
    });
    $('.brand_slider').slick({
        // autoplay: true,
        dots: true,
        slidesToShow: 3,
        infinite: true
    });
    $('.notes_slider').slick({
        // autoplay: true,
        slidesToShow: 1,
        dots: true,
        infinite: true
    });
    $('.viewed_product_slider').slick({
        // autoplay: true,
        slidesToShow: 2,
        dots: true,
        infinite: true
    });
});

if(window.matchMedia('(min-width: 768px)').matches)
{
    $('.main_popular_slider').slick({
        // autoplay: true,
        dots: false,
        slidesToShow: 4,
        infinite: true
        // centerMode: true
    });
    $('.brand_slider').slick({
        // autoplay: true,
        dots: false,
        slidesToShow: 4,
        infinite: true
    });
    $('.notes_slider').slick({
        // autoplay: true,
        slidesToShow: 4,
        dots: false,
        infinite: true
    });
    $('.viewed_product_slider').slick({
        // autoplay: true,
        slidesToShow: 4,
        dots: false,
        infinite: true
    });
}
//# sourceMappingURL=js.js.map
