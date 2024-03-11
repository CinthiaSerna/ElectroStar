import mysql from 'mysql';

export const conexion = mysql.createConnection({
    host: "localhost",
    database: "electrostar",
    user: "root",
    password: ""
});

export default conexion;
