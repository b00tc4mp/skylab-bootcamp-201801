import React, { Component } from 'react';
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import BoxLeague from './BoxLeague/boxLeague'
import SearchLeague from './SearchLeague/searchLeague'
import api_client from 'api-client'


class AdminIndex extends Component{
      constructor(){
        super()
        this.state = {
          leagues:[],
          query:""
        }
      }


      componentWillMount() {
        api_client.listLeagues()
          .then(res => {
            console.log(res)
              this.setState({leagues:res})              
          })
          .catch(console.error)
      }
        

      keepInputQuery = (e) => {e.preventDefault(); this.setState({query:e.target.value})}
    
      searchQuery = (e) => {
        e.preventDefault()
        const {query} = this.state
        api_client.searchLeagues(query)
          .then(res => {
            this.setState({leagues:res})
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
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <SearchLeague searchLeaguesCity = {this.searchQuery}  inputQuery = {this.keepInputQuery}/>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="row">
            {/*/box-init */}
            {this.state.leagues.map(element => {
              return(
              <BoxLeague leagueName = {element.name} maxplayers = {element.maxplayers} place = {element.city} key = {element._id} idLeague ={element._id} players = {element.players}/>
            )})}
            
            {/*/box-finish */}
      
          </div>
        </div>
      </div>
      )
    }
  }
export default AdminIndex