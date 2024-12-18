/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-15 07:22
*****************************************************************************************/

// ===== CONSTANTS =====
import { podcastRep } from "../repositories";
import { handleQueryString } from "../utils";

const listAllEpisodes = async () => {

    try {

        let episodes = await podcastRep.findEpisodes()
        return episodes;

    } catch (error) {
        return null;
    }
};

const filterEpisodes = async (queryString: string) => {

    // ===== handle query string
    var filter = await handleQueryString(queryString);

    let content = await podcastRep.findEpisodesByFilter(filter || "");
    return content;
}

export default {
    listAllEpisodes,
    filterEpisodes
}