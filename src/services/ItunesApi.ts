import axios from 'axios';

const API_URL = 'https://itunes.apple.com/search';

export class ApiService {
  static search(term: string) {
    return axios.get(`${API_URL}?term=${term}`);
  }
}
