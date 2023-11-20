document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
});

function loadNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    // Aquí puedes cargar las notas desde un servidor o almacenamiento local
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];

    savedNotes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `<p>${note}</p>
                             <button onclick="updateNote(${index})">Actualizar</button>
                             <button onclick="deleteNote(${index})">Eliminar</button>`;
        notesContainer.appendChild(noteDiv);
    });
}

function addNote() {
    const noteText = document.getElementById('note-text').value;
    if (noteText) {
        // Aquí puedes agregar validaciones antes de añadir la nota

        // Agrega la nota al almacenamiento local
        const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
        savedNotes.push(noteText);
        localStorage.setItem('stickyNotes', JSON.stringify(savedNotes));

        loadNotes();
        document.getElementById('note-text').value = '';
    }
}

function updateNote(index) {
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    const updatedText = prompt('Edita la nota:', savedNotes[index]);
    if (updatedText !== null) {
        // Actualiza la nota en el almacenamiento local
        savedNotes[index] = updatedText;
        localStorage.setItem('stickyNotes', JSON.stringify(savedNotes));

        loadNotes();
    }
}

function deleteNote(index) {
    // Elimina la nota del almacenamiento local
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    savedNotes.splice(index, 1);
    localStorage.setItem('stickyNotes', JSON.stringify(savedNotes));

    loadNotes();
}
