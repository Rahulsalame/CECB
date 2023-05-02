function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // hello
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "Hello") {
        return "Hello There!";
    } else if (input == "hii"){
        return "Hello There!";
    } else if (input == "Hii") {
        return "Hello There!";
    } else if (input == "Branches"){
        return "There are 7 branches in our college.";
    } else if (input == "branches"){
        return "There are 7 branches in our college.";
    } else if (input == "How many branches are there in your college?"){
        return "There are 7 branches in our college.";
    } else if (input == "What is the highest package gone in your college?"){
        return "3.5LPA";
    } else if (input == "What are the core branches in your college?"){
        return "Civil Engineering,Mechanical Engineering.";
    } else if (input == "How many Hostels are there in your college?"){
        return "2 boys hostel and 2 girls hostel.";
    } else if (input == "What is the name of your principle?"){
        return "Dr. Avinash Shrikhande";
    }

    else {
        return "Sorry i didn't got your for more details contact to college helpline number (+91 7114 255309) OR college website (info@kits.edu)";
    }
}