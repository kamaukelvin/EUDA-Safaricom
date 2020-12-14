import React from 'react'
import {Spin} from 'antd'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { LoadingOutlined } from '@ant-design/icons'

const PageLoader = () => {

    const antIcon = <LoadingOutlined style={{ fontSize: 36, color: '#39b54a'}} spin   />
    return (
        <div>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        <Spin indicator={antIcon} />
            
        </div>
        <p className="text-center">Loading all employees Please wait...</p>
        </div>
    )
}

export default PageLoader
