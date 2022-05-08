import { selectAll, selectOne, args} from './queries.js';
import expres from 'express'

const PORT = args.port;
const expressApp = expres();


expressApp.get("/:", (req, res) =>{
    res.send(JSON.stringify(selectAll._rows));
});

expressApp.get("/:id", (req, res) => {
    res.send(JSON.stringify(selectOne(req.params.id)));
});

expressApp.listen(PORT, () =>{
    console.log(`Servidor levantado en el puerto ${PORT}`)
}); 


// const listPosts = function (req, res) {
//     let url = new URL(`http://${args.host}:${req.url}`);
//     console.log(url);
//     let data = "";
//     let chunkIndex = 0;

//     req.on('data', (chunk) => {
//         data += chunk;
//         console.log(chunkIndex++);
//     })
//     // if(req.method == 'GET'){
        
//     //     res.writeHead(200);
//     //     res.end(JSON.stringify(selectAll._rows));
        
//     // }else if(req.method == 'POST'){ 
//     //     res.writeHead(200);
//     //     res.end('HOlA');
//     // }

//     req.on('end', () => {
//         console.log(data);
//         res.end('RECIBIDO');
//     })
    
// }

// const serv = http.createServer(listPosts);
