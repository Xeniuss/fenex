$(document).foundation();
//
// $('#parallax').parallax({
//     invertX: true,
//     invertY: true,
//     scalarX: 10,
//     frictionY: .1
// });
function logomaker() {
    console.log(screen.width)
    if (screen.width < 769) {
        $('.header__logo img').attr('src', 'images/logomob.svg')
    }
    else {
        $('.header__logo img').attr('src', 'images/logo.svg')
    }
}
$(window).resize(function() {
    logomaker()
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    (scroll > 500) ? scrollfix = 500 : scrollfix = scroll;


    $('.ange').css('transform' , 'translateY( -' + scrollfix/5 + 'px)');
    $('.promo__design').css('transform' , 'translateY( -' + scrollfix/5.2 + 'px)');
    $('.promo__digital').css('transform' , 'translateY( -' + scrollfix/5.3 + 'px)');
    $('.promo__event').css('transform' , 'translateY( -' + scrollfix/5.4 + 'px)');
    $('.promo__production').css('transform' , 'translateY( -' + scrollfix/5.3 + 'px)');
    $('.promo__placement').css('transform' , 'translateY( -' + scrollfix/5.2 + 'px)');
});
$('.scroller').click(function () {
    var scrollId = '#' + $(this).attr('data-scrollto');
    $("html, body").animate({ scrollTop: $(scrollId).offset().top }, 1000);

})
// $('[type="tel"]').inputmask('+7 (999) 999-99-99', {'placeholder': '_'});
$(document).ready(function(){
    logomaker();
    $('#submit').click(function(){
        if($('#contactform input').val() == ''){
            $('.alert').css('display', 'block');
        }
    });
    $("#contactform").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "../phpmail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                $( '#contactform' ).each(function(){
                    this.reset();
                });
                $('.success').css('display', 'block');

            },
            error: function () {

            }
        });
    });
});