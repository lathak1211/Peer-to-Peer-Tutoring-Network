document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.getElementById('requestForm');

    requestForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let year = document.getElementById('year').value;
        let subject = document.getElementById('subject').value;
        let comments = document.getElementById('comments').value;

        if (!year || !subject) {
            alert('Please select both year and subject.');
            return;
        }

        // Mock request functionality
        console.log("Request Details:");
        console.log("Year:", year);
        console.log("Subject:", subject);
        console.log("Comments:", comments);

        // Show success alert
        alert('Your request has been submitted successfully!');
    });
});
