function check () {
    var yourName = document.getElementById("your name").value;
    var crushName = document.getElementById("crush name").value;
    if (yourName=="") {
        alert("pls enter your name");
    }
    
    else if (yourName.length<=2) {
        alert("your name is too short");
    } else if (Number(yourName)) {
        alert("numbers are not allowed!!");
    } 
    else if (crushName=="") {
        alert("pls enter your love name");
    }
    
    else if (crushName.length<=2) {
        alert("love name is too short");
    } else if (Number(crushName)) {
        alert("numbers are not allowed!!");
    } 

    else{
    var lovedata = Math.random()*100;
    lovedata = Math.floor(lovedata);
    }
    var resultText = yourName + "❤️" + crushName + "=" + lovedata + "% match ";
    document.getElementById("final").innerHTML = lovedata + "%";

    
    if (lovedata <= 100 && lovedata >= 80) {
        alert `Your Relationship was strong`;
    }

    else if (lovedata < 80 && lovedata >= 50) {
        alert`Your Relationship was Good `;
    }
    else if (lovedata < 50 && lovedata >= 30) {
        alert ` Your Relationship was average`;
    }
    else {
        alert `Your Relationship was normal`;
    }
    
}
