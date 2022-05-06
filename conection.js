import mysql from 'mysql2';

export default function connectDB(args) {
    try {
        var conexion = mysql.createConnection({
            host: args.host,
            database: args.database,
            user: args.user,
            password: args.password
        });

        conexion.connect((err) => {
            if (err) {
                console.error('Error de conexión: ' + err.sqlMessage);
                return;
            }
            console.log('Conectado con el identificador ' + conexion.threadId);
        });

        return conexion;
    } catch (e) {
        console.error(e);
    }
}

// conexion.query('SELECT * FROM posts', (error, results, fields) =>{
//     if(error) throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// conexion.end();
