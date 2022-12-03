function exit() {
    window.location.href = "simba.html";
}
function leaderBoard() {
    window.location.href = "leaderboard.html";
    
}
function playAgain() {
    window.location.href = "play.html";
}
window.onload = function(){
    var op=document.getElementById("op");
    var myName;
    myName = prompt("You Win!! Please enter your name", "");
   
    
    op.innerHTML ="Challenger's name"+"<br>" +myName;
}
