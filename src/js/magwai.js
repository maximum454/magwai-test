@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')


$(function (){
    $('.js-phone-mask').mask('+7 (000) 000-00-00');

    $('.js-menu').on('click', function (){
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__nav').toggleClass('active');
    })
})

