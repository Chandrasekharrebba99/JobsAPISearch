import axios from 'axios'
import {Component} from 'react'
import './index.css'

class Profile extends Component {
  state = {ProfileName: '', location: '', listOfJobs: []}

  ProfileNameUpdate = event => {
    this.setState({ProfileName: event.target.value})
  }

  locationChange = event => {
    this.setState({location: event.target.value})
  }

  fetchData = async () => {
    const {ProfileName, location} = this.state
    console.log(ProfileName, location)

    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: `${ProfileName},${location}`,
        page: '1',
        num_pages: '1',
      },
      headers: {
        'X-RapidAPI-Key': 'e4596dd6a3msh4866494ee50619bp1a614ajsnd631791e31c3',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    }

    try {
      const response = await axios.request(options)
      const jobsList = response.data.data
      console.log(response.data.data)
      const updatedData = jobsList.map(arr => ({
        companyLogo: arr.employer_logo,
        companyName: arr.employer_name,
        companyWebsite: arr.employer_website,
        companyType: arr.employer_company_type,
        jobJobTitle: arr.job_job_title,
        jobSalary: arr.job_max_salary,
        jobDescription: arr.job_description,
        jobCountry: arr.job_country,
        jobCity: arr.job_city,
        jobEmploymentType: arr.job_employment_type,
        jobApplyLink: arr.job_apply_link,
        jobIsRemote: arr.job_is_remote,
      }))
      this.setState({listOfJobs: updatedData})
      //   console.log(updatedData)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {ProfileName, location, listOfJobs} = this.state
    console.log(listOfJobs)

    return (
      <div>
        <div>
          <h1> what programming language you ares looking for a job</h1>

          <form>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Ex:Python developer in Texas"
              value={ProfileName}
              onChange={this.ProfileNameUpdate}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Ex:US"
              value={location}
              onChange={this.locationChange}
            />
            <button type="button" onClick={this.fetchData}>
              Search
            </button>
          </form>
          <div>
            <ul>
              {listOfJobs.map(arr => (
                <li className="jobItem" key={arr.jobApplyLink}>
                  <div>
                    <img
                      src={arr.companyLogo}
                      alt={arr.companyName}
                      className="CompanpyLogo"
                    />
                    <a href={arr.companyWebsite}>
                      <p>Company Name:{arr.companyName}</p>
                    </a>
                    <p>Job Title:{arr.jobJobTitle}</p>
                    <p>Job Description:{arr.jobDescription}</p>
                    <p>City:{arr.jobCity}</p>
                    <p>Country:{arr.jobCountry}</p>
                    <p>EmpolymentType:{arr.jobEmploymentType}</p>
                    <p>Salary:{arr.job_max_salary}</p>
                    <p>Remote:{arr.jobIsRemote ? 'Yes' : 'NO'}</p>
                    <button type="button">
                      <a href={arr.jobApplyLink}>Apply Now</a>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
