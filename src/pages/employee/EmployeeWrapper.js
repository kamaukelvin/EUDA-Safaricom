import React,{useContext} from 'react'
import Employee from './Employee'
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {Context} from '../../context/Context'


const { confirm } = Modal

const EmployeeWrapper = () => {

  const {showDrawer} = useContext(Context)

    
    const accessories = [
        {
          title: 'Lenovo Laptop Bag',
        },
        {
          title: 'USB 3.0 VGA Adapter',
        },
        {
          title: 'Lenovo Laptop Clock',
        },
        {
          title: 'Thinkpad Mouse (Wired)',
        },
      ];

      const showConfirm=()=>{
        confirm({
          centered: true,
          title: 'Are you sure you want to dispose this item?',
          icon: <ExclamationCircleOutlined />,
          content: 'Some descriptions',
          onOk() {
            showDrawer();
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    return (
        <div>
            <Employee 
            accessories={accessories}
            showConfirm={showConfirm}
            />
        </div>
    )
}

export default EmployeeWrapper
