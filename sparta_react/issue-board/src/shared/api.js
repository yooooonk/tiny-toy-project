import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/angular/angular-cli';

axios.defaults.baseURL = BASE_URL;

export const IssueApi = {
  getIssues: (page = 1) => {
    return axios.get(`/issues`, {
      params: {
        page
      }
    });
  },
  getIssue: (id) => {}
};
