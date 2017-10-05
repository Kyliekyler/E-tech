$('#goTop').on('click', function(e){
    $("html, body").animate({scrollTop: $("#top").offset().top}, 1500);
});