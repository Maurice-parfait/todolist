ScrollReveal().reveal('.debut', {
    delay: 1000,
    duration: 600,
    origin: 'top',
    distance: '50px',
    // scale: 2,
    interval: 600,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.simple', {
    delay: 3000,
    duration: 600, 
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.btn', {
    delay: 4000,
    duration: 600, 
    origin: 'top',
    distance: '50px',
    scale: 5,
    interval: 600,
    easing: 'ease-in-out'
});









// la deuxieme page 

let liste = document.getElementById("tache");
const btnajt = document.getElementById("btnajt");

btnajt.addEventListener("click", function () {
    let ajouter = document.getElementById("ajout_tache");
    let tasktext = ajouter.value;

    if (tasktext === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = tasktext;

    li.classList.add('w-full', 'mb-2', 'p-2', 'rounded-xl', 'shadow-md',); // Ajouter les classes Tailwind

    let modifierbouton = document.createElement("button");
    modifierbouton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
    
    modifierbouton.classList.add('text-slate-50', 'px-2', 'py-1', 'border', 'ml-8', 'rounded-full', 'bg-green-600', 'text-2xl');

    modifierbouton.onclick = function() {
        modifierlist(li); 
    }

    let supprimerbouton = document.createElement("button");
    supprimerbouton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

    supprimerbouton.classList.add('text-slate-50', 'px-2', 'py-1', 'border', 'ml-10', 'rounded-full', 'bg-red-600', 'text-2xl'); 
    
    supprimerbouton.onclick = function() {
        supprimerlist(li);
    }

    li.appendChild(modifierbouton);
    li.appendChild(supprimerbouton);

    liste.appendChild(li);
    ajouter.value = "";
});

function modifierlist(task) {
    let tasktextElement = task.firstChild; 
    let tasktext = tasktextElement.textContent;

    let newtasktext = prompt("Modifier la tache:", tasktext);

    if (newtasktext === null || newtasktext === "") {
        return;
    }

    tasktextElement.textContent = newtasktext;
}

function supprimerlist(task) {
    liste.removeChild(task); 
}

