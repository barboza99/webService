import args from './config.js'
import http from 'http'
import connectDB from './conection.js';

var conn = connectDB(args);

var selectALL = conn.query('SELECT * FROM posts', (error, results, fields) => {
    if (error) throw error;
    var resultados = [];
    console.log('\n\n');
    results.forEach(result => {
        resultados.push(JSON.stringify(result));
        console.log('\n' + JSON.stringify(result));
    })
    return resultados._rows;
});

const listPosts = function (req, res) {
    res.writeHead(200);
    res.end(JSON.stringify(selectALL._rows));
}

const serv = http.createServer(listPosts);

serv.listen(args.port, args.host, () => {
    console.log(`Server is running on http://${args.host}:${args.port}`);
});