/*****************************************************************************************
 * @Author: Luis Starlino
 * @Date: 2023-12-14 20:15
 * @Description: application core
 *****************************************************************************************/

// ===== IMPORTS =====
import * as http from 'http';


// ===== CONSTANTS =====
const port = process.env.PORT;
const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {});

server.listen(port, ()=> console.log(`--- NEXUS STARTED ON THE PORT ${port} ---`));