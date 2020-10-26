import { handle_api_error } from "./errorHandler";
import axios from "axios";

let api_url = "https://api.nexus.ke/api/web/v1/serviceprovider";
let upload_url = "https://api.nexus.ke/api/upload/v1/service_provider";

// register service provider

function register({ pin, category, email }) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        resource: "registration",
        action: "register",
        data: {
          pin: pin,
          category_code: category,
          email: email,
        },
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

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

// List Service Categories

function listCategories() {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        resource: "category",
        action: "list",
        data: {},
      };

      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Check if Pin Exists

function checkPin(pin) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        resource: "registration",
        action: "pin_exists",
        data: {
          pin: pin,
        },
      };

      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Verify token sent to email

function verifyEmail(token) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        resource: "registration",
        action: "validation",
        data: {
          email_token: token,
        },
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Reset password
function sendUsername(username) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        resource: "forgot_password",
        action: "request",
        data: {
          username: username,
        },
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Setup credentials

function setupCredentials({
  names,
  contact,
  employee_ref,
  username,
  password,
}) {
  return new Promise(async function (resolve, reject) {
    try {
      let setup_id = localStorage.getItem("REGISTRATION_ID");
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        resource: "registration",
        action: "credential",
        data: {
          registration_setup_id: setup_id,
          tnc: true,
          names: names,
          contact: contact,
          employee_ref: employee_ref,
          password: password,
          username: username,
        },
      };
      console.log("the credentials body", body);
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Add Kyc Details

function addIndividualKycInfo({
  name,
  kra_pin,
  email,
  contact,
  license,
  description,
  id_number,
  address,
  location,
  category,
}) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token"),
        },
      };

      const body = {
        resource: "kyc",
        action: "add_individual_kyc",
        data: {
          update: {
            category: category,
            service_provider_name: name,
            pin: kra_pin,
            emails: email.split(),
            contacts: contact.split(),
            license_no: license,
            description: description,
            ID_number: id_number,
            address: address,
            physical_address: location,
            image_path: "ret/terrain/photo.jpg",
          },
        },
      };

      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}
// Add Kyc Details Company

function addCompanyKycInfo({
  name,
  kra_pin,
  email,
  contact,
  certificate_number,
  description,
  address,
  location,
  category,
}) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token"),
        },
      };

      const body = {
        resource: "kyc",
        action: "add_company_kyc",
        data: {
          update: {
            "category":category,
            "service_provider_name":name,
            "pin":kra_pin,
            "emails" : email.split(),
            "contacts" : contact.split(),
            "description":description,
            "address":address,
            "physical_address":location,
            "image_path":"ret/terrain/photo.jpg",
            "certificate_no":certificate_number
          },
        },
      };

      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Notification

function fetchNotifications() {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token"),
        },
      };

      const body = {
        resource: "notifications",
        action: "list",
        data: {},
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// verify reset Token
function verifyResetToken(token) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        resource: "forgot_password",
        action: "validation",
        data: {
          email_token: token,
        },
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Check kyc stataus

function check_kyc() {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token"),
        },
        timeout: 15000,
      };
      const body = {
      	"resource":"kyc",
        "action":"check_sp_details",
          "data" : {  

          }  
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// reset password
function reset(request_id, password) {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000,
      };
      const body = {
        resource: "forgot_password",
        action: "change",
        data: {
          password_change_request_id: request_id,
          password: password,
        },
      };
      let response = await call_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// Add Kyc Joint Owners

function addKycJointOwners(jointOwners) {
  return new Promise(async function (resolve, reject) {
    jointOwners.map(
      async ({
        name,
        email,
        residency,
        contact,
        passport,
        kra_pin,
        id_number,
      }) => {
        try {
          let config = {
            headers: {
              "Content-Type": "application/json",
              token: sessionStorage.getItem("token"),
            },
          };

          const body = {
            resource: "kyc",
            action: "add_service_provider_director",
            data: {
              service_provider_id: 16,
              director: {
                names: name,
                email: email,
                image: "joint owner.jpg",
                residency: residency,
                contact: contact,
                passport_number: passport,
                pin: kra_pin,
                ID_number: id_number,
              },
            },
          };
          let response = await call_api(body, config);
          return resolve(response);
        } catch (err) {
          return reject(err);
        }
      }
    );
  });
}
// Add Kyc Partners/ Directors 

function addKycPartners(directors) {
  return new Promise(async function (resolve, reject) {
    directors.map(
      async ({
        name,
        email,
        residency,
        contact,
        passport,
        kra_pin,
        id_number,
      }) => {
        try {
          let config = {
            headers: {
              "Content-Type": "application/json",
              token: sessionStorage.getItem("token"),
            },
          };

          const body = {
            resource: "kyc",
            action: "add_service_provider_director",
            data: {
              service_provider_id: 16,
              director: {
                names: name,
                email: email,
                image: "joint owner.jpg",
                residency: residency,
                contact: contact,
                passport_number: passport,
                pin: kra_pin,
                ID_number: id_number,
              },
            },
          };
          let response = await call_api(body, config);
          return resolve(response);
        } catch (err) {
          return reject(err);
        }
      }
    );
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

async function upload_api(fileName, file) {
  return new Promise(async function (resolve, reject) {
    const fmData = new FormData();
    const uploadconfig = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    fmData.append(fileName, file);
    axios
      .post(upload_url, fmData, uploadconfig)
      .then(function (response) {
        return resolve(response.data);
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
  register,
  login,
  sendUsername,
  listCategories,
  checkPin,
  verifyEmail,
  setupCredentials,
  addIndividualKycInfo,
  addCompanyKycInfo,
  upload_api,
  addKycJointOwners,
  fetchNotifications,
  verifyResetToken,
  reset,
  check_kyc,
  addKycPartners
};
