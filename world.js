"use strict";

window.onload = starterCode;

function starterCode(){
    document.getElementById('lookup').onclick = callName;
}

function callName(){
    var caller = document.getElementById('country').value;
    var phpUrl = 'https://info2180-lab7-dhughes23.c9users.io/world.php?country=' + caller;
    var item = new XMLHttpRequest();
    
    item.onreadystatechange = function(){
                if (item.readyState === XMLHttpRequest.DONE) {
                    if (item.status === 200){
                        var respond = item.responseText;
                        document.getElementById("result").innerHTML=respond;
                    }
                }
            }
            item.open('GET', phpUrl);
            item.send();
}