import React, {Component} from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'

class AdminLeagueMatches extends Component{
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
                <tr>
                        
                        <td>The Timberwolves</td>
                        <td>2</td>
                        <td>0</td>
                        <td>The Spurs</td>
                        <td><button type="button" className="btn btn-primary btn-sm actionbutton">Edit</button><button type="button" className="btn btn-primary btn-sm">Result</button></td>
                    </tr>
                </tbody>
                <tfoot>
                </tfoot></table>
            </div>{/*end of .table-responsive*/}
            <button type="button" className="btn btn-primary btn-sm actionbutton">Generate Teams</button>
          </div>
                
          
              </div>
            </div>
          </div>
            )
        }
}
export default AdminLeagueMatches