import connectDB from './conection.js';
import args from './config.js'

var conn = connectDB(args);

function selectAll() {
    return conn.query('SELECT * FROM posts', (error, results, fields) => {
        if (error) throw error;
        var resultados = [];
        console.log('\n\n');
        results.forEach(result => {
            resultados.push(JSON.stringify(result));
            console.log('\n' + JSON.stringify(result));
        })
        return resultados._rows;
    });
} 

function selectOne(id) {
    return conn.query(('SELECT * FROM posts where posts.id = ' + id ), (error, results, fields) => {
        if (error) throw error;
        var resultados = [];
        console.log('\n\n');
        results.forEach(result => {
            resultados.push(JSON.stringify(result));
            console.log('\n' + JSON.stringify(result));
        })
        return resultados._rows;
    });
} 

export {selectAll , selectOne, args}