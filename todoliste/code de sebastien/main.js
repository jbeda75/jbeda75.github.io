var texte= document.getElementById("input");
var tableau = [];


function recuperer(){
    tableau.push(texte.value);
    console.log(tableau);
}
var valid = document.querySelector("button");
valid.addEventListener("click", recuperer);

