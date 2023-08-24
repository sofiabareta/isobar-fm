import { ENTITIES } from "../schema/application"

const fetchApi = async (url) => {

    return await fetch(url)
                    .then(response => response.json())
                    .then(data => data)
}

/**
 * 
 * @param {String} entity 
 * @param {String} id - optional 
 * @returns 
 */
export const getEntity = (entity, id = "") => {
    if (!ENTITIES[entity]) throw Error(error => error)

    return fetchApi(ENTITIES[entity].endpoint(id))
}