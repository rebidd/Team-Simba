function exit() {
    window.location.href = "simba.html";
}
window.onload = function(){
    var op=document.getElementById("op");
    var myName;
    myName = prompt("You Win!! Please enter your name", "");
    
    
    op.innerHTML = myName;
}
