

function checkCreds() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var badgenumber = document.getElementById("numPart").value;
    var eventInfo = username + " " + password;
    if (eventInfo.length >20 || eventInfo.length <4) {
            document.getElementById("loginStatus").innerHTML = "EventName is invalid number of characters!";
    }
    else if (badgenumber > 20 || badgenumber < 2) {
        document.getElementById("loginStatus").innerHTML = "Badge Number Invalid!";
    } 
    else {
        alert("access Granted, Welcome" + username + "!");
        location.replace("Mission Control simple.html");
    }
}