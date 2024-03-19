import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products')
    }
}