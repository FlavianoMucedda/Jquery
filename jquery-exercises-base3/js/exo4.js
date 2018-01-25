$("#btn1").click(function(e) {
    let maxHeight = 100;
    e = $("#rect").height();
    if (e <= maxHeight) {
        $("#rect").css("height", function(e) {
            e = $("#rect").height();
            return e + 10;
        })
    } else {
        $("#rect").css("height", function(e) {
            e = $("#rect").height();
            return e = 10;
        })
    }
});

$("#btn2").click(function() {
    $("#rect").css("background-color", "#00FF00");
});

$("#btn3").click(function() {
    $("#rect").css("background-color", "aquamarine");
});

$("#btn4").click(function() {
    $("#rect").hide();
});

$("#btn5").click(function() {
    $("#rect").show();
});