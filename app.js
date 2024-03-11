// Existing array of usernames
var usernames = ["zakir", "Asim", "Abdullahmotiwala"];

// Function to add a username to the array
function addUser(username) {
    usernames.push(username);
    alert("User '" + username + "' added successfully!");
}

// Function to prompt the user for signup
function promptForSignup() {
    var response = prompt("Do you want to sign up? (yes/no)").toLowerCase();

    if (response === "yes") {
        var name = prompt("Enter your name:");
        addUser(name);
    } else if (response === "no") {
        alert("Maybe next time!");
    } else {
        alert("Invalid response. Please enter 'yes' or 'no'.");
    }
}

// Prompt the user for signup
promptForSignup();

// Display the updated list of usernames using alert
alert("Updated list of usernames: " + usernames.join(", "));
