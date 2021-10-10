
function simpleCount() {
    var currTime = 10;
    /*  The new code below, replaced the multiple lines of number remaining - 1. The new code simplifies
    over 40 seperate lines to about 10 lines. */
    for (var i = 1; i < 12; i++) {

    setTimeout(function () {
        document.getElementById("countdownDisplay").innerHTML = " " + currTime;
        currTime = currTime - 1;
    }, 1000 * i);

    mySound = new sound("t-minus launch.mp3");
    mySound.play();
}
}   