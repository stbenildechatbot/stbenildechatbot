// script.js

const suggestionTexts = [
    "College Programs",
    "Admission Requirements",
    "School Location",
    "TESDA Courses" ,
    "Chat" ,
];

let lastClickedSuggestion = "";

// Load initial suggestions
window.onload = function() {
    showSuggestions();
};


document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
}); 
// Ensure this bracket closes the event listener function

function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return; // Don't send empty messages

    const chatbox = document.getElementById("chatbox");

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear input field
    document.getElementById("userInput").value = "";

    // Simulate typing and bot response
    showTypingIndicator();

    setTimeout(function () {
        hideTypingIndicator();
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = getAIResponse(userInput);
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;

        // Show suggestions after bot response
        showSuggestions();
    }, 1500);
}


function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return; // Don't send empty messages

    const chatbox = document.getElementById("chatbox");

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear input field
    document.getElementById("userInput").value = "";

    // Simulate typing and bot response
    showTypingIndicator();

    setTimeout(function () {
        hideTypingIndicator();
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = getAIResponse(userInput);
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;

        // Show suggestions after bot response
        showSuggestions();
    }, 1500);
}


    // Detect the question
    if (questionElement.textContent === "Where can I message you?") {
        // Create a clickable link dynamically
        const link = document.createElement("a");
        link.href = "https://facebook.com/BNDCHATBOT"; // Replace with your messaging link
        link.target = "_blank"; // Opens the link in a new tab
        link.textContent = "Click here to message me!";
        
        // Append the link to the bot's answer container
        answerElement.appendChild(link);
    }
});

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    const chatbox = document.getElementById("chatbox");
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = userInput;
    chatbox.appendChild(userMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
    document.getElementById("userInput").value = "";

    showTypingIndicator();

    setTimeout(function() {
        hideTypingIndicator();
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = getAIResponse(userInput);
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;

        // Show suggestions after bot response
        showSuggestions(lastClickedSuggestion);
    }, 1500);
}

function showTypingIndicator() {
    const chatbox = document.getElementById("chatbox");
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.id = "typing-indicator";
    typingIndicator.innerHTML = "<span></span><span></span><span></span>";
    chatbox.appendChild(typingIndicator);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) typingIndicator.remove();
}

function showSuggestions(clickedSuggestion) {
    const suggestionsDiv = document.querySelector(".suggestions");
    suggestionsDiv.innerHTML = ""; // Clear current suggestions

    const filteredSuggestions = suggestionTexts.filter(suggestion => suggestion !== clickedSuggestion);
    lastClickedSuggestion = clickedSuggestion;

    filteredSuggestions.forEach(suggestion => {
        const button = document.createElement("button");
        button.textContent = suggestion;
        button.onclick = () => populateQuestion(suggestion);
        suggestionsDiv.appendChild(button);
    });
}

function populateQuestion(question) {
    document.getElementById("userInput").value = question;
    sendMessage();
    lastClickedSuggestion = question;
}

function getAIResponse(input) {
    // Convert input to lowercase
    input = input.toLowerCase();

    // General responses based on user input
     if (input.includes("name")) {
        return "I'm a simple AI assistant here to help you!";
    } else if (input.includes("hello")) {
        return "Hi, How can I Assist you today?";
    } else if (input.includes("core values") || input.includes("core") || input.includes("values") || input.includes("vision")) {
        return `
        <strong>Our School Core Values are:</strong><br>
        Competence, Discipline, Initiative, Service. <br><br>
        Compentece: Striving for Excellence Through Skill and Knowledge<br>
        Discipline: Fostering Personal and Professional Growth Through Diligence<br>
        Initiative: Pioneering Innovation and Positive Change Through Proactivity<br>
        Service: Empowering Others and Creating Impact Through Selfless Acts<br>
        `;
        } else if (input.includes("step") || input.includes("how") || input.includes("enroll") || input.includes("process") || input.includes("tuition") || input.includes("transfer") || input.includes("tuition")) {
        return `
        <strong>Enrollment Process</strong><br><br>
        I. New Enrollees: <br>
        Step 1 - Evaluation of Admission Documents.<br>
        Step 2 - Fill out Student Data Sheet.<br>
        Step 3 - Fill out Admission Procedure Sheet.<br>
        Step 4 - Printing of Enrollment Form.<br>
        Step 5 - Assessment and Payment of Tuition Fee.<br>
        Step 6 - Submission of Documents to the Registrar.<br><br>
        II. Transferees: <br>
        Step 1 - Evaluation of Transfer Credentials.<br>
        Step 2 - Fill out Student Data Sheet.<br>
        Step 3 - Fill out Admission Procedure Sheet.<br>
        Step 4 - Printing of Enrollment Form.<br>
        Step 5 - Assessment and Payment of Tuition Fee.<br>
        Step 6 - Submission of Documents to the Registrar.<br><br>
        III. Tuition and Fees <br>
        - As low as PHP. 15,000,00 (All-in-Fee)<br>
        - PHP. 546.00 per unit<br>
        `;
    } else if (input.includes("member") || input.includes("head") || input.includes("professor") || input.includes("teacher") || input.includes("family") || input.includes("officer")) {
        return `
        <strong>SCHOOL OFFICIALS</strong><br><br>
        <strong>ADMINISTRATION DEPARTMENT</strong><br><br>
        School President: Sonny J. Tabirara, LCB<br>
        VP for Administration and Finance: Ronald J. Camacho, MBA<br>
        Admin and Human Resource: Widelfredo T. Diaz, SO2<br>
        Head, Accounting Office/Disbursement Specialist: Gracita D. Miclat, LPT, MBA<br>
        Account Management Officer: Jhomer M. Onoya<br>
        School Registrar: Donna May Tabaranza, LPT<br>
        Assistant Registrar: Rolly I. Oliveria<br>
        Head, Physical Facilities: Jim P. Pagado<br>
        MIS/Property and Computer Laboratory Custodian: Janin Eljai B. Ramos<br>
        Head, Security Officer: Mateo F. Cayquep<br>
        Security Officer: Chant Nicole B. Damaso<br><br>
        <strong>ACADEMICS DEPARTMENT</strong><br><br>
        VP for Academics and Student Development and Services: Ronald J. Camacho, MBA<br>
        Academic Assistant/Marketing Officer: Czarina Kay Loriega<br>
        Head, Tourism and Hospitality Department: James Raphael E. Santiago, MBM<br>
        HRM Laboratory Custodian: Jash B. Ramos<br>
        Head, Business and Management Department: Veronica Joi C. Calubhay, LCB<br>
        Program Chair for BS in Accountancy: Remar Allen M. Bautista, CPA, MBA<br>
        Head, Information and Communication Technology Department: Mary Joanne B. Olino<br>
        Program Chair for BS in Entertainment and Multimedia Computing: Alvin S. Gallo<br>
        TVET Program Coordinator: Mark Khristopher DC. Mendoza<br><br>
        <strong>OFFICE OF THE STUDENT DEVELOPMENT AND SERVICES</strong><br><br>
        Head Office of the Student Development and Services: Riena A. Macapagal<br>
        Guidance Advocate/Designate: Chello Ann P. Asuncion, LPT<br>
        Library Supervising Consultant: Justine Mae Payot<br>
        NSTP Coordinator: Amiel N. Abela, LPT<br>
        Sports and Atheletics Coordinator: Ramer M. Bautista, LPT<br><br>
        <strong>SENIOR HIGH SCHOOL DEPARTMENT</strong><br><br>
        Senior High School Principal: Rodolfo B. Lacambra, MaEd<br>
        Senior High School Focal Person: Aurora A. Famadulan<br>
        Senior High School Faculty: Amiel N. Abela, LPT<br>
        Dee Joy D. Alcanzo, LPT<br>
        Ramer M, Bautista, LPT<br>
        Armina C. Domingo<br>
        Wenray Estabillo<br>
        Wendell Mark L. Vicena, LPT<br>
        Shaira Lee D. Manglicmot, LPT<br><br>
        <strong>ASSESSMENT CENTER</strong><br>
        Manager: Ronald J. Camacho, MBA<br>
        Assistant Managers: Mark Khristoper DC. Mendoza<br>
        James Raphael E. Santiago, MBM<br>
        Processing Officer: Jim P. Pagado<br>
        Admission Officer: Mary May L. Montes<br>
        Records and T2MIS Focal Person: Paul Mark Ebuenga<br>
        Cashier: Jhomer M. Onoya<br>
        Liason Officer: Jash B. Ramos<br>
        `;

    
    }   else if (input.includes("work") || input.includes("career") || input.includes("graduate") || input.includes("opporunity") || input.includes("oppotunities")) {
        return `
        <Strong>List of Career for IT Graduates</strong><br><br>
        Business Processing Outsourcing(BPO): IT Support Specialist, Technical Support Engineer, Help Desk Analyst.<br>
        Web Development: Web Developer, UI/UX Designer.<br>
        Software Development: Software Engineering, Front-End/Back-End Developer, Mobile App Developer.<br>
        Data Analytics and Business Intellegence: Data Analyst, Business Intellegence Specialist, Data Engineer.<br>
        Cyber Security: Cyber Security Analyst, Security Consultant, Ethical Hacker.<br>
        IT Infrastructure and Networking: Network Administrative, System Administrator, Cloud Engineer.<br>
        E-Commerce and Digital Marketing: IT Specialist for E-Commerce, SEO Analyst, Digital Marketing Specialist.<br>
        Game Development: Game Developer, Unity Developer, Graphics Designer.<br>
        Tech Startups: Full Stack Developer, AI Engineer, Product Manager.<br>
        Call Centers and IT Support: IT Support for Call Centers, System Support Specialist.<br><br>
        <Strong>List of Career for Business Management Graduates</strong><br><br>
        Marketing and Sales: Marketing Associate, Sales Executive, Brand Manager, Digital Marketing Specialist.<br>
        Human Resources: HR Specialist, Recruitment Officer, Development Coordinator.<br>
        Finance and Accounting: Financial Analyst, Credit Analyst, Accounts Officer.<br>
        Business Process Outsourcing(BPO): Client Services Associate, Process Analyst, Team Lead.<br>
        Supply Chain and Logistics: Supply Chain Analyst, Logistics Coordinator, Procurement Officer.<br>
        Real Estate: Property Consultant, Real Estate Manager.<br><br>
        <Strong>List of Career for Tourism and Hospitality Graduates</strong><br><br>
        Hotel and Resort Management: Front Office Manager, Guest Relations Officer, Housekeeping.<br>
        Food and Bevarage Services: Restaurant Manager, Barista, Bartender, Chef.<br>
        Airline and Cruise Industry: Flight Attendant, Airline Ground Staff, Cruise Ship Steward.<br>
        Tourism Development and Marketing: Tourism Officer, Marketing Specialist, Destination Manager.<br>
        Ecotourism and Community-Based Tourism: Ecotourism Specialist, Tour Guide.<br>
        `;



    } else if (input.includes("creator")) {
        return "My Creator are Uriel Morales, Nathanael Cac, and Hans Mackey";
    } else if (input.includes("weather")) {
        return "I can't provide live weather updates, but it's always good to check online!";
    } else if (input.includes("time")) {
        return "Current time is " + new Date().toLocaleTimeString();
    } else if (input.includes("date")) {
        return "Today's date is " + new Date().toLocaleDateString();
    } else if (input.includes("help")) {
        return  "Need Help? Contact us in our Facebook Page: https://www.facebook.com/BNDCHATBOT and we will assist you quickly"
    } else if (input.includes("Chat") || input.includes("chat") || input.includes("talk") || input.includes("tech") || input.includes("support")) {
        return  "Message us in our Facebook Page: https://www.facebook.com/BNDCHATBOT or simply search BND Chatbot, so we can assist more further."
    } else if (input.includes("tesda courses") || input.includes("tesda") || input.includes("Free")  ) {
        return `
            Here are the TESDA courses we offer:
            <br><br>
            <strong>Diploma Programs:</strong><br>
            - Diploma in Travel and Tourism Technology <br>
            - Diploma in Hospitality Management <br><br>
            <strong>Short Term TVET Program:</strong><br>
            - Events Management Services NC III <br>
            - Game Programming NC III <br>
            - Visual Graphics Design NC III <br>
            - Bartending NC II <br>
            - Bread and Pastry Production NC II <br>
            - Computer Systems Servicing NC II <br>
            - Cookery NC II <br>
            - Food and Beverages Services NC II <br>
            - Front Office Services NC II <br>
            - Tourism Promotion Services NC II <br><br>
            For the updated available PROGRAMS, message us in Facebook<br>
            Facebook: https://www.facebook.com/BNDCHATBOT or simply search BND Chatbot
        `;
    } else if (input.includes("college programs") || input.includes("college courses") || input.includes("available courses") || input.includes("Programs")) {
        return `
            Here are the college programs we offer:
            <br><br>
            <strong>Business and Management Department(BMD):</strong><br>
            - Bachelor of Science in Accountancy(BSA)<br>
            - Bachelor of Science in Accounting Information System(BSAIS)<br>
            - Bachelor of Science in Customs Administration(BSCA)<br>
            - Bachelor of Scienece in Entrepreneurship(BSEntrep)<br>
            - Bachelor of Science in Real Estate Management(BSREM)<br><br>
            
            <strong>Information and Communications Technology Department(ICTD):</strong><br>
            - Bachelor of Science in Information Technology(BSIT)<br>
            - Bachelor of Science in Entertainment and Multimedia Computing(BSEMC-Specializing Game Development)<br>
            - 2-Year Computer Information and Multimedia Technology(CIMT)<br><br>
            
            <strong>Tourism and Hospitality Department(THD):</strong><br>
            - Bachelor of Science in Hospitality Management(BSHM)<br>
            - Bachelor of Science in Tourism Management(BSTM)<br>
            - Diploma in Travel and Tourism Technology (Leading to BS in Tourism Management)<br>
            - 3-Year Diploma in Travel and Tourism Technology (Leading to BSTM)
            - 2-Year Cruise Ship Management(CSM)<br>
            - 2-Year Tourism, Hotel, and Restaurant Management(THRO)<br>

        `;
    } else if (input.includes("programs") || input.includes("courses")) {
        return "Tesda or College courses?"
    } else if (input.includes("located") || input.includes("address") || input.includes("location") || input.includes("Where") || input.includes("building")) {
        return `
        <strong>Main Building is located at 2647 Rizal Ave, Olongapo City, Zambales</strong><<br>
        Nearest Landmark: Front of Shell Gas Station and Andoks.<br><br>
        <strong>Annex Building is located in Corner W 18th Street, Olongapo City, Zambale</strong><<br>
        Landmark: 3rd floor and 4th floor of Victory Liner Central Station Building.

        `;
    } else if (input.includes("admission requirements") || input.includes("College Requirements") || input.includes("Senior High Requirements") || input.includes("requirements")) {
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
        return "I don't have an answer for that right now, but feel free to ask another question on our Facebook Page at https://www.facebook.com/BNDCHATBOT";
    }
}
