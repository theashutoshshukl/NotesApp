// Creating a new Note
const addNote = () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    if (title == '') {
        const handleTrash = (itemIndex) => {
            let itemJsonArrayStr = localStorage.getItem('itemJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);

            itemJsonArray.splice(itemIndex, 1);
            localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        }
    }
    else {
        console.log("Creating a new Note...");
        itemJsonArray.push([title, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }

    document.getElementById('title').value = '';    
    document.getElementById('desc').value = '';    

    show();
}

// Showing Notes
const show = () => {
    if (localStorage.getItem('itemJson') == null) {
        let itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else {
        let itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // Adding Notes in HTML
    let cardContainer = document.getElementById('cardContainer');
    let ihtml = "";
    itemJsonArray.forEach((element, index) => {
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
    let itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));

    show();
}
