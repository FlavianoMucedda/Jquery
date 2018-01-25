let numToFind = Math.round(Math.random() * 100);
let essai = 0;
let indice = "";

$(".essaiNum").click(function() {
    let entreeNum = Number($(".entreeNum").val());
    if (entreeNum == "") {
        indice = "Set a number between 1 & 100 in the input";
    } else if (entreeNum < 0 || entreeNum > 100) {
        indice = "I SAID BETWEEN 1 & 100 !";
        essai++;
    } else if (entreeNum < numToFind) {
        indice = "Too Small baby!";
        essai++;
    } else if (entreeNum > numToFind) {
        indice = "Too high !";
        essai++;
    } else {
        indice = "Congrats! you found the right Number in " + essai + " Guesses!";
    }
    $(".answer").html(indice);
})