import React from "react";
import { Switch } from "react-router-dom";

import RouteWithProps from "../../shared/routes/RouteWithProps";
import routes from "../../routes";

import DashboardView from "./DashboardWrapper";
import EmployeeView from "../employee/EmployeeWrapper";

const DashboardPage = () => {
  return (
    <Switch>
      <RouteWithProps exact path={routes.dashboard} component={DashboardView} />
      <RouteWithProps exact path={routes.employee} component={EmployeeView} />
 
    </Switch>
  );
};

export default DashboardPage;