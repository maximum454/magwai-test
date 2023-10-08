@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')


$(function () {
    $('.js-phone-mask').inputmask("+7(999)999-9999");

    $('.js-menu').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__nav').toggleClass('active');
    })

    jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });


    let form = $('.js-send-form');
    form.validate();
    $.validator.addClassRules({
        'js-phone-mask': {
            checkMaskPhone: true,
        }
    });
    form.submit(function (e) {
        e.preventDefault();
        if (form.valid()) {
            alert('Форма отправлена');
            let inst = $('[data-remodal-id=modal]').remodal();
            inst.close();
        }
        return;
    });
})

const arr = []
function fetchItems(page=1){
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
        .then((response) => response.json())
        .then((json) => {
            arr.value = json
        });
}
fetchItems()

function temp(title, body){
    const template = `
                <article class="product-item">
                    <figure class="product-item__figure">
                        <img class="img-fluid" src="https://placehold.co/320x185" width="320" height="185"
                             alt="How to increase your productivity with a Music">
                    </figure>
                    <div class="product-item__content">
                        <div class="product-item__label">bridge</div>
                        <h4 class="product-item__name">${title}</h4>
                        <p class="product-item__text">${body}</p>
                        <div class="product-item__date">Posted by <b>Eugenia</b>, on July 24, 2019</div>
                        <a href="#" class="btn btn-primary">Continue reading</a>
                    </div>
                </article>`
    return template
}


const jsMore = document.querySelector('.js-more');
let count = 1;
jsMore.addEventListener('click', function (e) {
    e.preventDefault();
    count++

    if(count < 6){
        const cardsBody = document.querySelector('.cards__body');
        arr.value.forEach( (item, index) =>{
            console.log('temp', item.title);
            const fff = temp(item.title,item.body);
            cardsBody.insertAdjacentHTML('beforeend', fff);
        })
        fetchItems(count);
    }else{
        jsMore.remove();
    }
})

