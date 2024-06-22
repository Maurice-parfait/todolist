ScrollReveal().reveal('.debut',{
    delay : 1000,
    durection : 600,
    origin : 'top',
    distance : '50px',
    // scale : 2,
    interval: 600,
    easing: 'ease-in-out' 
})

ScrollReveal().reveal('.simple',{
    delay : 3000,
    durection : 600,
    origin : 'top',
    distance : '50px',
    easing: 'ease-in-out' 
})

ScrollReveal().reveal('.btn',{
    delay : 4000,
    durection : 600,
    origin : 'top',
    distance : '50px',
    scale : 5,
    interval: 600,
    easing: 'ease-in-out' 
})










// la deuxieme page 


let liste = document.getElementById("tache");

function ajouterunetache() {
    let ajouter = document.getElementById("ajout_tache");
    let tasktext = ajouter.value; 

    if (tasktext === "") {
        return;
    }

    let li = document.createElement(li);
    li.innerHTML = tasktext;

    let modifierbouton = document.createElement("button");

    modifierbouton.innerHTML = "<ion-icon name="pencil-outline"></ion-icon>"

    modifierbouton.onclick = function() {
        modifierlist(li)
    }

    // pour la suppression 

    let supprimerbouton = document.createElement("button");

    supprimerbouton.innerHTML = "<ion-icon name="trash-outline"></ion-icon>"

    supprimerbouton.onclick = function() {
        supprimerlist(li)
    }


    li.appendChild(modifierbouton);
    li.appendChild(supprimerbouton);


    liste.appendChild(li);

    ajouter.value = "";


}


function modifierlist(task) {
    let tasktextElement = task.firstChid;
    let tasktext = tasktextElement.textContent;


    let newtasktext = prompt("Modifier la tache:", tasktext)

    if (newtasktext === null || newtasktext === "") {
        return;
    }

    tasktextElement.textContent = newtasktext;

}



