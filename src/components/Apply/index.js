import {Component} from 'react'
import './index.css'

class Apply extends Component {
  state = {submitClick: false}

  render() {
    const {submitClick} = this.state
    return (
      <div className="topCls">
        <div className="Applycls">
          {submitClick ? (
            <h1>Your application submited succenfully</h1>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="NameInput">Name:</label>
              <input type="text" id="NameInput" placeholder="Name" />

              <label htmlFor="emailInput">Email:</label>
              <input type="email" id="emailInput" placeholder="Email" />
              <label htmlFor="CL">Cover Letter</label>
              <textarea placeholder="Cover Letter Note" id="CL" />
              <br />
              <label htmlFor="Resume">Upload Resume</label>
              <input type="file" id="Resume" />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default Apply
