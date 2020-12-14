import React,{useContext, useEffect} from 'react'
import Employee from './Employee'
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {Context} from '../../context/Context'
import {api_srv} from '../../services'


const { confirm } = Modal

const EmployeeWrapper = () => {

  const {showDrawer,setEmpList} = useContext(Context)
  useEffect(()=>{
    fetchEmployees()
},[])

const fetchEmployees=async ()=>{
  let response = await (await api_srv).fetch_employees()
  setEmpList(response.recordsets)
}


    
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
          title: 'Are you sure you want to replace this item?',
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
