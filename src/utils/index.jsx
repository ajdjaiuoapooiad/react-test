import axios from 'axios';
import data from '../data';


export const customFetch = axios.create({
    data: data
});