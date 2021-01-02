$("#icon-hum").click(function() {
    $("#nav-res-head").css("display", "block");
    // alert("ok");
    // $(".humberger-icon").css("display", "none");
    // $(".header-logo").css("width", "100%");
    // $(".header-logo").css("justify-content", "flex-end");
    //              bottom code for full height
    // var height = $("header").css("height");
    // $("#nav-res-head").css("height", height);
    $("body").append("<div class='back-container'></div>");
    $(".back-container").click(function() {
        $("#nav-res-head").css("display", "none");
        $(this).remove();
    })
});