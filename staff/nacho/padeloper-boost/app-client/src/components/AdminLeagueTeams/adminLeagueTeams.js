import React, { Component } from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import InfoLeague from '../InfoLeague/InfoLeague'
import ColTeamName from './RowTeam/ColsTeam/ColTeamName'
import ColTeamPlayer1 from './RowTeam/ColsTeam/ColTeamPlayer1'
import ColTeamPlayer2 from './RowTeam/ColsTeam/ColTeamPlayer2'
import swal from 'sweetalert2'
import api_client from 'api-client'

class AdminLeagueTeams extends Component {
  constructor() {
    super()
    this.state = {
      league: {},
      teams: [],
      teamsCorrect: false
    }
  }

  componentDidMount() {
    api_client.retrieveLeague(this.props.match.params.idOfLeague)
      .then(res => {
        this.setState({
          league: res,
          teams: res.teams
        })
      })
      .catch(console.error)
  }


  generateTeams = (e) => {
    e.preventDefault()
    if (this.state.league.teams.length === 0 && (this.state.league.players.length === this.state.league.maxplayers)) {
      api_client.generateTeams(this.props.match.params.idOfLeague)
        .then(res => {
          this.setState({
            league: res.data,
            teams: res.data.teams
          })
        })
        .then(() => {

          swal({
            type: 'success',
            title: 'Teams generated successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .then()
        .catch(console.error)
    } else {
      swal({

        type: 'error',
        title: 'cannot generate teams, review number of players or if teams are already generated',
        showConfirmButton: false,
        timer: 2500
      })
    }

  }

  getPlayerNameById = (players, id) => {
    for (let i = 0; i < players.length; i++) {
      const player = players[i]

      if (player._id === id) return player.name
    }
  }

  deleteTeams = (e) => {
    e.preventDefault()

    if (this.state.league.teams.length > 0) {
      api_client.removeTeams(this.props.match.params.idOfLeague)
        .then(res => {
          this.setState({
            league: res.data,
            teams: res.data.teams
          })
        })
        .then(() => {
          swal({
            type: 'success',
            title: 'Teams removed successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(console.error)

    } else {
      swal({
        type: 'error',
        title: 'There are no teams to delete',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }




  swalEditTeam(selectedTeam, playerA, playerB) {
    const optionA = this.state.league.players.map(item => {
      if (item._id === playerA) {
        return (
          `<option value = ${item._id} selected>${item.name}</option>`
        )
      }
      return (
        `<option value = ${item._id}>${item.name}</option>`
      )
    })
    const optionB = this.state.league.players.map(item => {
      if (item._id === playerB) {
        return (
          `<option value = ${item._id} selected>${item.name}</option>`
        )
      }
      return (
        `<option value = ${item._id}>${item.name}</option>`
      )
    })

    swal({
      title: 'Update Team',

      html:
        `<input id="name" class="swal2-input" value="${selectedTeam.name}" placeholder="league name">` +
        `<select id = "playerA">${optionA}</select>` +
        `<select id = "playerB">${optionB}</select>`,

      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          playerA: document.getElementById('playerA').value,
          playerB: document.getElementById('playerB').value
        }
      }
    }).then(res => {
      const teams = this.state.teams.map(team => {
        if (team._id === selectedTeam._id) {
          team.name = res.value.name
          team.players[0] = res.value.playerA
          team.players[1] = res.value.playerB
        }
        return team
      })

      const teamsCorrect = this.checkTeams(teams)

      this.setState({
        teams,
        teamsCorrect
      })

    })
      .catch(err => {
        console.log(err.message)
      })
  }

  checkTeams = (teams) => {
    for (let i = 0; i < teams.length; i++) {
      const playerA = teams[i].players[0]
      const playerB = teams[i].players[1]
      if (playerA === playerB) {
        return false
      }
      for (let j = 0; j < teams.length; j++) {
        if (i === j)
          continue
        if (teams[j].players[0] === playerA || teams[j].players[1] === playerA || teams[j].players[0] === playerB || teams[j].players[1] === playerB) {
          return false
        }
      }
    }
    return true
  }

  updateTeams = (e) => {
    e.preventDefault()
    if (this.state.league.teams.length > 0) {
      api_client.editTeams(this.props.match.params.idOfLeague, this.state.teams)
        .then(() => {
          swal({
            type: 'success',
            title: 'Teams updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
    } else {
      swal({
        type: 'error',
        title: 'Something was wrong',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <AdminSidebar userName={this.props.userInfo} />
        <div id="content">
          <AdminHeader />
          <AdminLeagueLinks leagueId={this.props.match.params.idOfLeague} />
          <div className="line" />
          <InfoLeague leagueInfo={this.state.league} />
          <div className="line" />
          <div className="row">
            <div className="col-sm-12">
              <h3 className="title">TEAMS</h3>
              <div className="table-responsive">
                <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="table-header">Team name</th>
                      <th className="table-header">Player A</th>
                      <th className="table-header">Player B</th>
                      {this.state.league.creator === this.props.userInfo._id ? <th className="table-header">Action</th> : ""}
                    </tr>
                  </thead>
                  <tbody>

                    {this.state.teams ? this.state.teams.map((element, index) => {

                      return (

                        <tr key={index}>

                          <ColTeamName nameCol={element.name} />
                          <ColTeamPlayer1 nameCol={this.getPlayerNameById(this.state.league.players, element.players[0])} />
                          <ColTeamPlayer1 nameCol={this.getPlayerNameById(this.state.league.players, element.players[1])} />

                          {this.state.league.creator === this.props.userInfo._id ? <td><button type="button" className="btn btn-primary btn-sm removebutton" onClick={e => { e.preventDefault(); this.swalEditTeam(element, element.players[0], element.players[1]) }}>Edit</button></td> : ""}

                        </tr>
                      )
                    }) : undefined}

                  </tbody>
                  <tfoot>
                  </tfoot></table>
              </div>{/*end of .table-responsive*/}


              {this.state.league.creator === this.props.userInfo._id ? <button type="button" className="btn btn-primary btn-sm boton" onClick={this.generateTeams}>Generate Teams</button> : ""}
              {this.state.league.creator === this.props.userInfo._id ? <button type="button" className="btn btn-primary btn-sm boton" onClick={this.deleteTeams}>Delete Teams</button> : ""}


              {this.state.league.creator === this.props.userInfo._id
                ?
                (this.state.teamsCorrect
                  ?
                  <button type="button" className="btn btn-primary btn-sm boton" onClick={this.updateTeams} >Update Teams</button>
                  :
                  <button type="button" className="btn btn-primary btn-sm boton" disabled>Update Teams</button>
                )
                : ""}



            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default AdminLeagueTeams