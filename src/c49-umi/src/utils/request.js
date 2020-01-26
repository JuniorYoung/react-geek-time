import axios from "axios";

export default (url, opt = { type: 'get' }) => {
    return axios[opt.type](url);
}