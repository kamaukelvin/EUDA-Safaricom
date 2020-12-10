import { handle_api_error } from "./errorHandler";
import axios from "axios";

let api_url = "https://api.nexus.ke/api/web/v1/serviceprovider";



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
      let response = await call_api(body, config);
      sessionStorage.setItem("token", response.token)
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}




// base functions

async function call_api(body, config) {
  return new Promise(async function (resolve, reject) {
    axios
      .post(api_url, body, config)
      .then(function (response) {
        return resolve(response.data.result);
      })
      .catch(function (error) {
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
};
