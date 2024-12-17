/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-14 18:10
*****************************************************************************************/

// ===== IMPORTS =====
import { IRoute } from "../interfaces/IRoute";
import { podcastController } from '../controllers';

// ===== CREATING MY ROUTE SYSTEM
export const route: IRoute = {
    'GET /api/podcasts': podcastController.getListAllEpisodes,
}

