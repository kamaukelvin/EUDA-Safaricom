import React, {useContext} from 'react'
import { Form, Input, Button, Select, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {Context} from '../../../context/Context'

const {confirm} = Modal
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }

const ReplaceDevice = () => {

    const {onClose}= useContext(Context)
    const onFinish = values => {
        if(values.purchase==="yes"){
            confirm({
                centered: true,
                title: 'You have chosen to purchase this device, do you wish to Proceed?',
                icon: <ExclamationCircleOutlined />,
                content: `${values.device}`,
                onOk() {
                    console.log('Success:', values)
                    onClose()
                },
                onCancel() {
                  console.log('Cancel');
                },
              });
        }else{
            console.log('Success:', values);
            onClose()
        }
        
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Form
        layout="vertical"
      name="replace_device"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
         <Form.Item 
         label="Choose Device"
         name="device"
         rules={[
           {
             required: true,
             message: 'Please select a device!',
           },
         ]}
      
      >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item
        label="Ticket Number"
        name="ticket"
        rules={[
          {
            required: true,
            message: 'Please input your ticket number!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Duration(in months)"
        name="duration"
        rules={[
          {
            required: true,
            message: 'Please input duration!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
         label="Nature of Request"
         name="request"
         rules={[
           {
             required: true,
             message: 'Please select a Request!',
           },
         ]}
      
      >
          <Select>
            <Select.Option value="demo">New Employee</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item 
         label="Choose Accessories"
         name="accessories"
         rules={[
           {
             required: false,
           },
         ]}
      
      >
          <Select>
            <Select.Option value="demo">Charger</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item 
         label="Purchase this device"
         name="purchase"
         rules={[
           {
             required: true,
             message: 'Please select whether to purchase or not!',
           },
         ]}
      
      >
          <Select>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" className="btn-success" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}

export default ReplaceDevice
