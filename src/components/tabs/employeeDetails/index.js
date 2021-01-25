import React,{useContext} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import ReplaceDeviceDrawer from '../../../components/drawers/replace_device'
import ReturnDeviceDrawer from '../../../components/drawers/return_device'
import { IoIosSwap } from "react-icons/io"
import { IoIosUndo } from "react-icons/io"
import {Context} from '../../../context/Context'
import { UserOutlined, LaptopOutlined, CheckOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import { Tabs, List, Empty, Modal } from "antd";
import * as Icon from "react-feather";

const EmployeeDetails = () => {

    const { TabPane } = Tabs;
    const { confirm } = Modal;
const {visible, returnVisible,showReturnDrawer, showDrawer, employee,activeAllocations} = useContext(Context)
console.log("THE EMPLOYEE", employee)
const accessories = [
    {
      title: "Lenovo Laptop Bag",
    },
    {
      title: "USB 3.0 VGA Adapter",
    },
    {
      title: "Lenovo Laptop Clock",
    },
    {
      title: "Thinkpad Mouse (Wired)",
    },
  ];

  const showConfirm = () => {
    confirm({
      centered: true,
      title: "Are you sure you want to return this device?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      onOk() {
        alert("api to set allocation to available");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
    return (
        <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              Personal Information
            </span>
          }
          key="1"
        >
          <div className="contact-content-body">
              { employee.length===0 ? <Empty description="select an employee to view details"/> :
              employee.map((details)=>(
                <div className="tab-content">
                
                <div
                  id="contactInformation"
                  className="tab-pane show active pd-20 pd-xl-25"
                >
                  <div className="d-flex align-items-center justify-content-between mg-b-25">
                    <h6 className="mg-b-0">
                      <Icon.User className=" mr-2" size={17} />{" "}
                      Personal Details
                    </h6>
                    <div className="d-flex">
                      <a
                        href="#modalEditContact"
                        data-toggle="modal"
                        className="btn btn-sm btn-white d-flex align-items-center mg-r-5"
                      >
                        <Icon.Edit2 size={14} />
                        <span className="d-none d-sm-inline mg-l-5">
                          {" "}
                          Edit
                        </span>
                      </a>
                    </div>
                  </div>
  
                  <div className="row row-sm">
                    <div className="col-6 col-sm-4">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        Full Name
                      </label>
                      <p className="tx-rubik mg-b-0">{details.name}</p>
                    </div>
                    <div className="col-6 col-sm-4">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        EK Number
                      </label>
                      <p className="tx-rubik mg-b-0">{details.eknumber}</p>
                    </div>
                    <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        Last Name
                      </label>
                      <p className="tx-rubik mg-b-0">Kibuchi</p>
                    </div>
                    <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        Username
                      </label>
                      <p className=" mg-b-0">{details.username}</p>
                    </div>
                    <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        User ID Number
                      </label>
                      <p className="mg-b-0">{details.nationalid}</p>
                    </div>
                    <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        Department ID
                      </label>
                      <p className="mg-b-0">
                       {details.department_id}
                      </p>
                    </div>
                  </div>
                  {/* row */}
                  <h6 className="mg-t-40 mg-b-20">
                    <Icon.Phone className=" mr-2" size={17} />
                    Contact Details
                  </h6>
                  <div className="row row-sm">
                    <div className="col-6 col-sm-4">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        Mobile Phone
                      </label>
                      <p className="tx-primary tx-rubik mg-b-0">
                        +254{details.phonenumber}
                      </p>
                    </div>
                    <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
                      <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                        Email Address
                      </label>
                      <p className="tx-primary tx-rubik mg-b-0">
                        null
                      </p>
                    </div>
                  </div>
                  {/* row */}
                </div>
                <div
                  id="contactLogs"
                  className="tab-pane pd-20 pd-xl-25"
                >
                  <div className="d-flex align-items-center justify-content-between mg-b-30">
                    <h6 className="tx-15 mg-b-0">
                      Call &amp; Message Logs
                    </h6>
                    <a
                      href="#"
                      className="btn btn-sm btn-white d-flex align-items-center"
                    >
                      <i className="icon ion-md-time mg-r-5 tx-16 lh--9" />{" "}
                      Clear History
                    </a>
                  </div>
                </div>
               
                
              </div>
              
              ))
         
            }
            {/* tab-content */}
          </div>
          {/* contact-content-body */}
        </TabPane>
        <TabPane
          tab={
            <span>
              <LaptopOutlined />
              Allocations
            </span>
          }
          key="2"
        >
          <div className="contact-content-body">
              {activeAllocations.length===0? <Empty description="No allocations assigned"/>:
              activeAllocations.map((allocation,i)=>{
              console.log("THE ALLOCATION", allocation)
                if (i===0){
                    return (
                    <Scrollbars style={{ width: "100%", height: "80%" }} autoHide autoHideTimeout={1000}>
                    <div className="tab-content">
                      <div
                        id="contactInformation"
                        className="tab-pane show active pd-20 pd-xl-25"
                      >
                              
                        <div className="d-flex align-items-center justify-content-between mg-b-25">
                          <h6 className="mg-b-0">
                            <LaptopOutlined className="mr-2" /> Allocation
                            Details
                          </h6>
                          <div className="d-flex">
                            <a
                              href
                              className="btn btn-sm btn-white d-flex align-items-center mg-r-5"
                            >
                              <Icon.Edit2 size={14} />
                              <span className="d-none d-sm-inline mg-l-5">
                                {" "}
                                Edit
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="row row-sm">
                          <div className="col-6 col-sm-4">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Laptop Name
                            </label>
                            <p className="tx-rubik mg-b-0">
                              Lenovo ThinkPad L480
                            </p>
                          </div>
                          <div className="col-6 col-sm-4">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Serial No.
                            </label>
                            <p className="tx-rubik mg-b-0">SPF1GNKDJ</p>
                          </div>
                          <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Asset No.
                            </label>
                            <p className="tx-rubik mg-b-0">S0943928</p>
                          </div>
                          <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              DNS Name
                            </label>
                            <p className=" mg-b-0">{allocation.dns_name}</p>
                          </div>
                          <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Ticket No.
                            </label>
                            <p className="mg-b-0">{allocation.ref_ticket}</p>
                          </div>
                          <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Replacement Date
                            </label>
                            <p className="mg-b-0">21/06/2023</p>
                          </div>
                          <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Allocation Status
                            </label>
                            <p className="tx-orange mg-b-0">{allocation.status}</p>
                          </div>
                          <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                            <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                              Nature of Request
                            </label>
                            <p className="mg-b-0">{allocation.nature_of_request}</p>
                          </div>
                        </div>
                        {/* row */}
                  
                        <h6 className="mg-t-40 mg-b-20">
                          {" "}
                          Accessories assigned to this device
                        </h6>
                        <List
                          itemLayout="horizontal"
                          dataSource={accessories}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={
                                  <CheckOutlined
                                    style={{
                                      fontSize: "14px",
                                      color: "#39b54a",
                                    }}
                                  />
                                }
                                title={item.title}
                              />
                            </List.Item>
                          )}
                        />
                        <br/>
                        <br/>
                        {visible && <ReplaceDeviceDrawer/>}
                            <a
                              href
                              onClick={() => showDrawer()}
                              className="btn btn-sm btn-success text-white mr-2"
                              style={{fontSize:"12px"}}
                            >
                              <IoIosSwap size={3} />
                              <span className="d-none d-sm-inline mg-l-5">
                                {" "}
                                Replace Device
                              </span>
                            </a>
                            {returnVisible && <ReturnDeviceDrawer/>}
                            <a
                              href
                              onClick={() => showConfirm()}
                              className="btn btn-sm btn-success text-white"
                              style={{fontSize:"12px"}}
                            >
                              <IoIosUndo size={14} />
                              <span className="d-none d-sm-inline mg-l-5">
                                {" "}
                                Return Device
                              </span>
                            </a>
                           
                      </div>
                     
                    </div>
                    </Scrollbars>
                    )}
    })
        
}
            {/* tab-content */}
          </div>
          {/* contact-content-body */}
        </TabPane>
      </Tabs>
    )
}

export default EmployeeDetails
