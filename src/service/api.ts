import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const api = axios.create({
    baseURL: "http://localhost:3333/",
});

const user = cookies.get('user');

user && (api.defaults.headers.common['Authorization'] = `${user.accessToken}`);