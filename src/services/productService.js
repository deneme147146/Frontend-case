import axios from "axios";

export default class ProductService{
    async getProducts(){
        return await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products')
    }

    async getByProductId(id){
        return await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`)
    }
}