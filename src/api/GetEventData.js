import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function getEventDetails(){
    const url=BASE_URL+`events/getdata/`
    try
    {
        const response = await axios.get(url);
        //console.log(response.data);
        return response.data;

    }catch(error){
        console.log(error);
        throw error;
    }
}