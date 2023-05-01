import axios from "axios";

export default function api() {
    return axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json',
});
}
