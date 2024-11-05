document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('noteForm');

    if (noteForm) {
        noteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const year = document.getElementById('year').value;
            const subject = document.getElementById('subject').value;
            const file = document.getElementById('file').files[0];
            const comments = document.getElementById('comments').value;

            if (!file) {
                alert('Please select a file to upload.');
                return;
            }

            if (file.size > 25000000) {
                alert('File size exceeds the limit of 25MB.');
                return;
            }

            // Mock upload functionality
            const newNote = {
                year,
                subject,
                fileName: file.name,
                comments
            };

            let userProfile = JSON.parse(localStorage.getItem('userProfile'));

            if (!userProfile) {
                alert('No user profile found. Please log in again.');
                window.location.href = 'login.html';
                return;
            }

            userProfile.notes.push(newNote);
            localStorage.setItem('userProfile', JSON.stringify(userProfile));

            alert('File uploaded successfully!');
            displayNotes();
        });
    }

    function displayNotes() {
        let userProfile = JSON.parse(localStorage.getItem('userProfile'));
        const notesList = document.getElementById('notesList');
        notesList.innerHTML = '';

        if (userProfile && userProfile.notes) {
            userProfile.notes.forEach(note => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>Year:</strong> ${note.year}<br>
                    <strong>Subject:</strong> ${note.subject}<br>
                    <strong>Comments:</strong> ${note.comments}<br>
                    <a href="uploads/${note.fileName}" download>Download ${note.fileName}</a>
                `;
                notesList.appendChild(li);
            });
        }
    }

    // Call displayNotes on page load to show already uploaded notes
    displayNotes();
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            // Mock login functionality (Replace this with actual authentication logic)
            console.log("Email:", email, "Password:", password);

            // Mock user data (Replace this with actual user data from your authentication backend)
            const userProfile = {
                name: 'Jonny', // Replace with actual user name from backend
                email: 'jonny@example.com',
                doubts: [
                    { id: 1, text: 'What is the difference between let and var in JavaScript?' },
                    { id: 2, text: 'How do you center a div using CSS?' }
                ],
                notes: [
                    { id: 1, year: '2nd Year', subject: 'PPS', fileName: 'notes1.pdf' },
                    { id: 2, year: '3rd Year', subject: 'DBMS', fileName: 'dbms_notes.pdf' }
                ]
            };

            // Save user profile to local storage
            localStorage.setItem('userProfile', JSON.stringify(userProfile));

            // Redirect to profile page
            window.location.href = 'dashboard.html';
        });
    }
});
