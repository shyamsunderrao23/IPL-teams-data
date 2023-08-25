// Write your code here

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    IplTeamDashBoardData: [],
  }

  componentDidMount() {
    this.getIPLTeamsData()
  }

  getIPLTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const UpdatedIplData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({IplTeamDashBoardData: UpdatedIplData, isLoading: false})
  }

  renderTeamList = () => {
    const {IplTeamDashBoardData} = this.state
    return (
      <ul className="Ipl-Team-List">
        {IplTeamDashBoardData.map(eachTeam => (
          <TeamCard key={eachTeam.id} IplTeamDashBoardData={eachTeam} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#00Bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-home-container">
        <div className="ipl-logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-image"
          />

          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamList()}
      </div>
    )
  }
}
export default Home
