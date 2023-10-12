import {Component} from 'react'

import Login from '../Login'
import Signup from '../Signup'
import './index.css'

class Home extends Component {
  state = {isloginform: false}

  onClickToggle = () => {
    const {isloginform} = this.state
    this.setState({isloginform: !isloginform})
  }

  toggleFormType = () => {
    const {isloginform} = this.state
    this.setState({isloginform: !isloginform})
  }

  render() {
    // this.fetchData()
    const {isloginform} = this.state

    return (
      <div className="topcls">
        <div className="formcls">
          <form>
            <h1>{isloginform ? 'Login' : 'Sign Up'}</h1>
            {isloginform ? <Login /> : <Signup />}
            <p>
              {isloginform
                ? "Don't have an account? Sign up here."
                : 'Already have an account? Login here.'}
            </p>{' '}
            {isloginform ? (
              <button
                type="button"
                className="btnSubmit"
                onClick={this.toggleFormType}
              >
                Sign up
              </button>
            ) : (
              <button
                type="button"
                className="btnSubmit"
                onClick={this.toggleFormType}
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default Home
