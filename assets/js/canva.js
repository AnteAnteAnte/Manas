$(document).ready(function(){
    $('img[usemap]').imageMapWrapper();
    $('img[usemap]').imageMapResize();
})

/*$("#6").click(function() {
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

      $(document).ready(function(){
      $('img[usemap]').imageMapWrapper().resize();
      $('img[usemap]').rwdImageMaps();
      });
          $(document).ready(function() {
              var activeId = $(".active").each(function(){
                  $("#content" + $(this).attr("id").replace("tab","")).show();
              });
              $(".tabs a").click(function() {
                  var $tabs =$(this).closest(".tabs");
                  $("#content" +$tabs.attr("data-lastContent")).hide();
                  $(this).closest(".tabs").find(".active").removeClass("active");
                  $(this).addClass("active")
                  var id = $(this).closest("li").attr("id").replace("tab","");
                  $tabs.attr("data-lastContent", id);
                  $("#content" + id).show();
              });
          });
*/
