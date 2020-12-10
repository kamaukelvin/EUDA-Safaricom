import React from "react";
import * as Icon from "react-feather";

const Dashboard = ({ collapsed, toggleSidebar }) => {
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
                </ol>
              </nav>
              <h4 className="mg-b-0 tx-spacing--1">Welcome to Dashboard</h4>
            </div>
          </div>

          <div className="card">
            <div className="card-body pd-0">
              <div className="row no-gutters">
                <div className="col col-sm-6 col-lg">
                  <div className="crypto">
                    <div className="media mg-b-10">
                      <div className="wd-55 ht-55 bd bd-2 bd-success tx-success rounded-circle align-items-center justify-content-center op-6 d-none d-sm-flex">
                        <Icon.Server size={30} />
                      </div>
                      <div className="media-body pd-l-8">
                        <h6 className="tx-14 tx-spacing-1 tx-uppercase tx-semibold mg-b-5">
                          Devices Allocated
                        </h6>
                        <div className="d-flex align-items-baseline tx-rubik">
                          <h5 className="tx-20 mg-b-0">136</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-sm-6 col-lg">
                  <div className="crypto">
                    <div className="media mg-b-10">
                      <div className="wd-55 ht-55 bd bd-2 bd-info tx-info rounded-circle align-items-center justify-content-center op-6 d-none d-sm-flex">
                        <Icon.Monitor size={30} />
                      </div>
                      <div className="media-body pd-l-8">
                        <h6 className="tx-14 tx-spacing-1 tx-uppercase tx-semibold mg-b-5">
                          Available Devices
                        </h6>
                        <div className="d-flex align-items-baseline tx-rubik">
                          <h5 className="tx-20 mg-b-0">3699</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-sm-6 col-lg">
                  <div className="crypto">
                    <div className="media mg-b-10">
                      <div className="wd-55 ht-55 bd bd-2 bd-orange tx-orange rounded-circle align-items-center justify-content-center op-6 d-none d-sm-flex">
                        <Icon.ShoppingCart size={30} />
                      </div>
                      <div className="media-body pd-l-8">
                        <h6 className="tx-14 tx-spacing-1 tx-uppercase tx-semibold mg-b-5">
                          Total Purchases
                        </h6>
                        <div className="d-flex align-items-baseline tx-rubik">
                          <h5 className="tx-20 mg-b-0">26</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-sm-6 col-lg">
                  <div className="crypto">
                    <div className="media mg-b-10">
                      <div className="wd-55 ht-55 bd bd-2 bd-danger tx-danger rounded-circle align-items-center justify-content-center op-6 d-none d-sm-flex">
                        <Icon.Settings size={30} />
                      </div>
                      <div className="media-body pd-l-8">
                        <h6 className="tx-14 tx-spacing-1 tx-uppercase tx-semibold mg-b-5">
                          Ongoing Repairs
                        </h6>
                        <div className="d-flex align-items-baseline tx-rubik">
                          <h5 className="tx-20 mg-b-0">99</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-xs">
            <div className="col-lg-8 col-xl-7 mg-t-10">
              <div className="card">
                <div className="card-header pd-y-20 d-md-flex align-items-center justify-content-between">
                  <h6 className="mg-b-0">A title goes here</h6>
                </div>
                {/* card-header */}
                <div className="card-body pos-relative pd-0">
                  <div className="pos-absolute t-20 l-20 wd-xl-100p z-index-10">
                    Content here
                  </div>
                  <div className="chart-one">
                    <div id="flotChart" className="flot-chart" />
                  </div>
                  {/* chart-one */}
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </div>
            <div className="col-lg-4 col-xl-5 mg-t-10">
              <div className="card">
                <div className="card-header pd-t-20 pd-b-0 bd-b-0">
                  <h6 className="mg-b-5">Quick Links</h6>
                  <p className="tx-12 tx-color-03 mg-b-0">
                    A lsit of quick links
                  </p>
                </div>
                {/* card-header */}
                <div className="card-body pd-20"></div>
                {/* card-body */}
              </div>
              {/* card */}
            </div>
          </div>
          {/* row */}
        </div>
    
      </div>
    </div>
  );
};

export default Dashboard;
