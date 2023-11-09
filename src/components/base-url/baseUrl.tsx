import axios from "axios";

function BaseUrl() {
  axios.defaults.baseURL = "https://api.qibla-travel.uz";
  return null;
}

export default BaseUrl;