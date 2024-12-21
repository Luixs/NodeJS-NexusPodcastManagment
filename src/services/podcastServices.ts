/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-15 07:22
*****************************************************************************************/

// ===== CONSTANTS =====
import { podcastRep } from "../repositories";
import { handleQueryString } from "../utils";
import { IResponsePodcast } from "../interfaces";
import { NEXUS_CONSTANTS } from "../config";

const listAllEpisodes = async (): Promise<IResponsePodcast> => {

    let response: IResponsePodcast = { content: [], statusCode: 0 };

    try {

        let episodes = await podcastRep.findEpisodes()

        response = {
            content: episodes,
            statusCode: episodes.length > 0 ? NEXUS_CONSTANTS.statusCode.OK : NEXUS_CONSTANTS.statusCode.NO_CONTENT
        }

    } catch (error) {
        response = {
            content: [],
            statusCode: NEXUS_CONSTANTS.statusCode.SERVER_ERROR
        }
    }

    return response;
};

const filterEpisodes = async (queryString: string): Promise<IResponsePodcast> => {

    let response: IResponsePodcast = {
        content: [],
        statusCode: 0
    };

    try {

        // ===== handle query string
        var filter = await handleQueryString(queryString);

        // ===== search data
        let content = await podcastRep.findEpisodesByFilter(filter || "");

        // ===== handle with content
        response = {
            statusCode: content.length > 0 ? NEXUS_CONSTANTS.statusCode.OK : NEXUS_CONSTANTS.statusCode.NO_CONTENT,
            content: content
        }

    }
    catch (error) {
        response = {
            content: [],
            statusCode: NEXUS_CONSTANTS.statusCode.SERVER_ERROR
        }
    }

    return response;
}

export default {
    listAllEpisodes,
    filterEpisodes
}