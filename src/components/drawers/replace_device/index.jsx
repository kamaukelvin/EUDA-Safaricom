import React, {useContext} from 'react'
import { Drawer} from 'antd';
import {Context} from '../../../context/Context'
import ReplaceDeviceForm from '../../forms/replace_device'


const ReplaceDevice = () => {

    const {onClose, visible} = useContext(Context)


    return (
        <Drawer
        title="Replace Device"
        placement="right"
        maskClosable={false}
        closable={true}
        width={600}
        onClose={onClose}
        visible={visible}
      >
       <ReplaceDeviceForm/>
      </Drawer>
    )
}

export default ReplaceDevice
