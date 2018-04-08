import React, { Component } from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import api_client from 'api-client'


class AdminLeagueStats extends Component {
  constructor() {
    super()
    this.state = {
      league: {},
      teamsSorted: []
    }
  }

  componentDidMount() {
    api_client.retrieveLeague(this.props.match.params.idOfLeague)
      .then(res => {
        this.setState({ league: res })
        this.createStats(res.teams)
      })
      .catch(console.error)
  }

  createStats = (teams) => {
    const teamsStats = teams.map((team, index) => {
      const teamStats = {}
      teamStats.name = team.name
      teamStats.matchesPlayed = this.getMatchesPerTeam(team._id)
      teamStats.matchesWon = this.getMatchesWonPerTeam(team._id)
      teamStats.points = this.getMatchesWonPerTeam(team._id) * 3
      teamStats.matchesLost = this.getMatchesLostPerTeam(team._id)
      teamStats.gamesWon = this.getGamesWonPerTeam(team._id)
      teamStats.gamesLost = this.getGamesLostPerTeam(team._id)
      return teamStats
    })
    const teamsSorted = teamsStats.sort(function (teamA, teamB) {
      return teamB.points - teamA.points;
    });
    this.setState({ teamsSorted })
  }



  getMatchesPerTeam(idTeam) {
    let totalMatches = 0

    this.state.league.matches.forEach(match => {
      if (match.teams.indexOf(idTeam) !== -1 && match.result) {
        totalMatches += 1
      }
    })
    return totalMatches
  }

  getMatchesWonPerTeam(idTeam) {
    return this.state.league.matches.reduce((matchesWon, match) => {
      if (match.result && match.result.winner.team === idTeam)
        return matchesWon += 1

      return matchesWon
    }, 0)
  }

  getMatchesLostPerTeam(idTeam) {
    return this.state.league.matches.reduce((matchesLost, match) => {
      if (match.result && match.result.loser.team === idTeam)
        return matchesLost += 1

      return matchesLost
    }, 0)
  }

  getGamesWonPerTeam(idTeam) {
    return this.state.league.matches.reduce((gamesWinner, match) => {
      if (match.result && match.result.winner.team === idTeam)
        return gamesWinner += match.result.winner.games
      if (match.result && match.result.loser.team === idTeam)
        return gamesWinner += match.result.loser.games

      return gamesWinner
    }, 0)
  }

  getGamesLostPerTeam(idTeam) {
    return this.state.league.matches.reduce((gamesLoser, match) => {
      if (match.result && match.result.loser.team === idTeam)
        return gamesLoser += match.result.winner.games
      if (match.result && match.result.winner.team === idTeam)
        return gamesLoser += match.result.loser.games

      return gamesLoser
    }, 0)
  }


  render() {
    return (
      <div className="wrapper">
        <AdminSidebar userName={this.props.userInfo} />
        <div id="content">
          <AdminHeader />
          <AdminLeagueLinks leagueId={this.props.match.params.idOfLeague} />
          <div className="line" />
          <div className="row">
            <div className="col-xs-12">
              <h3 className="title">QUALIFICATION</h3>
              <div className="table-responsive">
                <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="table-header">Position</th>
                      <th className="table-header">Team</th>
                      <th className="table-header">Points</th>
                      <th className="table-header">Played</th>
                      <th className="table-header">Won</th>
                      <th className="table-header">Lost</th>
                      <th className="table-header">Games +</th>
                      <th className="table-header">Games -</th>
                    </tr>
                  </thead>
                  <tbody>



                    {this.state.league.teams ? this.state.teamsSorted.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className ="boldPurple">{index + 1}</td>
                          <td className="boldPurple">{item.name}</td>
                          <td className="boldPurple">{item.points}</td>
                          <td className="boldPurple">{item.matchesPlayed}</td>
                          <td className="boldGreen">{item.matchesWon}</td>
                          <td className="boldRed">{item.matchesLost}</td>
                          <td className="boldGreen">{item.gamesWon}</td>
                          <td className="boldRed">{item.gamesLost}</td>
                        </tr>
                      )
                    }) : ""}


                  </tbody>
                  <tfoot>
                  </tfoot></table>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default AdminLeagueStats