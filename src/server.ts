/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-14 20:15
* @Description: application core
*****************************************************************************************/

// ===== IMPORTS =====
import { app } from './app';
import * as http from 'http';

// ===== CONSTANTS =====
const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => console.log(`--- NEXUS STARTED ON THE PORT ${port} ---`));