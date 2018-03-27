import React, {Component} from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import api_client from 'api-client'


class AdminLeagueMatches extends Component{
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


    generateAllMatches = (e) => {
      e.preventDefault()
      api_client.generateMatches(this.props.match.params.idOfLeague)
      .then(res => {
        console.log(res.data)
        this.setState({league:res.data})
      })
    }


    render(){
        return(
            <div className="wrapper">
            {/* Sidebar Holder */}
            <AdminSidebar userName = {this.props.userInfo}/>
            {/* Page Content Holder */}
            <div id="content">
              <AdminHeader />
              <AdminLeagueLinks leagueId = {this.props.match.params.idOfLeague}/>
            <div className="line" />
              <div className="row">
                
    
              <div className="col-xs-12">
            <h3 className="title">MATCHES</h3>
            <div className="table-responsive">
              
              <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="table-header">Team Name A</th>
                    <th className="table-header">Sets Team A</th>
                    <th className="table-header">Sets Team B</th>
                    <th className="table-header">Team Name B</th>
                    <th className="table-header">Action</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.league.matches ? this.state.league.matches.map((item,index) => {
                  return(
                  <tr key = {index}>                         
                    <td>{this.state.league.matches[index].teams[0]}</td>
                    <td>
                      <input type ="number"/>
                    </td>
                    <td><input type ="number"/></td>
                    <td>{this.state.league.matches[index].teams[1]}</td>
                    <td><button type="button" className="btn btn-primary btn-sm">Confirm</button></td>                    
                  </tr>
                  )
                }) : undefined} 
                  
                
                </tbody>
                <tfoot>
                </tfoot></table>
                
            </div>{/*end of .table-responsive*/}
            <button type="button" className="btn btn-primary btn-sm actionbutton" onClick = {this.generateAllMatches}>Generate Matches</button>
          </div>
                
          
              </div>
            </div>
          </div>
            )
        }
}
export default AdminLeagueMatches