// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {IplTeamDashBoardData} = this.props
    const {id, name, teamImageUrl} = IplTeamDashBoardData

    return (
      <Link to={`team-matches/${id}`} className="link-item">
        <li className="ipl-team-list-container">
          <img src={teamImageUrl} alt={name} className="ipl-team-logo" />
          <p className="ipl-team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
