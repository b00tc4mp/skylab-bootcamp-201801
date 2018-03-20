import React, {Component} from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import AdminLeagueLinks from '../AdminLeagueLinks/adminLeagueLinks'
import RowPlayer from './RowPlayer/rowPlayer'
import api_client from 'api-client'


class AdminLeaguePlayers extends Component{
    constructor(){
      super()
      this.state = {
        league:""      
      }
    }

    // component willmount llamamos a la api para traernos los datos de la liga y lo recogemos con this.props.match.id, coincidira con el nombre :idofleague del router
     componentWillMount(){
      console.log('componentWillMount');
      console.log(this.props.match.params.idOfLeague)

      api_client.retrieveLeague(this.props.match.params.idOfLeague)
          .then(res => {
            console.log(res)
              this.setState({league:res})              
          })
          .catch(console.error)
        
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
                <th className="table-header">joined</th>
                <th className="table-header">Action</th>
              </tr>
            </thead>
            <tbody>
              <RowPlayer />
            </tbody>
            <tfoot>
            </tfoot></table>
        </div>{/*end of .table-responsive*/}
        <button type="button" className="btn btn-primary btn-sm boton">Join League</button>
        <button type="button" className="btn btn-primary btn-sm boton">Generate Teams</button>
      </div>
            
      
          </div>
        </div>
      </div>
        )
    }
}
export default AdminLeaguePlayers