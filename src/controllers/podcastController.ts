/*****************************************************************************************
 * @Author: Luis Starlino
 * @Date: 2024-12-14 20:40
 *****************************************************************************************/

// ===== IMPORTS =====
import { NEXUS_CONSTANTS } from '../config';
import { podcastServices } from '../services';
import { IncomingMessage, ServerResponse } from 'http';

const getListAllEpisodes = async (req: IncomingMessage, resp: ServerResponse) => {

    let episodes;

    // ===== IF WAS QUERY STRING, ANOTHER CONTROLLER
    const queryString = req.url?.split("?")[1];

    if (queryString) episodes = await podcastServices.filterEpisodes(queryString); //TODO: CREATE A QUERY HANDLER
    else episodes = await podcastServices.listAllEpisodes();

    resp.writeHead(NEXUS_CONSTANTS.statusCode.OK, { 'Content-Type': 'application/json' });
    resp.end(JSON.stringify(episodes));
}


export default {
    getListAllEpisodes
}