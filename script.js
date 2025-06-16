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

    // title 
    const newTitle = document.createElement('h3');
    newTitle.className = 'title';
    newTitle.innerText = currentTitle;

    // description
    const newDescr = document.createElement('p');
    newDescr.className = 'description';
    newDescr.innerText = currentDescription;

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () => {
        newNote.remove();
    });

    // update button
    const updateBtn = document.createElement('button');
    updateBtn.className = 'update';
    updateBtn.innerText = 'Update';

    // update inputs
    const updateTitle = document.createElement('input');
    updateTitle.type = 'text';
    updateTitle.placeholder = 'Update Title';
    updateTitle.style.display = 'none';

    const updateDescription = document.createElement('textarea');
    updateDescription.placeholder = 'Update Description';
    updateDescription.style.display = 'none';

    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    saveBtn.className = 'save';
    saveBtn.style.display = 'none';

    // Save update
    saveBtn.addEventListener('click', () => {
        newTitle.innerText = updateTitle.value;
        newDescr.innerText = updateDescription.value;

        newTitle.style.display = 'block';
        newDescr.style.display = 'block';

        updateTitle.style.display = 'none';
        updateDescription.style.display = 'none';
        saveBtn.style.display = 'none';
    });

    updateBtn.addEventListener('click', () => {
        // hide old
        newTitle.style.display = 'none';
        newDescr.style.display = 'none';

        // show inputs
        updateTitle.style.display = 'block';
        updateDescription.style.display = 'block';
        saveBtn.style.display = 'inline';

        // pre-fill
        updateTitle.value = newTitle.innerText;
        updateDescription.value = newDescr.innerText;
    });

    // append to note
    newNote.appendChild(newTitle);
    newNote.appendChild(newDescr);
    newNote.appendChild(deleteBtn);
    newNote.appendChild(updateBtn);
    newNote.appendChild(updateTitle);
    newNote.appendChild(updateDescription);
    newNote.appendChild(saveBtn);

    notesList.appendChild(newNote);

    // Clear inputs
    title.value = '';
    description.value = '';
});