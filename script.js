/* styles.css */

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e5e5e5;
}

.chat-container {
    width: 1000px;
    height: 600px;
    background-color: #e5e5e5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header {
    background-color: #00a550;
    padding: 15px;
    text-align: center;
    color: white;
    font-size: 18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

#chatbox {
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    background-color: #e5e5e5;
}

.bot-message, .user-message {
    margin: 10px 0;
    padding: 10px;
    border-radius: 20px;
    max-width: 70%;
}

.bot-message {
    background-color: #ececec;
    align-self: flex-start;
}

.user-message {
    background-color: #00a550;
    color: white;
    align-self: flex-end;
}

.input-container {
    display: flex;
    padding: 10px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

#userInput {
    flex-grow: 1;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #e5e5e5;
    font-size: 16px;
    outline: none;
}

#send {
    background-color: transparent;
    border: none;
    margin-left: 10px;
    cursor: pointer;
}

#send svg {
    width: 24px;
    height: 24px;
    color: #00a550;
}

.suggestions {
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    background-color: #e5e5e5;
}

.suggestions button {
    padding: 8px 12px;
    border: none;
    border-radius: 20px;
    background-color: #00a550;
    color: white;
    cursor: pointer;
    font-size: 14px;
    opacity: 0;
    animation: popUp 0.5s forwards ease-in-out;
}

@keyframes popUp {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Typing indicator */
.typing-indicator {
    display: flex;
    gap: 4px;
    padding: 10px;
    align-items: center;
    background-color: #ececec;
    width: fit-content;
    border-radius: 20px;
    margin: 10px 0;
    align-self: flex-start;
}

.typing-indicator span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #bbb;
    border-radius: 50%;
    animation: typing 1s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {
    0%, 60%, 100% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(-6px);
    }
}
