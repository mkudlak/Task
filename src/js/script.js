jQuery(document).ready(function (jQuery) {

    $('.panel-title').click(function () {
        $('.panel-title').removeClass('active');
        $(this).addClass('active');
        $('.panel-collapse').removeClass('show');
        $(this).find('.panel-collapse').addClass('show');
    });
});