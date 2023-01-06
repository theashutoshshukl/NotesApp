let crd = document.getElementById('crd-cont');

const addNote = () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    if (title == "") {
        localStorage.removeItem(title);
    }
    else {
        localStorage.setItem(title, desc);
    }

    crd.innerHTML += `<div class="card">
    <h2 class="t-title">${title}</h2>
    <p>${desc}</p>
</div>`


    title = document.getElementById('title').value = '';
    desc = document.getElementById('desc').value = '';
}

const getNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let note = localStorage.key(i);
        let ihtml = `<div class="card">
        <h2 class="t-title">${note}</h2>
        <p>${localStorage.getItem(note)}</p>
    </div>`
        crd.innerHTML += ihtml;
    }
}
getNotes();

const handleTrash = () => {
    let current = document.querySelector('.t-title');
    let next = current.innerHTML;
    localStorage.removeItem(next);

    location.reload();
}