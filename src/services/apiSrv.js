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



export {
  login,
  fetch_employees,
  fetch_device_allocations,
  fetch_all_devices
};
