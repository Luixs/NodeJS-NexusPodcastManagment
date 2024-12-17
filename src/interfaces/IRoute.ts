// ===== IMPORTS =====
import { IncomingMessage, ServerResponse } from "http";

type RouterHandler = (req: IncomingMessage, resp: ServerResponse) => void;

export interface IRoute {
    [key: string]: RouterHandler;
}