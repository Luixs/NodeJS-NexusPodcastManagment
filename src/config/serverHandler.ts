/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-15 18:30
* @Description: using to mapping the routes
*****************************************************************************************/

// ===== IMPORTS =====
import { route } from "../config";
import { NEXUS_CONSTANTS } from './index';
import { IncomingMessage, ServerResponse } from "http";

export async function handleRoutes(req: IncomingMessage, resp: ServerResponse) {

    // ===== Get some information for the request to mapping the route
    const { method, url } = req;

    // ===== Separete queryString
    const [currentUrl, query] = url?.split("?") ?? ["", ""];

    // ===== Creating the map
    const currentRouteKey = `${method} ${currentUrl}`;
    const findHandler = route[currentRouteKey];

    // ===== Method found. send to the controller
    if (findHandler) {
        findHandler(req, resp);
    }
    else { // ===== Method not found

        resp.writeHead(NEXUS_CONSTANTS.statusCode.NOT_FOUND, { 'Content-Type': 'application/json' });
        resp.end(JSON.stringify({ message: 'Route not found' }));
    }
}