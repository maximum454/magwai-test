@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')


$(function (){
    $('.js-phone-mask').inputmask("+7(999)999-9999");

    $('.js-menu').on('click', function (){
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__nav').toggleClass('active');
    })




    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });


    let form = $('.js-send-form');
    form.validate();
    $.validator.addClassRules({
        'js-phone-mask': {
            checkMaskPhone: true,
        }
    });
    form.submit(function(e){
        e.preventDefault();
        if (form.valid()) {
            alert('Форма отправлена');
            let inst = $('[data-remodal-id=modal]').remodal();
            inst.close();
        }
        return;
    });
})

