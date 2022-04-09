var c=0;
function redirect()
    {
        alert("new coffe shop is added sucsussfuly");
       
        if(document.getElementById('choise').checked){
        setTimeout(function() {window.location = "indexadd.html" });}
    

    else{
        
    setTimeout(function() {window.location = "index2.html" });}
}