import React from 'react'
import { Layout } from "antd";
import * as Icon from "react-feather";

const DashboardHeader = () => {

    const {Header } = Layout;
    return (
        <Header className="" style={{ padding: 0 }}>
              <div className="content-header">
                <div className="content-search">
                  <Icon.Search />
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
                <nav className="av">
                  <div className="aside-alert-link">
                    <a
                      href
                      className="new"
                      data-toggle="tooltip"
                      title="You have 2 unread messages"
                    >
                      <Icon.MessageSquare />
                    </a>
                    <a
                      href
                      className="new"
                      data-toggle="tooltip"
                      title="You have 4 new notifications"
                    >
                      <Icon.Bell />
                    </a>
                    <a href data-toggle="tooltip" title="Sign out">
                      <Icon.LogOut />
                    </a>
                  </div>
                </nav>
              </div>
              {/* content-header */}
            </Header>
    )
}

export default DashboardHeader
