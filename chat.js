document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');

    // Mock data for chat messages (replace with actual data retrieval logic)
    let chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Function to display messages
    function displayMessages() {
        chatBox.innerHTML = '';
        chatMessages.forEach((message, index) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            messageElement.innerHTML = `
                <div class="message-content">
                    <strong>${message.user}:</strong> ${message.text}
                </div>
                <button class="reply-button" data-index="${index}">Reply</button>
                <div class="replies">
                    ${message.replies.map(reply => `<div class="reply"><strong>${reply.user}:</strong> ${reply.text}</div>`).join('')}
                </div>
            `;
            chatBox.appendChild(messageElement);
        });
    }

    // Handle new message submission
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const messageText = messageInput.value;
        if (messageText) {
            // Add the new message to the chat (replace 'User' with actual user data)
            chatMessages.push({ user: 'User', text: messageText, replies: [] });
            localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
            messageInput.value = '';
            displayMessages();
        }
    });

    // Event delegation for reply buttons
    chatBox.addEventListener('click', function(event) {
        if (event.target.classList.contains('reply-button')) {
            const index = event.target.getAttribute('data-index');
            const replyText = prompt('Enter your reply:');
            if (replyText) {
                chatMessages[index].replies.push({ user: 'User', text: replyText }); // Replace 'User' with actual user data
                localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
                displayMessages();
            }
        }
    });

    // Initial display of messages
    displayMessages();
});
