function exit(){
    window.location.href = "simba.html"
}



function tryAgain(){
    var x = parseInt(prompt("How many tries would you like to guess the number from 1-100?"));
    var y = Math.floor((Math.random()*(100-1+1))+1);

  
    for (i = x; i > 0; i = i - 1) {
        var z= parseInt(prompt("you have "+ i + " tries "));

        if (z==y){
            window.location.href = "congrats.html";
        }
  
    }

    if (z==y) {

        window.location.href = "congrats.html";
        
    }
    else{
        window.location.href = "tryagain.html";

    }

}
