export interface IPodcast {
    id: string,
    episode: string,
    guestName: string,
    publicationDate: Date,
    podcastHost: string,
    tags: string[],
    /*categoryId: number;*/
}