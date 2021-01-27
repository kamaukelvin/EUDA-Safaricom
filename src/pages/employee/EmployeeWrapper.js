import React, { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { api_srv } from "../../services";
import PageLoader from "../../components/loaders/pageLoader";
import { useQuery } from "react-query";
import Error from '../../components/networkError'



const EmployeeWrapper = () => {

  const [data, setData] = useState([])
  const[loading, setLoading] = useState(false)
  const [allocations, setAllocations] = useState([])

  useEffect(()=>{
    fetchEmployees()
    fetchAllocations()
  },[])

  const fetchEmployees = async () => {
    setLoading(true)
    try{
      let response = await (await api_srv).fetch_employees();
      setData(response)
      setLoading(false)
    }catch(err){
      setLoading(false)

    }
  };

  const fetchAllocations = async () => {
    setLoading(true)
    try{
      let response = await (await api_srv).fetch_device_allocations();
      setAllocations(response)
    }catch(err){
      setLoading(false)
    }
    let response = await (await api_srv).fetch_device_allocations();
    return response;
  };

  // const { isLoading, isSuccess, isError,} = useQuery(
  //   "employees",
  //   fetchEmployees
  // );

  // const { isLoading:isLoadingAllocations, isSuccess:isSuccessAllocations, isError:isErrorAllocations, data:allocations } = useQuery(
  //   "device_allocations",
  //   fetchAllocations
  // );


  return (
    <div>
      {loading && <PageLoader description="Loading all employees Please wait..." />}
      {/* {isError && isErrorAllocations && <Error/> } */}
      {!loading && (
        <Employee
          data={data}
          allocations={allocations}
        />
      )}
    </div>
  );
};

export default EmployeeWrapper;
