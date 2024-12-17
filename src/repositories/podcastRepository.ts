/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-15 07:30
*****************************************************************************************/

// ===== IMPORTS =====
import { IPodcast } from '../interfaces';
const DUMMY_DATA = {
    message: "test with dummy"
}

const findEpisodes = async (): Promise<IPodcast[]> => {

    return [
        {
            episode: "01-Bla bla bla",
            guestName: "Luis",
            id: "12313",
            podcastHost: "NexusTest",
            publicationDate: new Date(),
            tags: ["Test"]
        }
    ];
}

export default {
    findEpisodes
}