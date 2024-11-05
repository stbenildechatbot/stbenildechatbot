function sendMessage() {
    var userInput = document.getElementById("userInput").value;

    if (userInput.trim() === "") return;

    // Correct common spelling mistakes before processing
    userInput = correctSpelling(userInput);

    // Display user's message
    var chatbox = document.getElementById("chatbox");
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = userInput;
    chatbox.appendChild(userMessage);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear the input field
    document.getElementById("userInput").value = "";

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot response after a short delay
    setTimeout(function() {
        // Remove typing indicator
        hideTypingIndicator();

        var botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = getAIResponse(userInput);
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1500); // Adjust delay to simulate typing time
}

function showTypingIndicator() {
    var chatbox = document.getElementById("chatbox");
    var typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.id = "typing-indicator";
    typingIndicator.innerHTML = "<span></span><span></span><span></span>";
    chatbox.appendChild(typingIndicator);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function hideTypingIndicator() {
    var typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) typingIndicator.remove();
}

function sendSuggestedMessage(message) {
    document.getElementById("userInput").value = message;
    sendMessage();
}

function correctSpelling(input) {
    // Simple spelling correction example
    input = input.replace(/\bteh\b/gi, "the");
    input = input.replace(/\brecieve\b/gi, "receive");
    // Add more corrections as needed
    return input;
}

function populateQuestion(question) {
    document.getElementById("userInput").value = question;
    sendMessage();
}

function getAIResponse(input) {
    // Convert input to lowercase
    input = input.toLowerCase();

    // General responses based on user input
     if (input.includes("name")) {
        return "I'm a simple AI assistant here to help you!";
    } else if (input.includes("creator")) {
        return "My Creator are Uriel Morales, Nathanael Cac, and Hans Mackey";
    } else if (input.includes("weather")) {
        return "I can't provide live weather updates, but it's always good to check online!";
    } else if (input.includes("time")) {
        return "Current time is " + new Date().toLocaleTimeString();
    } else if (input.includes("date")) {
        return "Today's date is " + new Date().toLocaleDateString();
    } else if (input.includes("help")) {
        return "I'm here to answer your questions! Feel free to ask me anything.";
    } else if (input.includes("tesda courses") || input.includes("tesda")) {
        return `
            Here are the TESDA courses we offer:
            <br><br>
            - 3D Animation NC III: 1,040 hours <br>
            - Airline and Cargo Secretarial: 898 hours <br>
            - Bartending NC II: 335 hours <br>
            - Computer Hardware Servicing NC II: 378 hours <br>
            - Computer Secretarial: 682 hours <br>
            - Diploma in Accountancy: 2 years <br>
            - Diploma in Computer and Electronics Technology: 2 years <br>
            - Diploma in Computer and Information Technology: 2 years <br>
            - Diploma in Customs Administration: 2 years <br>
            - Food & Beverage Services NC II: 372 hours <br>
            - Front Office Services NC II: 472 hours <br>
            - Housekeeping NC II: 436 hours <br>
            - Tour Guiding Services NC II: 196 hours
        `;
    } else if (input.includes("college programs") || input.includes("college courses") || input.includes("college")) {
        return `
            Here are the college programs we offer:
            <br><br>
            <strong>Business and Management Department:</strong><br>
            - BS in Accountancy<br>
            - BS in Customs Administration<br>
            - BS in Entrepreneurship<br>
            - BS in Real Estate Management<br><br>
            
            <strong>Information and Communications Technology Department:</strong><br>
            - BS in Information Technology<br>
            - BS in Entertainment and Multimedia Computing (Game Developing)<br>
            - 2-Year Computer Information and Multimedia Technology<br>
            - Game Programming NCIII<br>
            - Technical Drafting NCII<br>
            - Visual Graphics Design NCII<br>
            - Computer System Servicing NCII<br><br>
            
            <strong>Tourism and Hospitality Department:</strong><br>
            - BS in Hospitality Management<br>
            - BS in Tourism Management<br>
            - Diploma in Travel and Tourism Technology (Leading to BS in Tourism Management)<br>
            - 2-Year Tourism Management<br>
            - 2-Year Hotel, Restaurant, and Tourism Operations<br>
            - Bartending NCII<br>
            - Food and Beverage Services NCII<br>
            - Front Office Services NCII<br>
            - Housekeeping NCII<br>
            - Tourist Promotions Services NCII<br>
            - Event Management Services NCIII<br>
            - Bread and Pastry Production NCII<br>
            - Cookery NCII
        `;
    } else if (input.includes("programs") || input.includes("courses")) {
        return "Tesda or College courses?"
    } else if (input.includes("located") || input.includes("address")) {
        return "2647 Rizal Ave, Olongapo, Zambales"
    } else if (input.includes("admission requirements")|| input.includes("requirements")) {
        return `
            <strong>Admission Requirements for New Students:</strong><br><br>
            - Report Card (Form 138)<br>
            - Certificate of Good Moral<br>
            - Original Copy of Birth Certificate (PSA)<br>
            - 2x2 Picture with white background (2 copies)<br>
            - Long Brown Envelope<br><br>
            <strong>For Transferees:</strong><br>
            - Honorable Dismissal<br>
            - Certificate of Transfer Credentials<br>
            - Certificate of Good Moral<br>
            - Original Copy of Birth Certificate (PSA)<br>
            - 2x2 Picture with white background (2 copies)<br>
            - Long Brown Envelope
        `;
    }  else if (input.includes("admission process")|| input.includes("process")) {
        return `
            <strong>Admission Process:</strong><br><br>
            Enrollment Schedule: Monday to Friday, 8:00 AM - 5:00 PM<br><br>
            <strong>Reminder:</strong><br>
            - Wear your face mask at all times.<br>
            - Bring your own ballpen for health and safety reasons.
        `;
    } else if (input.includes("contact info") || input.includes("inquiries")) {
        return `
            <strong>Contact Information:</strong><br><br>
            - Landline: (047) 602-4985<br>
            - Mobile: 0999-359-0023<br>
            - Facebook: <a href="https://www.facebook.com/stbenilde">facebook.com/stbenilde</a>
        `;
     } else if (input.includes("about") || input.includes("school info")) {
        return `
            St. Benilde Center for Global Competence, Inc. is a recognized institution offering various programs in business, ICT, and tourism. 
            We aim to equip students with the skills needed for global competence through quality education and training.<br><br>
            Our programs cater to various fields such as Business, Information Technology, Tourism, and Hospitality, ensuring our students are industry-ready.
        `;
    } else {
        return "I don't have an answer for that right now, but feel free to ask another question!";
    }
}
