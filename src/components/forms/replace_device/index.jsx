import React, { useContext } from "react";
import { Form, Input, Button, Select, Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Context } from "../../../context/Context";
import { useQuery } from "react-query";
import { api_srv } from "../../../services";
import PageLoader from "../../../components/loaders/pageLoader/";

const { confirm } = Modal;
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const fetchDevices = async () => {
  let response = await (await api_srv).fetch_all_devices();
  return response;
};

const ReplaceDevice = ({ asset_tag, ticket }) => {
  
  const { onClose, employee } = useContext(Context);
  const { isLoading, isSuccess, data } = useQuery("devices", fetchDevices);

  const openNotificationWithIcon = (type,message) => {
    notification[type]({
      message: message,
      placement:'bottomRight',
  
    });
  };
  const post_to_erp = async (transaction_code) => {
    try {
      let resp = await (await api_srv).post_device(
        transaction_code,
        ticket,
        employee,
        asset_tag
      );
      openNotificationWithIcon('success','Device posted successfully to Erp Liability Table')

    } catch (err) {
      let error = await err;
      console.log("THE ERROR POSTING",error)
      openNotificationWithIcon('error','Device posting was unsuccessful')
    }
  };

  const onFinish = (values) => {
    if (values.transaction_code === "disposed_laptop") {
      confirm({
        centered: true,
        title:
          "You have chosen to purchase this device, do you wish to Proceed?",
        icon: <ExclamationCircleOutlined />,
        content: `${values.device}`,
        onOk() {
          console.log("Success:", values);
          post_to_erp(values.transaction_code);
          onClose();
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    } else {
      console.log("Success:", values);
      onClose();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {isLoading && <PageLoader description="Please wait..." />}
      {isSuccess && (
        <Form
          layout="vertical"
          name="replace_device"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Choose Device"
            name="device"
            rules={[
              {
                required: true,
                message: "Please select a device!",
              },
            ]}
          >
            <Select>
              {data
                .filter((device) => {
                  return (
                    device.device_availability === "yes" &&
                    device.device_status === "available"
                  );
                })
                .map((option) => {
                  return (
                    <Select.Option value={`${option.device_model}-${option.serial_number}`}>
                      {option.device_model} Serial Number-{option.serial_number}
                    </Select.Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Ticket Number"
            name="ticket"
            rules={[
              {
                required: true,
                message: "Please input your ticket number!",
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
                message: "Please input duration!",
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
                message: "Please select a Request!",
              },
            ]}
          >
            <Select>
              <Select.Option value="new employee">New Employee</Select.Option>
              <Select.Option value="temporary employee">
                Temporary Employee
              </Select.Option>
              <Select.Option value="contractor">Contractor</Select.Option>
              <Select.Option value="replacement">Replacement</Select.Option>
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
            label="Transaction Code"
            name="transaction_code"
            value="transaction_code"
            rules={[
              {
                required: true,
                message: "Please select a transaction code!",
              },
            ]}
          >
            <Select>
              <Select.Option value="lost_laptop">Lost Laptop</Select.Option>
              <Select.Option value="disposed_laptop">
                Disposed Laptop
              </Select.Option>
              {/* <Select.Option value="no">No</Select.Option> */}
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" className="btn-success" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ReplaceDevice;
