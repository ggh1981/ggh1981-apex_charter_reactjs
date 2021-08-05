import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:8080/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'auth');
  }
}

export default new UserService();