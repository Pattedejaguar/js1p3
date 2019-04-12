// on crée la fonction
function addBorders(){
  // on crée la variable
  var image=document.getElementById('image1');
  //et on personnalise/paramètre la variable
  image.style.border= '10px solid green';
}
function removeBorders(){
  var image=document.getElementById('image1');
  image.style.border= 'none';
}
// la fonction addBorders s'active lorsque l'on utilise le mouseover sur la cible
document.getElementById('image1').addEventListener('mouseover',addBorders);
document.getElementById('image1').addEventListener('mouseout',removeBorders);
