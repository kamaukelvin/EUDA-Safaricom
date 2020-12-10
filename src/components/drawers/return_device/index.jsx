import React, {useContext} from 'react'
import { Drawer} from 'antd';
import {Context} from '../../../context/Context'
import ReplaceDeviceForm from '../../forms/replace_device'


const ReplaceDevice = () => {

    const {onReturnClose, returnVisible} = useContext(Context)


    return (
        <Drawer
        title="Return Device"
        placement="right"
        maskClosable={false}
        closable={true}
        width={450}
        onClose={onReturnClose}
        visible={returnVisible}
      >
       <ReplaceDeviceForm/>
      </Drawer>
    )
}

export default ReplaceDevice
