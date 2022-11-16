function exit(){

    window.location.href = "simba.html";
    
    
    }
function begin() {
    var x = prompt("How many tries would you like to guess the number from 1-100?")
    var y = parseInt((Math.random()*(100-1+1))+1);
   
        document.getElementById("this").innerHTML = y;

    
    for (i = x; i != 0; i = i - 1) {
        var z = prompt("you have "+ i + " tries ");

        if (y==z) {

            window.location.href = "congrats.html";
            
        }
  
    }
    window.location.href = "tryagain.html";
   
}

