import React, {Component} from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import ColTeamName from './RowTeam/ColsTeam/ColTeamName'
import ColTeamPlayer1 from './RowTeam/ColsTeam/ColTeamPlayer1'
import ColTeamPlayer2 from './RowTeam/ColsTeam/ColTeamPlayer2'
import swal from 'sweetalert2'
import api_client from 'api-client'

class AdminLeagueTeams extends Component{
    constructor(){
      super()
      this.state = {
        league:{},
      }
    }

    componentDidMount(){
      api_client.retrieveLeague(this.props.match.params.idOfLeague)
      
      .then(res => {  
        this.setState({league:res})
      })
      .catch(console.error)
    }


    generateTeams = (e) => {
      e.preventDefault()
      if(this.state.league.teams.length===0){
          api_client.generateTeams(this.props.match.params.idOfLeague)
          .then(res => {
            this.setState({league:res.data})
          })
          .then(() => {
            swal({
              type: 'success',
              title: 'Teams generated successfully',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(console.error)
      }else{
        swal({

          type: 'error',
          title: 'Teams are already generated',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }


    deleteTeams = (e) => {
      e.preventDefault()
      api_client.removeTeams(this.props.match.params.idOfLeague)
        .then(res => {
          this.setState({league:res.data})
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
      
    }

    
    editTeam = (e) => {
      e.preventDefault()
      const options = {}
      this.state.league.teams.map((item,index) => {
        console.log(item)
        options[index] = item._id
      })

      swal({
        title: 'Select a player',
        input: 'select',
        inputOptions: options,
        inputPlaceholder: 'Select a player',
        showCancelButton: true,
        inputValidator: function(value) {
          return new Promise(function(resolve, reject) {
            if (value == "500") {
              resolve();
              // I will make call to api_client
            } else {
              reject('You need to select Peter :)');
            }
          });
        }
      }).then(function(result) {
        swal({
          type: 'success',
          html: 'You selected: ' + result
        });
      }) 

    }


    render(){
        return(         
            <div className="wrapper">
            <AdminSidebar userName = {this.props.userInfo}/>
            <div id="content">
              <AdminHeader />
              <AdminLeagueLinks leagueId = {this.props.match.params.idOfLeague}/>
            <div className="line" />
              <div className="row">    
              <div className="col-sm-12">
            <h3 className="title">TEAMS</h3>
            <div className="table-responsive">
              <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="table-header">Team name</th>
                    <th className="table-header">Player 1</th>
                    <th className="table-header">Player 2</th>
                    {this.state.league.creator===this.props.userInfo._id ? <th className="table-header">Action</th>:""}
                  </tr>
                </thead>
                <tbody>
                   {this.state.league.teams ? this.state.league.teams.map((element,index) => {
                     
                     return(
                       
                      <tr key = {index}>
                        
                        <ColTeamName  nameCol = {element.name +' '+(index+1)}/>
                        <ColTeamPlayer1 nameCol={element.players[0]} />
                        <ColTeamPlayer2 nameCol = {element.players[1]}/>
                        {this.state.league.creator===this.props.userInfo._id ? <td><button type="button" className="btn btn-primary btn-sm removebutton" onClick = {this.editTeam}>Edit</button></td>:""}
                      </tr>
                     )
                   }) : undefined} 
                  {this.state.league.teams? console.log(this.state.league.teams.lenght) : undefined}
                    
                </tbody>
                <tfoot>
                </tfoot></table>
            </div>{/*end of .table-responsive*/}
            
            {this.state.league.creator===this.props.userInfo._id?<button type="button" className="btn btn-primary btn-sm boton" onClick = {this.generateTeams}>Generate Teams</button>:""}
            {this.state.league.creator===this.props.userInfo._id?<button type="button" className="btn btn-primary btn-sm boton" onClick = {this.deleteTeams}>Delete Teams</button>:""}
            </div>
                        
              </div>
            </div>
          </div>
            )
        }
}
export default AdminLeagueTeams