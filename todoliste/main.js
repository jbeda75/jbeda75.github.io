var todoItems = ["shopping","repos","manger"];
function initialize(params) {
    for (let i = 0; i<todoItems.length; i++) {
        // Création de la div "finale"
        var newTodoItem = document.createElement("div");

        // Creation de nouveaux éléments HTML
        var check = document.createElement("input");
        check.type = "checkbox";
        var texte = document.createElement("p");
        texte.innerHTML =todoItems[i];
        var todoActions = document.createElement("div");
        var mod = document.createElement("button");
        var suppr = document.createElement("button");
        mod.innerHTML="modifier";
        suppr.innerHTML="supprimer";

        // Attribution de styles
        newTodoItem.className = "todoItem";
        todoActions.className = "todoActions";
        mod.className = "btn-modifier";
        suppr.className = "btn-supprimer";

        // Ajout des éléments au DOM
        var parent = document.getElementById("todo");

        todoActions.appendChild(mod);
        todoActions.appendChild(suppr);
        
        newTodoItem.appendChild(check);
        newTodoItem.appendChild(texte);
        newTodoItem.appendChild(todoActions);

        parent.appendChild(newTodoItem);
        
    }
}


initialize()
function createTodoItem(){
    var input = document.querySelector(".todoForm input");
    if (input.value!="") {
        // récupérer input
    
        todoItems.push(input.value);

        // Création de la div "finale"
        var newTodoItem = document.createElement("div");

        // Creation de nouveaux éléments HTML
        var check = document.createElement("input");
        check.type = "checkbox";
        var texte = document.createElement("p");
        texte.innerHTML = input.value;
        var todoActions = document.createElement("div");
        var mod = document.createElement("button");
        var suppr = document.createElement("button");
        mod.innerHTML="modifier";
        suppr.innerHTML="supprimer";

        // Attribution de styles
        newTodoItem.className = "todoItem";
        todoActions.className = "todoActions";
        mod.className = "btn-modifier";
        suppr.className = "btn-supprimer";

        // Ajout des éléments au DOM
        var parent = document.getElementById("todo");

        todoActions.appendChild(mod);
        todoActions.appendChild(suppr);
        
        newTodoItem.appendChild(check);
        newTodoItem.appendChild(texte);
        newTodoItem.appendChild(todoActions);

        parent.appendChild(newTodoItem);

   }
    
}

var bouton = document.querySelector(".btnValider");
bouton.addEventListener("click", createTodoItem);