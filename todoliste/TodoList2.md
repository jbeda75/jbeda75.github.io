ToDoList v2

Bien ! Maintenant que le concept de base est posé, ajoutons quelques modifications !

* Créer le test conditionnel qui permet d'empêcher un utilisateur de créer un item vide.
(SI le texte de mon input n'est pas vide, alors insérer dans mon tableau et créer élément. Sinon rien. Ne rien faire. vraiment rien.)

Repassons côté html

* Créer un bouton supprimer dans notre "div modèle"

puis en js

* Créer la fonction qui permet, au clic de l'utilisateur sur le bouton correspondant, de supprimer l'élément du html et de notre tableau correspondant.

* chercher la fonction qui permet de supprimer un élément dans un tableau (plusieurs réponses possibles). ATTENTION: elle doit pouvoir supprimer n'importe quel élément

* s'assurer que nos boutons supprimer ont une classe, par exemple "btn-supprimer"

* écrire la QUERY qui permet de récupérer TOUS nos boutons supprimer dans un tableau

* POUR CHAQUE élément de cette liste de boutons, ajouter un écouteur d'évènements qui va déclencher une fonction deleteTodoItem, et lui passer un paramètre que l'on appellera event

* créer une FONCTION deleteTodoItem, qui prend en paramètre un event, et va:
- chercher sa CIBLE dans le tableau(indices: indexOf(), event.target)
- la supprimer du tableau
- RETIRER notre CIBLE du document HTML
