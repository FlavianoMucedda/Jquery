$(document).keydown(function(e) {
    switch (e.which) {
        case 37: //left arrow key
            $("carre").css('left', $("carre").offset().left - 10);
            break;
        case 38: //up arrow key
            $("carre").css('top', $("carre").offset().top + 10);
            break;
        case 39: //right arrow key
            $("carre").css('left', $("carre").offset().left + 10);
            break;
        case 40: //bottom arrow key
            $("carre").css('top', $("carre").offset().top + 10);
            break;
    }
});