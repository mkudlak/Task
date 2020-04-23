jQuery(document).ready(function (jQuery) {

    $('.panel-title').click(function () {
        $('.panel-title').removeClass('active');
        $(this).addClass('active');
        $('.panel-collapse').removeClass('show');
        $(this).find('.panel-collapse').addClass('show');

    });

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fas").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up");
    }).on('hidden.bs.collapse', function () {
        $(this).find(".fas").removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down");
    });


});