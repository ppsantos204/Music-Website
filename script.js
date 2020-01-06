$(".button1").click(function() {
    $("h1").fadeIn();
    $(".button1").fadeOut();
    $(".tupac").fadeIn();
    $(".aBoogie").fadeIn();
});


$(".tupac").click(function() {
    $(".tupac").fadeOut();
    $(".aBoogie").fadeOut();
    $(".oldSchool").fadeIn();
    $(".oldSchool").css("display","flex");
    $("h1").fadeOut();
});

$(".tupac2").click(function() {
    $(".oldSchool").fadeOut();
    $(".thugsMansion").fadeIn();
});


$(".eminem").click(function() {
    $(".oldSchool").fadeOut();
    $(".TIC").fadeIn();
});


$(".wuTang").click(function() {
    $(".oldSchool").fadeOut();
    $(".cream").fadeIn();
});

$(".aBoogie").click(function() {
    $(".bothSchool").fadeOut();
    $(".newSchool").fadeIn();
});

$(".aBoogie2").click(function() {
    $(".newSchool").fadeOut();
    $(".dtb").fadeIn();
});

$(".uzi").click(function() {
    $(".newSchool").fadeOut();
    $(".ml").fadeIn();
});

$(".baby").click(function() {
    $(".newSchool").fadeOut();
    $(".suge").fadeIn();
});
