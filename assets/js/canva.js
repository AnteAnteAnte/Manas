 
$(document).ready(function(){
    $('img[usemap]').imageMapWrapper().resize();
});

$("#6").click(function() {
    var areaId = $(this).attr("id");
    $("img").attr("src", "./assets/images/incoming/kman/A1.png");
}); 

$(function () {
    $(window)
    .on("hashchange", function () {
        var tabContainers = $(".tabs > div"),
        hash = window.location.hash != "" ? window.location.hash : "#first";

        console.log(hash);

        tabContainers.hide();
        tabContainers.filter(hash).fadeIn();
        $(".tabNavigation li a").removeClass("selected");
        $('a[href="' + hash + '"]', ".tabNavigation").addClass("selected");
    })
    .trigger("hashchange")
});   

