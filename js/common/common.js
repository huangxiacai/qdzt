$(function() {
    $(".zt_home_nav li").hover(function() {
        $(this).children("a").addClass("zt_show_nav_status");
    }, function() {
        $(this).children("a").removeClass("zt_show_nav_status");
    });
    $(".zt_navproduct_modal,#zt_product_nav").hover(function() {
        $("#zt_product_nav").show();
    }, function() {
        $("#zt_product_nav").hide();
    });
})