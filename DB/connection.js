import mysql from 'mysql2'
const sql = mysql.createConnection({
    user:'root',
    database:'assignment3',
    host:"localhost"
})

export default sql