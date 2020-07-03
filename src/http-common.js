import axios from "axios";

export default axios.create({
  baseURL: "https://api.geocollections.info",
  headers: {
    "Content-type": "application/json"
  }
});