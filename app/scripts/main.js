console.log('The Iron Yard Rocks');

$( "#Button1" ).click(function() {
        $('#Button1').toggleClass("click");
        $("#Button2").removeClass("click");
        $("#Button3").removeClass("click");
});

$( "#Button2" ).click(function() {
        $("#Button2").toggleClass("click");
        $("#Button1").removeClass("click");
        $("#Button3").removeClass("click");
});

$( "#Button3" ).click(function() {
        $("#Button3").toggleClass("click");
        $("#Button1").removeClass("click");
        $("#Button2").removeClass("click");
});
