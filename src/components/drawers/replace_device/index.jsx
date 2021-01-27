import React, {useContext} from 'react'
import { Drawer} from 'antd';
import {Context} from '../../../context/Context'
import ReplaceDeviceForm from '../../forms/replace_device'


const ReplaceDevice = ({asset_tag,ticket }) => {

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
       <ReplaceDeviceForm
       asset_tag={asset_tag}
       ticket={ticket}
       />
      </Drawer>
    )
}

export default ReplaceDevice
