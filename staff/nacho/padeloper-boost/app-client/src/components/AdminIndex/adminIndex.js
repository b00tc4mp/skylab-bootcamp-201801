import React, { Component } from 'react';
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import BoxLeague from './BoxLeague/boxLeague'
import BoxLeagueNot from './BoxLeagueNot/boxLeagueNot'

import SearchLeague from './SearchLeague/searchLeague'
import api_client from 'api-client'


class AdminIndex extends Component {
  constructor() {
    super()
    this.state = {
      leagues: [],
      user: "",
      query: ""
    }
  }


  componentWillMount() {
    api_client.listLeagues()
      .then(res => {

        this.setState({ leagues: res })
      })
      .catch(console.error)
  }


  componentDidMount() {
    api_client.retrieveUser(this.props.idUser)
      .then(res => {

        this.setState({ user: res.data.data })
      })
      .catch(console.error)
  }


  keepInputQuery = (e) => { e.preventDefault(); this.setState({ query: e.target.value }) }

  searchQuery = (e) => {
    e.preventDefault()
    const { query } = this.state

    api_client.searchLeagues(query)
      .then(res => {
        this.setState({ leagues: res })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="wrapper">
        {/* Sidebar Holder */}
        <AdminSidebar userName={this.props.userInfo} />
        {/* Page Content Holder */}
        <div id="content">
          <AdminHeader />
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <SearchLeague searchLeaguesCity={this.searchQuery} inputQuery={this.keepInputQuery} />
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="row">
            {/*/box-init */}
            {this.state.leagues.map((element, index) => {
              return (

                this.state.leagues[index].creator === this.props.idUser ? <BoxLeague leagueInfo={element} user={this.state.user} key= {index} /> : <BoxLeagueNot leagueInfo={element} user={this.state.user} key= {index} />
              )
            })}

            {/*/box-finish */}

          </div>
        </div>
      </div>
    )
  }
}
export default AdminIndex