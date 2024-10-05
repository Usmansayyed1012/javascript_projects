
var c = document.getElementById("counter");

function increment(){
    var value = parseInt(c.value);
    value+=1;
    c.value=value;
}

function decrement() {
    var value = parseInt(c.value);
    value-=1;
    c.value=value;
}




