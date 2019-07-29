$(document).ready(function () {
    $(".up").click(function () {
        $(".box").animate({ top: "-=50px" }, function () {
            $(this).text("up");
        });
    });
    $(".right").click(function () {
        $(".box").animate({ left: "+=50px" }, function () {
            $(this).text("right");
        });
    });
    $(".down").click(function () {
        $(".box").animate({ top: "+=50px" }, function () {
            $(this).text("down");
        });
    });
    $(".left").click(function () {
        $(".box").animate({ left: "-=50px" }, function () {
            $(this).text("left");
        });
    });
});