let crd = document.getElementById('crd-cont');

const addNote = () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    if (title == "") {
        localStorage.removeItem(title);
    }
    else {
        localStorage.setItem(title, desc);
        crd.innerHTML += `<div class="card">
        <h2 class="t-title">${title}
        <span><i onclick="handleTrash()" class="fa-solid fa-trash"></i></span></h2>
        <p>${desc}</p>
    </div>`
    }

    title = document.getElementById('title').value = '';
    desc = document.getElementById('desc').value = '';
}

const getNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let note = localStorage.key(i);
        let ihtml = `<div class="card">
        <h2 class="t-title">${note}
        <span><i onclick="handleTrash()" class="fa-solid fa-trash"></i></span></h2>
        <p>${localStorage.getItem(note)}</p>
    </div>`
        crd.innerHTML += ihtml;
    }
}
getNotes();

const handleTrash = () => {
    let Dnote = prompt("Enter Notes title You want to delete:");
    let deleteNote = localStorage.removeItem(Dnote);

    location.reload();
}
