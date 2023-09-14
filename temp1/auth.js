// Define the expected username and password
const expectedUsername = "myusername";
const expectedPassword = "mypassword";

// Function to check if the entered username and password are valid
function checkCredentials(username, password) {
  if (username === expectedUsername && password === expectedPassword) {
    return "Login really wonderfully successful Today!";

  } else {
    return "Invalid username or password. Please try again - slightly different";
  }
}

// Example usage:
const enteredUsername = "myusername";
const enteredPassword = "mypassword";

const loginResult = checkCredentials(enteredUsername, enteredPassword);
console.log(loginResult);
