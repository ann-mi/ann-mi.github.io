if(window.matchMedia('(max-width: 1024px)').matches)
{
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
    $('.catalog_link').click(function () {
        $('.header_menu_list').slideToggle();
        $(this).toggleClass('open');
    });
    $('.product__photo_slider').sliderPro({
        width: 500,
        height: 330,
        orientation: 'horizontal',
        loop: true,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailWidth: 80,
        thumbnailHeight: 70,
        thumbnailPointer: true,
        thumbnailArrows: true,
        fadeThumbnailArrows: false,
        autoplay: false,
        breakpoints: {
            769: {
                buttons: true
            }
        }
    });
}
$('.product__photo_slider').sliderPro({
    width: 500,
    height: 330,
    orientation: 'horizontal',
    loop: true,
    buttons: false,
    thumbnailsPosition: 'left',
    thumbnailWidth: 80,
    thumbnailHeight: 70,
    thumbnailPointer: true,
    thumbnailArrows: true,
    fadeThumbnailArrows: false,
    autoplay: false,
    breakpoints: {
        769: {
            buttons: true
        }
    }
});
$('.delivery_radiobox').click(function () {
    $('.delivery_radiobox').removeClass('active');
    $(this).find('input').prop("checked", true);
    $(this).addClass('active');
});
$(document).ready(function () {
    $('.history_plate .tab-1').click(function () {
        $('.content').removeClass('open');
        $('.tab-2').removeClass('active');
        $('.tab-3').removeClass('active');
        $('.tab-content-1').addClass('open');
        $(this).addClass('active');
    });
    $('.history_plate .tab-2').click(function () {
        $('.content').removeClass('open');
        $('.tab-1').removeClass('active');
        $('.tab-3').removeClass('active');
        $('.tab-content-2').addClass('open');
        $(this).addClass('active');
    });
    $('.history_plate .tab-3').click(function () {
        $('.content').removeClass('open');
        $('.tab-2').removeClass('active');
        $('.tab-1').removeClass('active');
        $('.tab-content-3').addClass('open');
        $(this).addClass('active');
    });
    $('.cabinet_title').click(function () {
        $(this).parent().find('.cabinet_plate').slideToggle();
        $(this).toggleClass('active');
    });
    $('.accessories_title').click(function () {
        $(this).parent().find('.accessories_box').slideToggle();
        $(this).toggleClass('active');
        $('.accessories_box_title').click(function () {
            $(this).parents('.accessories_box').slideToggle();
        });
    });
    $('.accessories_box_sidebar li').click(function () {
        $(this).find('.accessories_box_list').toggleClass('open');
        $(this).toggleClass('active');
    });
    $('.service_title').click(function () {
        $(this).parent().toggleClass('open').find('.service_box').slideToggle();
        $(this).toggleClass('active');
    });


    $(".product-info").on("click", ".product-info-tab", function() {

        var tabs = $(".product-info-tab"),
            cont = $(".product-info-tab-cont");

        // РЈРґР°Р»СЏРµРј РєР»Р°СЃСЃС‹ active
        tabs.removeClass("product-info-tab-active");
        cont.removeClass("product-info-content-active");
        // Р”РѕР±Р°РІР»СЏРµРј РєР»Р°СЃСЃС‹ active
        $(this).addClass("product-info-tab-active");
        cont.eq($(this).index()).addClass("product-info-content-active");

        return false;
    });
    $(".product-info-admin").on("click", ".product-info-admin-tab", function() {

        var tabs = $(".product-info-admin-tab"),
            cont = $(".product-info-admin-tab-cont");

        // РЈРґР°Р»СЏРµРј РєР»Р°СЃСЃС‹ active
        tabs.removeClass("product-info-admin-tab-active");
        cont.removeClass("product-info-admin-content-active");
        // Р”РѕР±Р°РІР»СЏРµРј РєР»Р°СЃСЃС‹ active
        $(this).addClass("product-info-admin-tab-active");
        cont.eq($(this).index()).addClass("product-info-admin-content-active");

        return false;
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
    $('.listing_filter_mob_main-box .listing_filter_mob_box_title').click(function () {
        $(this).parent().find('.listing_filter_mob_box_setting_main-list').slideToggle();
        $(this).toggleClass('open');
    });
    $('.listing_filter_mob_box .listing_filter_mob_box_title').click(function () {
        $(this).parent().find('.listing_filter_mob_box_setting_list').slideToggle();
        $(this).toggleClass('active');
    });
    $('.listing_filter_mob_title').click(function () {
        $(this).parent().find('.listing_filter_mob_plate').slideToggle();
        $(this).toggleClass('active');
    });
    $('.listing_filter_mob_plate_title').click(function () {
        $(this).parent().slideToggle();
    });
    $('.view-grid').click(function () {
        $('.listing_list').addClass('list_grid');
        $('.listing_list .main_popular_item').addClass('grid_item');
        $(this).addClass('active');
        $('.view-list').removeClass('active');
    });
    $('.view-list').click(function () {
        $('.listing_list').removeClass('list_grid');
        $('.listing_list .main_popular_item').removeClass('grid_item');
        $(this).addClass('active');
        $('.view-grid').removeClass('active');
    });

    $('.status_box .btn_more').click(function () {
        $(this).parents('.status_item').find('.status_more').slideToggle();
        $(this).toggleClass('active');
    });
    $('.cart-promocode_title').click(function () {
        $(this).parent().find('.cart-promocode_box').slideToggle();
        $(this).toggleClass('active');
    });
    $('.btn__fast-order').click(function () {
        $('.fast_buy').slideToggle();
        $('.fast_buy .close').click(function () {
            $('.fast_buy').slideToggle();
        });
    });
    $('.btn__cheaper').click(function () {
        $('.cheap_buy').slideToggle();
        $('.cheap_buy .close').click(function (){
            $('.cheap_buy').slideToggle();
        });
    });
    // $('.delivery_radiobox .delivery_radio-label').click(function () {
    //     $('.delivery_radiobox').removeClass('active');
    //     $(this).parent().addClass('active');
    //     $(this).parent().find('input').prop("checked", true);
    // });
    $('.cart-product_counter .more').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.cart-product_counter .less').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.cart-product_cancel').click(function () {
        $(this).parents('.cart-product_item').remove();
    });
    $('.check_filter').click(function () {
        $(this).remove();
    });
    $('.listing_filter_mob_box_setting_list .btn_reset').click(function () {
        $(this).parent().find('.check_filter').remove();
    });
    $('.listing_filter_mob_box_title').click(function () {
        $(this).parent().find('.listing_filter_mob_box_setting_list').slideToggle();
    });
    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost").val(jQuery("#slider").slider("values",0));
            $("input#maxCost").val(jQuery("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val(jQuery("#slider").slider("values",0));
            $("input#maxCost").val(jQuery("#slider").slider("values",1));
        }
    });
    $("input#minCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);
    });
    $("input#maxCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });
    // Выбор даты или времени
    $(".date__input").flatpickr({
        dateFormat: "d.m.Y",
        locale: 'ru',
        disableMobile: true
    });
});

if(window.matchMedia('(min-width: 768px)').matches)
{
    $('.check_filter').click(function () {
        $(this).remove();
    });
    $('.listing_filter_mob_box_title').click(function () {
        $(this).parent().find('.listing_filter_mob_box_setting_list').slideToggle();
    });
    $('.listing_filter_mob_box_setting_list .btn_reset').click(function () {
        $(this).parent().find('.check_filter').remove();
    });
    $('.cart-product_counter .more').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.cart-product_counter .less').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.btn__fast-order').click(function () {
        $('.fast_buy').slideToggle();
        $('.fast_buy  .close').click(function () {
            $('.fast_buy').slideToggle();
        });
    });
    $('.btn__cheaper').click(function () {
        $('.cheap_buy').slideToggle();
        $('.cheap_buy .close').click(function (){
            $('.cheap_buy').slideToggle();
        });
    });
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
    $('.view-grid').click(function () {
        $('.listing_list').addClass('list_grid');
        $('.listing_list .main_popular_item').addClass('grid_item');
        $(this).addClass('active');
        $('.view-list').removeClass('active');
    });
    $('.view-list').click(function () {
        $('.listing_list').removeClass('list_grid');
        $('.listing_list .main_popular_item').removeClass('grid_item');
        $(this).addClass('active');
        $('.view-grid').removeClass('active');
    });
    $('.status_box .btn_more').click(function () {
        $(this).parents('.status_item').find('.status_more').slideToggle();
        $(this).toggleClass('active');
    });
    // $('.cabinet_title').click(function () {
    //     $(this).parent().find('.cabinet_plate').slideToggle();
    //     $(this).toggleClass('active');
    // });
    // $('.accessories_box_sidebar li').click(function () {
    //     $(this).find('.accessories_box_list').toggleClass('open');
    //     $(this).toggleClass('active');
    // });
    // $('.accessories_title').click(function () {
    //     $(this).parent().find('.accessories_box').slideToggle();
    //     $(this).toggleClass('active');
    //     $('.accessories_box_title').click(function () {
    //         $(this).parents('.accessories_box').slideToggle();
    //     })
    //
    // });
    // $('.service_title').click(function () {
    //     $(this).parent().toggleClass('open').find('.service_box').slideToggle();
    //     $(this).toggleClass('active');
    // });
    $('.delivery_radiobox .delivery_radio-label').click(function () {
        $('.delivery_radiobox').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.cart-product_cancel').click(function () {
        $(this).parents('.cart-product_item').remove();
    });
    var objToStick = $("#header"); //Получаем нужный объект
    var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

        if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
            $(objToStick).addClass("topWindow");
        } else {
            $(objToStick).removeClass("topWindow");
        }
    });
    $('.nav_more').hide();
    $('.nav_link_more').click(function () {
        $('.nav_more').slideToggle();
        $(this).toggleClass('active');
    });
    $('.header_menu_line_nav .header_menu_list > li').hover(function () {
        $('.header_menu_plate').width(520)
    });
    $('.header_menu_line_nav .header_menu_list > li > ul > li').hover(function () {
        $('.header_menu_plate').width(780)
    });
    $('.fast_filter_item').click(function () {
        $('.fast_filter_item').removeClass('active');
        $(this).toggleClass('active');
    });
    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost").val(jQuery("#slider").slider("values",0));
            $("input#maxCost").val(jQuery("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val(jQuery("#slider").slider("values",0));
            $("input#maxCost").val(jQuery("#slider").slider("values",1));
        }
    });
    $('.product__photo_slider').sliderPro({
        width: 500,
        height: 330,
        orientation: 'horizontal',
        loop: true,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailWidth: 80,
        thumbnailHeight: 70,
        thumbnailPointer: true,
        thumbnailArrows: true,
        fadeThumbnailArrows: false,
        autoplay: false,
        breakpoints: {
            769: {
                buttons: true
            }
        }
    });
    $("input#minCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);
    });
    $("input#maxCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });
}

window.addEventListener("load",function(){
    var sticky = document.querySelector('.fixed-block');
    var footer = document.querySelector('.viewed_product');
    var origOffsetY = sticky.offsetTop;
    var footerOffsetY = footer.offsetTop;
    document.addEventListener('scroll', function(e){
        if(window.scrollY >= origOffsetY+sticky.parentNode.offsetTop) {
            sticky.classList.add('stick-top');
        } else {
            sticky.classList.remove('stick-top');
        }
        if(window.scrollY+sticky.offsetHeight+0 >= footerOffsetY) {
            sticky.classList.add('stick-bottom');
        } else {
            sticky.classList.remove('stick-bottom');
        }
    });
});
$(".date__input").flatpickr({
    dateFormat: "d.m.Y",
    locale: 'ru',
    disableMobile: true
});
//# sourceMappingURL=js.js.map
