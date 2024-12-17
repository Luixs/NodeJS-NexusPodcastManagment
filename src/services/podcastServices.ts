/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-15 07:22
*****************************************************************************************/

// ===== CONSTANTS =====
import { podcastRep } from "../repositories";



const listAllEpisodes = async () => {
    let db = await podcastRep.findEpisodes()
    return db;
};

const filterEpisodes = async () => {
    let db = await podcastRep.findEpisodes()
    return db;
}

export default {
    listAllEpisodes,
    filterEpisodes
}