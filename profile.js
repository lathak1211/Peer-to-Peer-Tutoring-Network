document.addEventListener('DOMContentLoaded', () => {
    // Fetch user profile from local storage on profile page
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (!userProfile) {
        alert('No user profile found. Please log in again.');
        window.location.href = 'login.html'; // Redirect to login page if no user profile
        return;
    }

    // Populate profile information
    document.getElementById('user-name').innerText = userProfile.name;
    document.getElementById('user-email').innerText = userProfile.email;

    // Populate user doubts
    const doubtsList = document.getElementById('doubts-list');
    userProfile.doubts.forEach(doubt => {
        const listItem = document.createElement('li');
        listItem.innerText = doubt.text;
        doubtsList.appendChild(listItem);
    });

    // Populate user notes
    const notesList = document.getElementById('files-list');
    userProfile.notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Year:</strong> ${note.year}, 
            <strong>Subject:</strong> ${note.subject}, 
            <strong>File:</strong> <a href="${note.fileName}" target="_blank">${note.fileName}</a>
        `;
        notesList.appendChild(listItem);
    });
});
