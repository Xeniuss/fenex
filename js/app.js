$(document).foundation();
$('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
    frictionY: .1
});

$('.scroller').click(function () {
    var scrollId = '#' + $(this).attr('data-scrollto');
    $("html, body").animate({ scrollTop: $(scrollId).offset().top }, 1000);

})