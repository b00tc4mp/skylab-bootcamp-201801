import React, { Component } from 'react';
import './css/main.css'
import AdminSidebar from '../AdminSidebar/adminSidebar'
import AdminHeader from '../AdminHeader/adminHeader'
import C3Chart from 'react-c3js';
import 'c3/c3.css';


class AdminStats extends Component {
  constructor() {
    super()
    this.state = {
      leagues: [],
      user: "",
      query: ""
    }
  }

  render() {
    const data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]

    }

    const type = "pie"

    return (
      <div className="wrapper">
        {/* Sidebar Holder */}
        <AdminSidebar userName={this.props.userInfo} />
        {/* Page Content Holder */}
        <div id="content">
          <AdminHeader />
          
          <div className="container">
            <div className="row">
                <h4 className ="title">{this.props.userInfo.name} Info</h4>
                <p className = "text-explanation">
                    Hello {this.props.userInfo.name} , here you will find the data depending on the results of your matches. Remember, each game is important, fight for it<br/><br/>
                    <span className = "boldPurple">level:</span> 3<br/>
                    <span className = "boldPurple">position:</span> {this.props.userInfo.position}
                </p>
            </div>
          </div>
          <div className="line" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 class="title"> USER STATS CHART</h4>
              </div>
            </div>
          </div>

          <div className="row">

            <C3Chart data={data} type={type} />
          </div>
        </div>
      </div>
    )
  }
}
export default AdminStats