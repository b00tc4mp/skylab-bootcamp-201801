import React, { Component } from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import swal from 'sweetalert2'
import api_client from 'api-client'


class AdminLeagueMatches extends Component {
  constructor() {
    super()
    this.state = {
      league: {},
    }
  }

  componentDidMount() {
    api_client.retrieveLeague(this.props.match.params.idOfLeague)
      .then(res => {
        this.setState({ league: res })
      })
      .catch(console.error)
  }

  generateAllMatches = (e) => {
    e.preventDefault()
    if (this.state.league.matches.length > 0) {
      swal({
        type: 'error',
        title: 'Matches are already generated',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (this.state.league.teams.length === 0) {
      swal({
        type: 'error',
        title: 'Without teams cannot generate matches',
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      console.log(this.state.league.teams.length)
      swal({
        type: 'success',
        title: 'Matches generated successfully',
        showConfirmButton: false,
        timer: 1500
      })
      api_client.generateMatches(this.props.match.params.idOfLeague)
        .then(res => {
          this.setState({ league: res.data })
        })
        .catch(console.error)
    }

  }


  removeAllMatches = (e) => {
    e.preventDefault()
    if (this.state.league.matches.length === 0) {
      swal({
        type: 'error',
        title: 'There are no matches to remove',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      swal({
        type: 'success',
        title: 'matches removed successfully',
        showConfirmButton: false,
        timer: 1500
      })
      api_client.removeMatches(this.props.match.params.idOfLeague)
        .then(res => {
          this.setState({ league: res.data })
        })
        .catch(console.error)
    }
  }



  getMatchResult(idLeague, idMatch, idTeamWinner, gamesTeamWinner, idTeamLoser, gamesTeamLoser) {

    api_client.getMatchResult(idLeague, idMatch, idTeamWinner, gamesTeamWinner, idTeamLoser, gamesTeamLoser)
      .then(api_client.retrieveLeague(this.props.match.params.idOfLeague))
      .then(res => {
        this.setState({ league: res.data })
      })
      .catch(console.error)

  }

  swalResult(item) {

    swal({
      title: `Edit Match Result`,
      html:
        `<input id="winner" class="swal2-input" value="${this.getTeamById(item.teams[0])}">` +
        `<input id="gameswinner" class="swal2-input" value="0">` +
        `<input id="loser" class="swal2-input" value="${this.getTeamById(item.teams[1])}">` +
        `<input id="gamesloser" class="swal2-input" value="0">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          winner: document.getElementById('winner').value,
          gameswinner: document.getElementById('gameswinner').value,
          loser: document.getElementById('loser').value,
          gamesloser: document.getElementById('gamesloser').value,
        }
      }
    }).then(res => {
      const gameswinner = parseInt(res.value.gameswinner)
      const gamesloser = parseInt(res.value.gamesloser)

      this.getMatchResult(
        this.props.match.params.idOfLeague,
        item._id,
        item.teams[0],
        gameswinner,
        item.teams[1],
        gamesloser,
      )
    })
      .catch(err => {
        console.log(err.message)
      })
  }



  getTeamById(idTeam) {
    const team = this.state.league.teams.filter(team => {
      console.log(team._id)
        return team._id == idTeam
    })
    return team[0].name
  }

  render() {
    return (
      <div className="wrapper">
        {/* Sidebar Holder */}
        <AdminSidebar userName={this.props.userInfo} />
        {/* Page Content Holder */}
        <div id="content">
          <AdminHeader />
          <AdminLeagueLinks leagueId={this.props.match.params.idOfLeague} />
          <div className="line" />
          <div className="row">


            <div className="col-xs-12">
              <h3 className="title">MATCHES</h3>
              <div className="table-responsive">

                <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="table-header">Match nº</th>
                      <th className="table-header">Team Name A</th>
                      <th className="table-header">Games Team A</th>
                      <th className="table-header">Games Team B</th>
                      <th className="table-header">Team Name B</th>
                      <th className="table-header">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.league.matches ? this.state.league.matches.map((item, index) => {
                      return (

                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{this.getTeamById(item.teams[0])}</td>
                          <td className="boldPurple">{item.result ? (item.result.winner.team==item.teams[0] ? item.result.winner.games : item.result.loser.games) : "not played"}</td>
                          <td className="boldPurple">{item.result ? (item.result.winner.team==item.teams[1] ? item.result.winner.games : item.result.loser.games) : "not played"}</td>
                          <td>{this.getTeamById(item.teams[1])}</td>
                          <td><button type="button" className="btn btn-primary btn-sm" onClick={e => { e.preventDefault(); this.swalResult(item) }}>Edit Result</button></td>
                        </tr>
                      )
                    }) : undefined}


                  </tbody>
                  <tfoot>
                  </tfoot></table>

              </div>{/*end of .table-responsive*/}
              {this.state.league.creator === this.props.userInfo._id ? <button type="button" className="btn btn-primary btn-sm actionbutton" onClick={this.generateAllMatches}>Generate Matches</button> : ""}
              {this.state.league.creator === this.props.userInfo._id ? <button type="button" className="btn btn-primary btn-sm actionbutton" onClick={this.removeAllMatches}>Remove Matches</button> : ""}

            </div>


          </div>
        </div>
      </div>
    )
  }
}
export default AdminLeagueMatches