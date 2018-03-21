import React, {Component} from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import RowTeam from './RowTeam/RowTeam'

class AdminLeagueTeams extends Component{
    constructor(){
      super()
      this.state = {
        teams:[]
      }
    }
    render(){
        return(
          
            <div className="wrapper">
            {/* Sidebar Holder */}
              <AdminSidebar />
            {/* Page Content Holder */}
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
                    <th className="table-header">Nº</th>
                    <th className="table-header">Team name</th>
                    <th className="table-header">Player 1</th>
                    <th className="table-header">Player 2</th>
                    <th className="table-header">Action</th>
                  </tr>
                </thead>
                <tbody>
                    <RowTeam/>
                </tbody>
                <tfoot>
                </tfoot></table>
            </div>{/*end of .table-responsive*/}
            <button type="button" className="btn btn-primary btn-sm actionbutton">Generate Matches</button>
          </div>
                        
              </div>
            </div>
          </div>
            )
        }
}
export default AdminLeagueTeams