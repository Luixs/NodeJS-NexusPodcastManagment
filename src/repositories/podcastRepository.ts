/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-15 07:30
*****************************************************************************************/

// ===== IMPORTS =====
import * as mongoDB from 'mongodb';
import { IPodcast } from '../interfaces';
import { connectToDatabase } from '../config/db';

const findEpisodes = async (): Promise<IPodcast[]> => {

    // ===== db connect
    let db = await connectToDatabase();
    const pCollection: mongoDB.Collection = db.collection(process.env.MONGODB_COLLECTION_P_NAME!);

    // ===== Fetch all episodes
    const episodes = await pCollection.find({}).toArray();

    // ===== Mapping model
    var episodesMap: IPodcast[] = [];
    if (episodes.length == 0 || episodes == null) return [];


    episodes.forEach(d => {
        episodesMap.push({
            _id: d._id.toString(),
            episode: d.episode,
            guestName: d.guesName,
            podcastHost: d.podcastHost,
            tags: d.tags,
            publicationDate: d.publicationDate || new Date()
        })
    })

    return episodesMap;
}

const findEpisodesByFilter = async (filter: string): Promise<IPodcast[]> => {

    // ===== db connect
    let db = await connectToDatabase();
    const pCollection: mongoDB.Collection = db.collection(process.env.MONGODB_COLLECTION_P_NAME!);

    // ===== Fetch all episodes
    const episodes = await pCollection.find({
        podcastHost: {
            $regex: `^${filter}$`, // Matches the whole word
            $options: 'i'        // Case-insensitive flag
        }
    }).toArray();

    // ===== Mapping model
    var episodesMap: IPodcast[] = [];

    console.log("here");
    console.log(episodes);

    if (episodes.length == 0 || episodes == null) return [];


    episodes.forEach(d => {
        episodesMap.push({
            _id: d._id.toString(),
            episode: d.episode,
            guestName: d.guesName,
            podcastHost: d.podcastHost,
            tags: d.tags,
            publicationDate: d.publicationDate || new Date()
        })
    })

    return episodesMap;
}

export default {
    findEpisodes,
    findEpisodesByFilter
}