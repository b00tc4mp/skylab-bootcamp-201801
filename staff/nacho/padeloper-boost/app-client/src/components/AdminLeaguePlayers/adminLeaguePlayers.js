import React, {Component} from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import InfoLeague from '../InfoLeague/InfoLeague'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
// import RowPlayer from './RowPlayer/RowPlayer'
import ColPlayerInitial from './RowPlayer/ColsPlayer/ColPlayerInitial'
import ColPlayerName from './RowPlayer/ColsPlayer/ColPlayerName'
import ColPlayerPosition from './RowPlayer/ColsPlayer/ColPlayerPosition'
import ColPlayerLevel from './RowPlayer/ColsPlayer/ColPlayerLevel'
import ColPlayerButton from './RowPlayer/ColsPlayer/ColPlayerButton'
import swal from 'sweetalert2'
import api_client from 'api-client'


class AdminLeaguePlayers extends Component{
    constructor(){
      super()
      this.state = {
        league:"",
        players:[]      
      }
    }

    // component willmount llamamos a la api para traernos los datos de la liga y lo recogemos con this.props.match.id, coincidira con el nombre :idofleague del router
     componentDidMount(){

      api_client.retrieveLeague(this.props.match.params.idOfLeague)
          .then(res => {
            console.log(res.players)
              this.setState({league:res})
              this.setState({players:res.players})              
          })
          .catch(console.error)       
     }


    removePlayer = (e,id) => {
      e.preventDefault()
      console.log(id)
      console.log(this.props.match.params.idOfLeague)

      api_client.removePlayerFromLeague(this.props.match.params.idOfLeague,id)
      .then((league) => this.setState({players:league.players}))
      // .then(() => {
      //   swal({
      //     type: 'success',
      //     title: 'Player removed successfully',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // })
      
      .catch(console.error)
    }


    addPlayer = (e,id) => {
      e.preventDefault()
      console.log(this.state.players.length + '>=' + this.state.league.maxplayers)
      if(this.state.players.length >= this.state.league.maxplayers){
        swal({

          type: 'error',
          title: 'Max players reached, cannot join',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
      //console.log(this.props.idUser)
      api_client.addPlayerToLeague(this.props.match.params.idOfLeague,this.props.idUser)
      .then((league)=>this.setState({players:league.players}))
      .then(() => {
        swal({
          type: 'success',
          title: 'Successful join',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(console.error) 
      }          
    }

    render(){
        return(
        <div className="wrapper">
        <AdminSidebar userName = {this.props.userInfo}/>
        <div id="content">
          <AdminHeader />
          <AdminLeagueLinks leagueId = {this.props.match.params.idOfLeague}/>
        <div className="line" />
        <InfoLeague leagueInfo = {this.state.league} />
        <div className="line" />
          <div className="row">
          <div className="col-xs-12">
        <h3 className="title">PLAYERS</h3>
        <div className="table-responsive">
          <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="table-header">Initial</th>
                <th className="table-header">Name</th>
                <th className="table-header">Position</th>
                <th className="table-header">level</th>
                {this.state.league.creator===this.props.userInfo._id?<th className="table-header">Action</th>:""}
              </tr>
            </thead>
            <tbody>
            {this.state.players.map((player,index) => {
              return(
                <tr key={index}>
                  <ColPlayerInitial nameCol = {player.name[0]}/>
                  <ColPlayerName  nameCol = {player.name}/>
                  <ColPlayerPosition nameCol={player.position}/>
                  <ColPlayerLevel nameCol = {player.stats.level}/>
                  {this.state.league.creator===this.props.userInfo._id? <ColPlayerButton remove = {(e) => this.removePlayer(e,player._id)}/>:""}
              </tr>
              )
            })}              
            </tbody>
            <tfoot>
            </tfoot></table>
        </div>
        <button type="button" className="btn btn-primary btn-sm boton" onClick = {(e) => this.addPlayer(e,this.props.idUser)}>Join League</button>
      </div>
            
      
          </div>
        </div>
      </div>
        )
    }
}
export default AdminLeaguePlayers