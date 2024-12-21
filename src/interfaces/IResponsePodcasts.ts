import { IPodcast } from "./IPodcast";

export interface IResponsePodcast {
    statusCode: number;
    content: IPodcast[]
}