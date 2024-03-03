// Function to prompt user for their name
function askForName() {
    return prompt("What is your name?");
}

// Function to display a greeting
function displayGreeting(name) {
    alert("Hello, " + name + "! Welcome to the world of JavaScript!");
}

// Main program
function main() {
    // Get user's name
    var userName = askForName();

    // Display a greeting
    displayGreeting(userName);
}

// Run the main program
main();
