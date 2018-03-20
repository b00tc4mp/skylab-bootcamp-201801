import React, {Component}from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import Form from './Form/form'

class AdminLeagueCreate extends Component{
        constructor(){
          super()
          this.state = {
            name:"",
            city:"",
            club:"",
            category:"1",
            type:"public",
            date:"",
            maxPlayers:"12"
          }
        }

        keepInputName = (e) => {e.preventDefault(); this.setState({name:e.target.value})}
        keepInputCity = (e) => {e.preventDefault(); this.setState({city:e.target.value})}
        keepInputClub = (e) => {e.preventDefault(); this.setState({club:e.target.value})}
        keepInputCategory = (e) => {e.preventDefault(); this.setState({category:e.target.value})}
        keepInputType = (e) => {e.preventDefault(); this.setState({type:e.target.value})}
        keepInputDate = (e) => {e.preventDefault(); const date = new Date(); this.setState({date:date})}
        keepInputMaxPlayers = (e) => {e.preventDefault(); this.setState({maxPlayers:e.target.value})}

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
                <h3 className ="title">Create League</h3>
                <p className = "text-explanation">
                    Create your league its so simple, just fill the form and submit it.
                    You can see your created leagues at the top panel by clicking in "my leagues".
                    By creating a league you are the admin of that league so you can remove players, generate and edit teams and matches.
                    
                </p>
            </div>
          </div>
        <div className="line" />
          <div className="row">
            

          <div className="col-xs-12">
          <Form 
              inputName = {this.keepInputName}
              inputCity = {this.keepInputCity}
              inputClub = {this.keepInputClub}
              inputCategory = {this.keepInputCategory}
              inputType = {this.keepInputType}
              inputDate = {this.keepInputDate}
              inputMaxPlayers = {this.keepInputMaxPlayers}
          />
          </div>
            
      
          </div>
        </div>
      </div>
        )
      }
    
}
export default AdminLeagueCreate