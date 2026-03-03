import { Client } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

export default client;