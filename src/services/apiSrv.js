import { handle_api_error } from "./errorHandler";
import axios from "axios";

let api_url = "http://142.93.246.194:50/";



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
          device_details: {
            device_type: "CHROME",
            device_category: "WEB",
            device_version: "V1",
            device_name: "CHROME",
            device_uuid: "1223455",
          },
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
      let endpoint ="all_employees"
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
        console.log("api is called", response.data)
        return resolve(response.data);
        
      })
      .catch(function (error) {
        console.log("api is NOT called", error)
        if (error.response) {
            return (error.response.data);
          
        } else {
          return reject(error);
        }
      });
  });
}



export {
  login,
  fetch_employees
};
