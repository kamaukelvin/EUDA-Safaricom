import React from "react";
import { Tabs, List } from "antd";
import * as Icon from "react-feather";
import {
  UserOutlined,
  LaptopOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const Employee = ({ accessories }) => {
  const { TabPane } = Tabs;

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
                <div className="contact-navleft">
                  <nav className="nav flex-column">
                    <a
                      href="#tabContact"
                      className="nav-link active"
                      data-toggle="tab"
                    >
                      <span
                        data-toggle="tooltip"
                        title="All Contacts"
                        data-placement="right"
                      >
                        <Icon.Users />
                      </span>
                    </a>
                    <a
                      href="#tabPhoneCall"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <span
                        data-toggle="tooltip"
                        title="Recently Searched"
                        data-placement="right"
                      >
                        <Icon.Clock />
                      </span>
                    </a>
                    <a
                      href="#tabFavorites"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      <span
                        data-toggle="tooltip"
                        title="Favorites"
                        data-placement="right"
                      >
                        <Icon.Star />
                      </span>
                    </a>
                  </nav>
                </div>
                <div className="contact-sidebar">
                  <div className="contact-sidebar-header">
                    <div className="search-form">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search Employee"
                      />
                    </div>
                    <a href="#" className="btn btn-xs btn-icon btn-success">
                      <span data-toggle="tooltip" title="Search an employee">
                        <Icon.Search />
                      </span>
                    </a>
                    {/* contact-add */}
                  </div>
                  {/* contact-sidebar-header */}
                  <div className="contact-sidebar-body">
                    <div className="tab-content">
                      <div
                        id="tabContact"
                        className="tab-pane fade active show"
                      >
                        <div className="pd-y-20 pd-x-10 contact-list">
                          <label id="contactA" className="contact-list-divider">
                            A
                          </label>
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <span className="avatar-initial rounded-circle bg-gray-700">
                                A
                              </span>
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Abigail Johnson</h6>
                              <span className="tx-12">abigail@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <img
                                src="https://via.placeholder.com/500"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Archie Cantones</h6>
                              <span className="tx-12">archie@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <span className="avatar-initial rounded-circle bg-primary">
                                a
                              </span>
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Allan Rey Palban</h6>
                              <span className="tx-12">allanr@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <label id="contactB" className="contact-list-divider">
                            B
                          </label>
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <img
                                src="https://via.placeholder.com/500"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Bruno Kibuchi</h6>
                              <span className="tx-12">bkibuchi@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <span className="avatar-initial rounded-circle bg-indigo">
                                B
                              </span>
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Brandibelle Yap</h6>
                              <span className="tx-12">byap@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <span className="avatar-initial rounded-circle bg-gray-800">
                                B
                              </span>
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Brejette Bunggay</h6>
                              <span className="tx-12">brej@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                        </div>
                      </div>
                      <div id="tabPhoneCall" className="tab-pane fade">
                        <div className="pd-y-20 pd-x-10 contact-list">
                          <label className="contact-list-divider">
                            Recent Searches
                          </label>
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <img
                                src="https://via.placeholder.com/500"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Camille Audrey</h6>
                              <span className="tx-12">
                                camille@safaricom.com
                              </span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <div className="media">
                            <div className="avatar avatar-sm avatar-offline">
                              <span className="avatar-initial rounded-circle bg-success">
                                E
                              </span>
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Elvis Vircede</h6>
                              <span className="tx-12">elvis@safaricom.com</span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                        </div>
                        {/* contact-list */}
                      </div>
                      {/* tab-pane */}
                      <div id="tabFavorites" className="tab-pane fade">
                        <div className="pd-y-20 pd-x-10 contact-list">
                          <label className="contact-list-divider">
                            My Favorites
                          </label>
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <img
                                src="https://via.placeholder.com/500"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Archie Cantones</h6>
                              <span className="tx-12">
                                archie@safaricom.com
                              </span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                          <div className="media">
                            <div className="avatar avatar-sm ">
                              <img
                                src="https://via.placeholder.com/500"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="media-body mg-l-10">
                              <h6 className="tx-13 mg-b-3">Brenda Aceron</h6>
                              <span className="tx-12">
                                brenda@safaricom.com
                              </span>
                            </div>
                            {/* media-body */}
                          </div>
                          {/* media */}
                        </div>
                      </div>
                      {/* tab-pane */}
                    </div>
                    {/* tab-content */}
                  </div>
                  {/* contact-sidebar-body */}
                </div>
                {/* contact-sidebar */}

                <div className="contact-content">
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
                        <div className="tab-content">
                          <div
                            id="contactInformation"
                            className="tab-pane show active pd-20 pd-xl-25"
                          >
                            <div className="d-flex align-items-center justify-content-between mg-b-25">
                              <h6 className="mg-b-0">
                                <Icon.User
                                  className=" mr-2"
                                  size={17}
                                />{" "}
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
                                  First Name
                                </label>
                                <p className="tx-rubik mg-b-0">Brian</p>
                              </div>
                              <div className="col-6 col-sm-4">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  Middle Name
                                </label>
                                <p className="tx-rubik mg-b-0">Bruno</p>
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
                                <p className=" mg-b-0">BKibuchi</p>
                              </div>
                              <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  User ID Number
                                </label>
                                <p className="mg-b-0">29293541</p>
                              </div>
                              <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  Department
                                </label>
                                <p className="mg-b-0">
                                  Converged Service Operations
                                </p>
                              </div>
                            </div>
                            {/* row */}
                            <h6 className="mg-t-40 mg-b-20">
                              <Icon.Phone
                                className=" mr-2"
                                size={17}
                              />
                              Contact Details
                            </h6>
                            <div className="row row-sm">
                              <div className="col-6 col-sm-4">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  Mobile Phone
                                </label>
                                <p className="tx-primary tx-rubik mg-b-0">
                                  +254 712 345 678
                                </p>
                              </div>
                              <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  Email Address
                                </label>
                                <p className="tx-primary tx-rubik mg-b-0">
                                  bkibuchi@safaricom.co.ke
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
                          {/* tab-pane */}
                        </div>
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
                                <p className=" mg-b-0">LTTECH976</p>
                              </div>
                              <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  Ticket No.
                                </label>
                                <p className="mg-b-0">REQ00784883</p>
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
                                <p className="tx-orange mg-b-0">Ongoing</p>
                              </div>
                              <div className="col-sm-4 mg-t-20 mg-sm-t-30">
                                <label className="tx-12 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">
                                  Nature of Request
                                </label>
                                <p className="mg-b-0">New Employee</p>
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
                            ,
                          </div>
                        </div>
                        {/* tab-content */}
                      </div>
                      {/* contact-content-body */}
                    </TabPane>
                  </Tabs>
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
