



function popup(item){
  var thisitem = item.name;
    var y = document.querySelectorAll('[id^="i"]');
    for (i = 0; i < y.length; i++) {
  
        y[i].style.display = "none";
       
      } 
      document.getElementById(thisitem).style.display = "block";
    

}

function search(){
  var input = document.getElementById("search");
  var filter = input.value.toLowerCase();
 
    var nodes = document.querySelectorAll('[id^="i"]:not(#iproducts):not(#icontact)');
    var y = document.querySelectorAll('[id^="i"]');
    for (i = 0; i < y.length; i++) {
  
        y[i].style.display = "none";
       
      } 
    for (i = 0; i < nodes.length; i++) {
  
      if (nodes[i].innerHTML.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
        break; 
      } else {
        nodes[i].style.display = "none";
      }
       
      } 
   
}

function products(){
  var y = document.querySelectorAll('[id^="sub"]');
  for (i = 0; i < y.length; i++) {

      y[i].style.display = "none";
     
    } 
    if (document.getElementById("iproducts").style.display == "block"){
      document.getElementById("iproducts").style.display = "none"
    }else{
      document.getElementById("iproducts").style.display = "block"
    }

}
function submenu(item){
    var thisitem = item.name;
    var y = document.querySelectorAll('[id^="sub"]');
    for (i = 0; i < y.length; i++) {
  
        y[i].style.display = "none";
       
      } 
    document.getElementById(thisitem).style.display = "block";

}
function nomenu(){
  
  document.getElementById("iproducts").style.display = "none";
   
  }


