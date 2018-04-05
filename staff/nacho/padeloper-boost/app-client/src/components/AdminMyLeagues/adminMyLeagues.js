import React, { Component } from 'react'
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert2'
import api_client from 'api-client'

class AdminMyLeagues extends Component{
    constructor(){
      super()
      this.state={
        leagues:[]
      }
    }

    componentDidMount(){

      api_client.listUserLeagues(this.props.idUser)
        .then(res => {
          this.setState({leagues:res})
        })
        .catch(console.error)

    }

    
    removeLeague(element){
      swal({
        title: 'Are you sure?',
        text: "You won't be able to retrieve it",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your league has been deleted.',
            'success'
          )
          api_client.removeLeague(element._id)
          .then(res => res.data)
        } else {
          swal(
            'Cancelled',
            'League still there',
            'error'
          )
        }
      })
    }

    
    updateLeague(idLeague,name,city,club,category,type,maxplayers) {

      api_client.updateLeague(idLeague,name,city,club,category,type,maxplayers)
      .then((res) => res.data)

  }

  swalLeague(element) { 

       swal({
          title: 'Update League',
          
          html:
              `<input id="name" class="swal2-input" value="${element.name}" placeholder="league name">` +
              `<input id="city" class="swal2-input" value="${element.city}" placeholder="city">` +
              `<input id="club" class="swal2-input" value="${element.club}" placeholder="club">` +
              `<input id="category" class="swal2-input" value="${element.category}" placeholder = "category">` +
              `<input id="type" class="swal2-input" value="${element.type}" placeholder = "type">` +
              `<input id="maxplayers" class="swal2-input" value="${element.maxplayers}" disabled>`,
          focusConfirm: false,
          preConfirm: () => {
              return {
                  name: document.getElementById('name').value,
                  city: document.getElementById('city').value,
                  club: document.getElementById('club').value,
                  category: document.getElementById('category').value,
                  type: document.getElementById('type').value,
                  maxplayers: document.getElementById('maxplayers').value
              }
          }
      }).then(res => {
          this.updateLeague(
              element._id,
              res.value.name,
              res.value.city,
              res.value.club,
              res.value.category,
              res.value.type,
              res.value.maxplayers,
          )
      })
      .catch(err => {
          console.log(err.message)
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
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="row">
                <h3 className ="title">My Leagues</h3>
            
            </div>
          </div>
          <div className="line" />
          <div className="row">

            {this.state.leagues.map((element,index) => {
              return(
                <div className="col-md-4" key = {index}>
              <div className="box-league">
                <div className="info-league">
                  <div className="joined">{element.players? element.players.length:""}</div>
                  <div className="textleague">
                    <p>
                      League <span className="leaguename">{element.name} </span> 
                      Max players: <span>{element.maxplayers}</span><br/>
                      type: {element.type}  - {element.category}ª                                  
                    </p>
                    <p className="smalltext"><small>{element.city}  | </small><NavLink exact to = {`/adminleagueplayers/${element._id}`}><small><span className="leaguename"> View</span> | </small></NavLink><a onClick={e => { e.preventDefault(); this.swalLeague(element) }}><small><span className="leaguename"> Edit</span>  | </small></a><a onClick={e => { e.preventDefault(); this.removeLeague(element) }}><small><span className="leaguedelete"> Delete</span></small></a></p>
                  </div>  
                </div>                            
              </div>
            </div>
                // <BoxLeague leagueInfo= {element} user = {this.state.user} key = {index}/>
            )})}
            
      
          </div>
        </div>
      </div>
        )
    }
}
export default AdminMyLeagues