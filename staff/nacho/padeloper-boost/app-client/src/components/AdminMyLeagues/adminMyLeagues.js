import React, { Component } from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
// import BoxLeague from './BoxLeague/boxLeague'
import api_client from 'api-client'

class AdminMyLeagues extends Component{
    render(){
        return(
            <div className="wrapper">
        {/* Sidebar Holder */}
          <AdminSidebar />
        {/* Page Content Holder */}
        <div id="content">
          <AdminHeader />
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="search-box">
                  <form className="search-form">
                    <input className="form-control" placeholder="Search for your league" type="text" />
                    <button className="btn btn-link search-btn">
                      <i className="glyphicon glyphicon-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="row">
            {/*/box-init */}
            {/* {this.state.leagues.map(element => {
              return(
              <BoxLeague leagueName = {element.name} maxplayers = {element.maxplayers} place = {element.city}/>
            )})} */}
            
            {/*/box-finish */}
      
          </div>
        </div>
      </div>
        )
    }
}
export default AdminMyLeagues