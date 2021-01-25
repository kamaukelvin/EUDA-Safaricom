import React, { useContext } from "react";
import Employee from "./Employee";
import { api_srv } from "../../services";
import PageLoader from "../../components/loaders/pageLoader";
import { useQuery } from "react-query";
import Error from '../../components/networkError'



const EmployeeWrapper = () => {

  const fetchEmployees = async () => {
    let response = await (await api_srv).fetch_employees();
    console.log("EMPLOYEE RESPONSE", response);
    return response;
  };

  const fetchAllocations = async () => {
    let response = await (await api_srv).fetch_device_allocations();
    console.log("ALLOCATIONS", response);
    return response;
  };

  const { isLoading, isSuccess, isError, data } = useQuery(
    "employees",
    fetchEmployees
  );

  const { isLoading:isLoadingAllocations, isSuccess:isSuccessAllocations, isError:isErrorAllocations, data:allocations } = useQuery(
    "device_allocations",
    fetchAllocations
  );

console.log("THE ERROR", isError, isErrorAllocations)
  return (
    <div>
      {isLoading && isLoadingAllocations && <PageLoader />}
      {isError && isErrorAllocations && <Error/> }
      {isSuccess && isSuccessAllocations && (
        <Employee
          data={data}
          allocations={allocations}
        />
      )}
    </div>
  );
};

export default EmployeeWrapper;
