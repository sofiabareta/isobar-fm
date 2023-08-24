import { MUSIC_API } from "../util/config";

export const ENTITIES = {
    Band: {
        endpoint: (id = "") => `${MUSIC_API.url}/bands/${id}`
    },
    Album: {
        endpoint: (id = "") => `${MUSIC_API.url}/albums/${id}`
    },
    Track: {
        endpoint: (id = "") => `${MUSIC_API.url}/tracks/${id}`
    }
}