import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const submitLogIn = () => {
    const Logemail = document.getElementById('loginemail').value
    const Logpassword = document.getElementById('loginpassword').value

    const existingUsers = localStorage.getItem('usersDB1')
    const jsonObject = JSON.parse(existingUsers)
    const user = jsonObject.filter(arr => arr.email === Logemail)
    const userPassword = user[0].password
    console.log(userPassword, Logpassword)

    if (Logpassword === userPassword) {
      navigate('/jobs')
    }
    console.log(userPassword)
  }

  return (
    <>
      <div>
        <label htmlFor="loginemail">email</label>
        <input type="email" name="email" placeholder="Email1" id="loginemail" />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="loginpassword"
          placeholder="Password"
        />
        <button type="button" onClick={submitLogIn}>
          Log In
        </button>
      </div>
    </>
  )
}

export default Login
