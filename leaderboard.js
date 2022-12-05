function exit(){

    window.location.href = "simba.html";
    
    }
function getName() {
    var op = document.getElementById("op");
    op.innerHTML = sessionStorage.getItem("name1");

}
