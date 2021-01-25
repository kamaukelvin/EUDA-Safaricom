import React from "react";
import * as Icon from "react-feather";
import EmployeeList from "../../components/tabs/employeesList";
import EmployeeDetails from '../../components/tabs/employeeDetails'



const Employee = ({ data, allocations}) => {


  return (
    <div>
      <div className="content-body">
        <div className="container pd-x-0">
          <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                  <li className="breadcrumb-item">
                    <a href>Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href>Employees</a>
                  </li>
                </ol>
              </nav>
              <h5 className="mg-b-0 tx-spacing--1">
                <Icon.Users className="mr-3" /> Employees Section
              </h5>
            </div>
          </div>
     

          <div className="content ht-100v pd-0">
            <div className="content-body pd-0">
              <div className="contact-wrapper contact-wrapper-two">
                  <EmployeeList data={data} allocations={allocations} />
              

                <div className="contact-content">
                <EmployeeDetails/>
                </div>
                {/* contact-content */}
              </div>
              {/* contact-wrapper */}
            </div>
          </div>

          {/* content */}
        </div>
      </div>
    </div>
  );
};

export default Employee;
