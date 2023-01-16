window.reload()

// Creating a new Note
const addNote = () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    if (title == '') {
        const handleTrash = (itemIndex) => {
            let notesJsonArrayStr = localStorage.getItem('notesJson');
            notesJsonArray = JSON.parse(notesJsonArrayStr);

            notesJsonArray.splice(itemIndex, 1);
            localStorage.setItem('notesJson', JSON.stringify(notesJsonArray));
        }
    }
    else {
        console.log("Creating a new Note...");
        notesJsonArray.push([title, desc]);
        localStorage.setItem('notesJson', JSON.stringify(notesJsonArray))
    }

    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';    

    show();
}

// Showing Notes
const show = () => {
    if (localStorage.getItem('notesJson') == null) {
        let notesJsonArray = [];
        localStorage.setItem('notesJson', JSON.stringify(notesJsonArray));
    }
    else {
        let notesJsonArrayStr = localStorage.getItem('notesJson');
        notesJsonArray = JSON.parse(notesJsonArrayStr);
    }

    // Adding Notes in HTML
    let cardContainer = document.getElementById('cardContainer');
    let ihtml = "";
    notesJsonArray.forEach((element, index) => {
        ihtml += `<div class="card">
        <h2 class="t-title">${element[0]}
            <span><i onclick="handleTrash(${index})" class="fa-solid fa-trash"></i></span>
        </h2>
        <p>${element[1]}</p>
    </div>`
    });
    cardContainer.innerHTML = ihtml;
}
show();

// Adding Delete note functionality
const handleTrash = (itemIndex) => {
    let notesJsonArrayStr = localStorage.getItem('notesJson');
    notesJsonArray = JSON.parse(notesJsonArrayStr);

    notesJsonArray.splice(itemIndex, 1);
    localStorage.setItem('notesJson', JSON.stringify(notesJsonArray));

    show();
}
