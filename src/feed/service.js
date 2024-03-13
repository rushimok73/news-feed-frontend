import axios from 'axios';

const ITEMS_API = `http://localhost:8080/api/items/`;

export const findItems = async () => {
    const response = await axios.get(ITEMS_API);
    console.log(response)
    return response.data;
}