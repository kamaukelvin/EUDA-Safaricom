import React,{useContext, useState} from "react";
import { Tabs } from "antd";
import * as Icon from "react-feather";
import { Scrollbars } from 'react-custom-scrollbars';
import {Context} from '../../../context/Context'




const EmployeeList = ({data, allocations}) => {

  const [keyword, setKeyword] = useState(null);
  const {setEmployee,setActiveAllocations} = useContext(Context)

// const   [loading, setLoading] = useState(false) 
const [hasMore, setHasMore] = useState(true)
   
const searchedKeyword = (event) => {
  let searchText = event.target.value;
  setKeyword(searchText);
};

const get_active_allocation=(id)=>{
  let filter = allocations.filter((allocation) => {
    
    return allocation.user_id === id && allocation.status==="ongoing";
  })
  setActiveAllocations(filter)
  console.log("individual allocation",filter)
}

const get_employee_details=(id)=>{
  let filter = data.filter((employee) => {
    return employee.id===id
  })
  setEmployee(filter)
}

  // {()=>this.handleClick(project.id)}
  //        { this.state.displayProject_id === project.id ?
  //          <DisplaySingleItem project={project} /> : 
  //           null
  //        }

  // let employees = data[0].sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))
  // .reduce((r, e) => {
 
  //   // get first letter of name of current element
  //   let alphabet = e.name[0];
   
  //   // if there is no property in accumulator with this letter create it
  //   if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }
   
  //   // if there is push current element to children array for that letter
  //   else r[alphabet].record.push(e);
   
  //   // return accumulator
  //   return r;
  // }, {});
   
  // let result = Object.values(employees);

  // let results = result.filter((dat)=>{
  //   if(keyword == null)return dat
  //   else if(dat.record.map((check)=>{
  //     console.log("KEYWORD IS NOT NUL")
  //      check.name.toLowerCase().includes(keyword.toLowerCase())
  //   }))
      
  //      {
  //     return dat
  //   }
      
  // })
  // let results = 
  // data.map((employee,index)=>{
  //   return(
  //     <div key={index} >
  //     <label id="contactA" className="contact-list-divider">
  //       {employee.alphabet}
  //     </label>
  //     {
  //     data.map((emp)=>(
  //            <div className="media" key={emp.id}>
        
  //            <div className="avatar avatar-sm ">
  //              <span className="avatar-initial rounded-circle bg-gray-700">
  //             {emp.name.charAt(0)}
  //              </span>
  //            </div>
  //            <a href>
  //            <div className="media-body mg-l-10">
  //              <h6 className="tx-13 mg-b-3">{emp.name}</h6>
  //              <span className="tx-12">{emp.username}</span>
  //            </div>
  //            </a>
           
  //          </div>
  //     ))}
 
  //     </div>
  //   )
    
  // })
  let results = data.map((emp)=>(
    <div className="media" key={emp.id}>

    <div className="avatar avatar-sm ">
      <span className="avatar-initial rounded-circle bg-gray-700">
     {emp.name.charAt(0)}
      </span>
    </div>
    <a href onClick={()=>{get_active_allocation(emp.id);get_employee_details(emp.id)}}>
    <div className="media-body mg-l-10">
      <h6 className="tx-13 mg-b-3">{emp.name}</h6>
      <span className="tx-12">{emp.username}</span>
    </div>
    </a>
  
  </div>
))

  const { TabPane } = Tabs;
  return (
    <Tabs tabPosition="left" >
      <TabPane tab={<Icon.Users size={18} />} key="1">
        <div className="contact-sidebar">
          <div className="contact-sidebar-header">
            <div className="search-form">
              <input
                type="search"
                className="form-control"
                placeholder="Search Employee"
                onChange={(e) => searchedKeyword(e)}
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
                {results}
              {/* {empList[0]
                .sort((a, b) => a.name.localeCompare(b.name,'es', { sensitivity: 'base' }))
                .reduce((r,e)=>{
                  let alphabet = e.name[0]
                  if(!r[alphabet]) r[alphabet] ={alphabet, record:[e]}
                  else r[alphabet].record.push(e)
                  return r
                },{})
                .map((emp) => {
                  console.log("emp is here", emp.name)
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
                           {emp.name.charAt(0)}
                            </span>
                          </div>
                          <a href>
                          <div className="media-body mg-l-10">
                            <h6 className="tx-13 mg-b-3">{emp.name}</h6>
                            <span className="tx-12">{emp.username}</span>
                          </div>
                          </a>
                        
                        </div>
                      </div>
                    );
                  } else {
                    return <div className="empName">{emp.Name}</div>;
                  }
                })} */}
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
