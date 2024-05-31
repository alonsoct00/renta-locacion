import axios from 'axios';

const client = axios.create({
  baseURL: 'https://graphql.datocms.com/',
  headers: {
    Authorization: '426e19d93f47af6e3fe8438449d1cb', // Reemplaza con tu token de DatoCMS
  },
});

export default client;