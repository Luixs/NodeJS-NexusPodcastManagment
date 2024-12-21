/*****************************************************************************************
 * @Author: Luis Starlino
 * @Date: 2024-12-14 20:40
 *****************************************************************************************/

// ===== IMPORTS =====
import { IResponsePodcast } from '../interfaces';
import { podcastServices } from '../services';
import { IncomingMessage, ServerResponse } from 'http';

const getListAllEpisodes = async (req: IncomingMessage, resp: ServerResponse) => {

    let episodeService : IResponsePodcast;

    // ===== IF WAS QUERY STRING, ANOTHER CONTROLLER
    const queryString = req.url?.split("?")[1];

    if (queryString) episodeService = await podcastServices.filterEpisodes(queryString); //TODO: CREATE A QUERY HANDLER
    else episodeService = await podcastServices.listAllEpisodes();

    resp.writeHead(episodeService.statusCode, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify(episodeService.content));

    resp.end();
}


export default {
    getListAllEpisodes
}