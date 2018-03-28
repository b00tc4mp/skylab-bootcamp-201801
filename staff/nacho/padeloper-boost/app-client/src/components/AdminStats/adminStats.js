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
              <div className="col-md-12">
                <h3 class="title"> STATS CHART</h3>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="row">

            <C3Chart data={data} type={type} />
          </div>
        </div>
      </div>
    )
  }
}
export default AdminStats