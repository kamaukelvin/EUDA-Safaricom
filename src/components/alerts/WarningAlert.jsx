import React from 'react'
import { Alert } from 'antd';

const WarningAlert = ({message,description}) => {
    return (
        <Alert
        message={message}
        description= {description}
        type="error"
        showIcon
      />
    )
}

export default WarningAlert
