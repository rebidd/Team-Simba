function exit(){

    window.location.href = "simba.html";
    
    
    }
function begin() {
    var x = prompt("How many tries would you like to guess the number from 1-100?");
    var y = Math.floor(Math.random()*100)+1;


  
    for (i = x; i > 0; i = i - 1) {
        var z = prompt("you have "+ i + " attempts left ")

        if (z==y) {

            window.location.href = "congrats.html";
            break;
            
            
        }

        else {
            window.location.href = "tryagain.html";
        }
    

    }
       
       
}


