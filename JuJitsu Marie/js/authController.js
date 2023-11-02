
function registerUser(name, email, password) {
  // Check if a user with the same email already exists
  const existingUser = model.users.find(user => user.email === email);
  if (existingUser) {
    console.log('A user with this email already exists.');
    return;
  }

  // Add the new user to the users array
  const newUser = { id: model.users.length + 1, name, email, password };
  model.users.push(newUser);
  console.log('User registered successfully.');
}

function loginUser(email, password) {
  // Find the user with the provided email and password
  const user = model.users.find(user => user.email === email && user.password === password);
  if (user) {
    model.user.id = user.id;
    model.user.loggedIn = true;
    console.log('User logged in successfully.');
  } else {
    console.log('Invalid email or password.');
  }
}


