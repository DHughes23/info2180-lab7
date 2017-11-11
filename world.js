"use strict";

window.onload = starterCode;

function starterCode(){
    document.getElementById('lookup').onclick = callName;
}

function callName(){
    var item = new XMLHttpRequest();
    var caller = document.getElementById('country').value;
    var checker = document.getElementById("forAll").checked;
    
    if (checker===true){
        var phpUrl = 'https://info2180-lab7-dhughes23.c9users.io/world.php?all=true';
    }else if(caller){
        var phpUrl = 'https://info2180-lab7-dhughes23.c9users.io/world.php?country=' + caller;
    }else{
        document.getElementById("result").innerHTML='';
    }
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

function returnAll(){
    var caller = document.getElementById('country').value;
    var phpUrl = 'https://info2180-lab7-dhughes23.c9users.io/world.php?all=true';
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