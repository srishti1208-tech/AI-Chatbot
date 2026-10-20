const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// userInput.value.trim() — Gets the typed text and removes extra spaces at the beginning and end.
// console.log(message) — Prints the message in the browser console for debugging.
// if (message === "") return; — Stops execution if the input is empty.
// addMessage(message, "user-message") — Calls a function that creates a <div> and assigns CSS classes to identify it as a user's message.

function addMessage(message,className){
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", className);
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;//to automatically scroll the chat box to the bottom whenever a new message is added
}

function showTyping(){
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("message","bot-message");
    typingDiv.textContent="AI is typing..."
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollweight;
    return typingDiv;
}

sendBtn.onclick =async () => {
    const message = userInput.value.trim();
    console.log(message)
    if(message === "") return;
    addMessage(message,"user-message");
    userInput.value =""
    
    const typingDiv = showTyping();

    const botReplay = "Replay";
    typingDiv.remove();
    addMessage(botReplay, "bot-message");
}
