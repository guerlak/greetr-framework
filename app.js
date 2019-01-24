
function login(){
   let firstname = document.getElementById('firstname').value;
   let lastname = document.getElementById('lastname').value

   var g = G$(firstname, lastname)

   g.greet(true);
   g.setOnHtml("#greet");

}