import { handle_api_error } from "./errorHandler";
import axios from "axios";

let api_url = "http://64.225.3.241:40/api/";



// Login

function login({ username, password }) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    sessionStorage.clear()
      const body = {
        resource: "login",
        action: "login",
        data: {
          username: username,
          password: password,
        },
      };
      let response = await get_api(body, config);
      sessionStorage.setItem("token", response.token)
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

function return_device(device_id) {
  return new Promise(async function (resolve, reject) {
    try {
    
      
      let endpoint = "updateAllocationStatus"
      const body = {
        
          "device_id": `${device_id}`,
          "status": "terminated"
      
      };
      console.log("the body of replace",body)
      let response = await put_api(endpoint,body);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

function fetch_employees() {
  return new Promise(async function (resolve, reject) {
    try {
      let endpoint ="getAllEmployees"
      let response = await get_api(endpoint);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

function fetch_device_allocations() {
  return new Promise(async function (resolve, reject) {
    try {
      let endpoint ="getAllDevicesAllocations"
      let response = await get_api(endpoint);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}
function fetch_all_devices() {
  return new Promise(async function (resolve, reject) {
    try {
      let endpoint ="getAllDevices"
      let response = await get_api(endpoint);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

function post_device(  
  transaction_code,
  ticket,
  employee,
  asset_tag) {
  return new Promise(async function (resolve, reject) {
    try {
    
      
      let endpoint = "addNewEpr"
      const body = {
          "transaction_code": transaction_code,
          "request_number": ticket,
          "requestor_username": employee.map((detail)=>detail.username).toString(),
          "facilitator_username": "test",
          "asset_type_lookup": "LAPTOP",
          "asset_tag": asset_tag,
          "asset_serial": "123456",
          "export_flag": "E"
      };
      console.log("the body of post to erp table",body)
      let response = await post_api(endpoint,body);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}




// base functions

async function get_api(endpoint) {
  return new Promise(async function (resolve, reject) {
    axios
      .get(api_url + endpoint)
      .then(function (response) {
        return resolve(response.data);
        
      })
      .catch(function (error) {
        console.log("THE API ERROR", error)
        if (error.response) {
          if (error.response.status === 500) {
            return reject(handle_api_error(error.response.data));
          }
        } else {
          return reject(error);
        }
      });
  });
}

async function put_api(endpoint, body) {
  return new Promise(async function (resolve, reject) {
    axios
      .put(api_url + endpoint, body)
      .then(function (response) {
        return resolve(response.data);
        
      })
      .catch(function (error) {
        console.log("THE API put ERROR", error)
        if (error.response) {
          if (error.response.status === 500) {
            return reject(handle_api_error(error.response.data));
          }
        } else {
          return reject(error);
        }
      });
  });
}

async function post_api(endpoint, body) {
  return new Promise(async function (resolve, reject) {
    axios
      .post(api_url + endpoint, body)
      .then(function (response) {
        return resolve(response.data);
        
      })
      .catch(function (error) {
        console.log("THE API post ERROR", error)
        if (error.response) {
          if (error.response.status === 500) {
            return reject(handle_api_error(error.response.data));
          }
        } else {
          return reject(error);
        }
      });
  });
}



export {
  login,
  fetch_employees,
  fetch_device_allocations,
  fetch_all_devices,
  return_device,
  post_device
};
