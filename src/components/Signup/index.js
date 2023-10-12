const Signup = () => {
  const submit = () => {
    console.log('SDvsd')

    // Extract user input values from DOM elements
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const existingUsersJSON = localStorage.getItem('usersDB1')

    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : []

    // Create a new user object
    const newUser = {
      email,
      name,
      password,
      isLoggedIn: false,
    }

    // Add the new user to the existing user data
    existingUsers.push(newUser)

    // Convert the updated user data to a JSON string
    const updatedUsersJSON = JSON.stringify(existingUsers)

    // Store the updated user data in localStorage
    localStorage.setItem('usersDB1', updatedUsersJSON)
  }

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" placeholder="Name" id="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="Email" id="email" />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="password"
      />
      <button type="button" className="btnSignIn" onClick={submit}>
        Sign Up Now
      </button>
    </>
  )
}

export default Signup
