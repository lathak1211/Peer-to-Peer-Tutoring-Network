// Share Notes
function shareNotes() {
    const notesInput = document.getElementById('shareNotesInput').value;
    if (notesInput.trim() !== "") {
        const notesList = document.getElementById('notesList');
        const li = document.createElement('li');
        li.textContent = notesInput;
        notesList.appendChild(li);
        document.getElementById('shareNotesInput').value = "";
    }
}

// Ask a Doubt
function askDoubt() {
    const doubtInput = document.getElementById('askDoubtInput').value;
    if (doubtInput.trim() !== "") {
        const doubtsList = document.getElementById('doubtsList');
        const li = document.createElement('li');
        li.textContent = doubtInput;
        doubtsList.appendChild(li);
        document.getElementById('askDoubtInput').value = "";
        // Also add to the solve doubts list
        const solveDoubtsList = document.getElementById('solveDoubtsList');
        const solveLi = document.createElement('li');
        solveLi.textContent = doubtInput;
        solveDoubtsList.appendChild(solveLi);
    }
}

// Request Notes
function requestNotes() {
    const requestNotesInput = document.getElementById('requestNotesInput').value;
    if (requestNotesInput.trim() !== "") {
        const requestedNotesList = document.getElementById('requestedNotesList');
        const li = document.createElement('li');
        li.textContent = requestNotesInput;
        requestedNotesList.appendChild(li);
        document.getElementById('requestNotesInput').value = "";
    }
}
