$(document).ready(function () {
    $("#ball").hide();
});

var bingo = ['B', 'I', 'N', 'G', 'O'];
var happyness = [];

function card() {
    var newLetter = bingo[Math.floor(Math.random() * bingo.length)]
    var number = Math.floor(Math.random() * 20) + 1;
    var joined = newLetter + "-" + number;

    if (happyness.includes(joined)) {
        card();
    } else {
        happyness.push(joined);
        //outputting to the screen area
        $("h3").text(joined);
        $("ul").append("<li>" + joined + ", " + "</li>")
    }

    console.log(happyness);
}

$("#flip").click(function () {
    card();
    $("#ball").show();
});

$("#check").click(function () {
    var ball = $("input").val()
    if (happyness.includes(ball)) {
        alert(ball + " has already been called")
    } else {
        alert(ball + " was not called")
    }
});
