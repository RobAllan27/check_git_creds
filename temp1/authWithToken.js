// Define the expected username and password
const expectedUsername = "myusername";
const expectedPassword = "mypassword";
const expectedToken = "mytoken";

// Function to check if the entered username and password are valid
function checkCredentials(username, password, token) {
  if (username === expectedUsername && password === expectedPassword && token === expectedToken) {
    return "Login really wonderfully successful!";
  } else {
    return "Invalid username or password. Please try again.";
  }
}

// Example usage:
const enteredUsername = "myusername";
const enteredPassword = "mypassword";
const enteredToken = "mytoken";

const loginResult = checkCredentials(enteredUsername, enteredPassword, enteredToken);
console.log(loginResult);
