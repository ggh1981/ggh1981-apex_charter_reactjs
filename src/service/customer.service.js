import axios from 'axios';
import authHeader from './auth-header';

axios.defaults.headers.common = authHeader();

const API_URL = 'http://127.0.0.1:8080/api/customer/';

class CustomerService {
  async getRewards() {
    return axios
      .get(API_URL + 'rewards')
      .then(response => {
        if (response.data.username) {
          return response.data;
        }
      });
  }

  pullRewards(){
    return JSON.parse(localStorage.getItem('rewards'));
  }
}


export default new CustomerService();