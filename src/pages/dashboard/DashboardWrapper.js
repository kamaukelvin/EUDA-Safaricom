import React,{useState} from 'react'
import Dashboard from './Dashboard'

const DashboardWrapper = () => {

    const [collapsed, setCollapsed] = useState(false)

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
      };
    return (
        <Dashboard
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
        />
    )
}

export default DashboardWrapper
