import axios from 'axios'

export const defaultErrorHandler = error => {
  return Promise.reject(error);
};
export const errorHandler = error => {
  // if(error.response.status===500){
  //   localStorage.clear();
  //   localStorage.setItem("sessionExpired","sessionExpired")
  //   window.location.reload()
  // }
  return Promise.reject(error.response);
};
// const token = localStorage.getItem("token") !== null ? localStorage.getItem("token") : JSON.stringify({
//   accessToken: null,
//   userId: 0
// });
// const currentServiceTokenContext = JSON.parse(token);

// export const Header = {
//   Authorization: 'Bearer ' + currentServiceTokenContext.accessToken
// };
const getInitializedApi = (containType, responseType = 'json') => {
  // const token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : JSON.stringify({
  //   accessToken: null,
  //   userId: 0
  // });
  //const currentServiceTokenContext = token;
  // let header = {
  //   Authorization: 'Bearer wKcN5MmPzFrXESaAJFcD6zybIkviKtwn'
  // };
//console.log(localStorage.getItem("token"),"localStorage.getItem")
  //console.log(header,"jjj")
  let api = axios.create({
    // responseType: responseType,
    // withCredentials: false,
    headers : {
      'Authorization': 'Bearer wKcN5MmPzFrXESaAJFcD6zybIkviKtwn',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key' : 'fd248d7c3885464baf82d935545b7dae',
    },
  });
  return api;
};
// const getInitializedTokenApi = (applicationAccessTokenContext, containType) => {
//   let api = axios.create({
//     baseURL: BASE_URL_ESTIMATE,
//     responseType: 'json',
//     withCredentials: false,
//     headers: applicationAccessTokenContext ? applicationAccessTokenContext : {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'X-JsonResponseCase': 'camel',
//       'X-Requested-With': 'XMLHttpRequest',
//       'Access-Control-Allow-Origin': '*'
//     },
//   });
//   return api;
// };

export const convertToFormUrlencodedValue = params => {
  return Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');
};

export const post = (url, data) => {
  return getInitializedApi('application/json')
    .post(url, data)
    .catch(errorHandler || defaultErrorHandler);
};
export const put = (url, data) => {
  return getInitializedApi('application/json')
    .put(url, data)
    .catch(errorHandler || defaultErrorHandler);
};
export const get = (url, data) => {
  return getInitializedApi('application/json')
    .get(url, data)
    .catch(errorHandler || defaultErrorHandler);
};
export const getDownloadData = (url, data,Header, config) => {
  return getInitializedApi('application/vnd.ms-excel', 'blob')
    .post(url, data, Header, config)
    .catch(errorHandler || defaultErrorHandler);
};
// export const postUploadData = (url, formData) => {
//   return getInitializedApi('multipart/form-data; boundary=----WebKitFormBoundaryHJonIRac3rfb2EBf')
//     .post(url, formData)
//     .catch(errorHandler || defaultErrorHandler);
// };
// export const postToken = (url, data) => {
//   return getInitializedTokenApi(Header, 'application/json')
//     .post(url, data)
//     .catch(errorHandler || defaultErrorHandler);
// };

// export const postFormData = (url, data) => {
//   const formData = convertToFormUrlencodedValue(data);
//   return getInitializedApi(Header, 'application/x-www-form-urlencoded; charset=UTF-8')
//     .post(url, formData)
//     .catch(errorHandler || defaultErrorHandler);
// };


// export const deleteData = (url, data) => {
//   return getInitializedApi('application/json')
//     .get(url, data)
//     .catch(errorHandler || defaultErrorHandler);
// };
