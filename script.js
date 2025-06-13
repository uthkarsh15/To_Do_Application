const title = document.querySelector('input[name="title"]');
const description = document.querySelector('textarea');
const submitBtn = document.querySelector('#submit');
const notesList = document.querySelector('#displayNotes');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const currentTitle = title.value;
    const currentDescription = description.value;

    const newNote = document.createElement('div');
    newNote.className = "notes";

    const newTitle = document.createElement('h3');
    

    newTitle.className = 'title';
    newTitle.innerText = currentTitle;

    const newdescr = document.createElement('p');

    newdescr.className = 'description';
    newdescr.innerText = currentDescription;

    newNote.appendChild(newTitle);
    newNote.append(newdescr);

    notesList.append(newNote);

    newNote.addEventListener('click', () => {
        newNote.remove();
    })
});