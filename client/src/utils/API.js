import axios from "axios";

export default {
  search: (searchTerm) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}`);
  } 
};
