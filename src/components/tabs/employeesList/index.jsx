import React from "react";
import { Tabs } from "antd";
import * as Icon from "react-feather";
import { Scrollbars } from 'react-custom-scrollbars';

const EmployeeList = () => {
  let previousChar = "";
  const empList = [
    { name: "Kelvin", id: 1 },
    { name: "Bruno", id: 2 },
    { name: "Gaodlife", id: 3 },
    { name: "Bbodlife", id: 4 },
    { name: "Yfodlife", id: 5 },
    { name: "Gcodlife", id: 6 },
    { name: "Rvodlife", id: 7 },
    { name: "Inodlife", id: 8 },
    { name: "Pqodlife", id: 9 },
    { name: "Aaodlife", id: 10 },
    { name: "Mrodlife", id: 11 },
    { name: "Lojdlife", id: 12 },
    { name: "Rpodlife", id: 13 },
    { name: "Yomdlife", id: 14 },
  ];

  const { TabPane } = Tabs;
  return (
    <Tabs tabPosition="left">
      <TabPane tab={<Icon.Users size={18} />} key="1">
        <div className="contact-sidebar">
          <div className="contact-sidebar-header">
            <div className="search-form">
              <input
                type="search"
                className="form-control"
                placeholder="Search Employee"
              />
            </div>
            <a href className="btn btn-xs btn-icon btn-success">
              <span data-toggle="tooltip" title="Search an employee">
                <Icon.Search color="#fff" />
              </span>
            </a>
          </div>
         
          <div className="contact-sidebar-body">
          <Scrollbars style={{ width: "100%", height: "80%" }} autoHide autoHideTimeout={1000}>
            <div className="pd-y-20 pd-x-10 contact-list">
              {empList
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((emp) => {
                  if (emp.name.charAt(0) !== previousChar) {
                    previousChar = emp.name.charAt(0);
                    return (
                      <div key={"c" + emp.id}>
                        <label id="contactA" className="contact-list-divider">
                          {emp.name.charAt(0)}
                        </label>
                        <div className="media">
                          <div className="avatar avatar-sm ">
                            <span className="avatar-initial rounded-circle bg-gray-700">
                              A
                            </span>
                          </div>
                          <a href>
                          <div className="media-body mg-l-10">
                            <h6 className="tx-13 mg-b-3">{emp.name}</h6>
                            <span className="tx-12">abigail@safaricom.com</span>
                          </div>
                          </a>
                          {/* media-body */}
                        </div>
                      </div>
                    );
                  } else {
                    return <div className="empName">{emp.Name}</div>;
                  }
                })}
            </div>
            </Scrollbars>
          </div>
         
        </div>
      </TabPane>
      <TabPane tab={<Icon.Clock size={18} />} key="2">
        <div className="pd-y-20 pd-x-10 contact-list">
          <label className="contact-list-divider" >Recent Searches</label>
        </div>
      </TabPane>
      <TabPane tab={<Icon.Star size={18} />} key="3">
        <div className="pd-y-20 pd-x-10 contact-list">
          <label className="contact-list-divider">My Favorites</label>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default EmployeeList;
