/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-17 20:15
*****************************************************************************************/
import * as http from 'http';
import { handleRoutes } from '../src/config';

export async function app(request: http.IncomingMessage, response: http.ServerResponse) {
    handleRoutes(request, response);
}