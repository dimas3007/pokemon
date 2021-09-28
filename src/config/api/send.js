import axios from 'axios';
import API_PATH from './config';

const sendAPI = (data = {}) => {
  const sendAPI = {
    method: data.method,
    url: API_PATH + data.url,
    params: data.params,
    data: data.data,
  };

  const optionsAPI = new Promise((resolve, reject) => {
    axios
      .request(sendAPI)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject({
          status: 'error',
          error: error.response,
        });
      });
  });

  return optionsAPI;
};

export default sendAPI;
