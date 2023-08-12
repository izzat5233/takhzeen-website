const API_URL = 'https://takhzeen.azurewebsites.net/storage';
const IMAGE_URL = 'https://takhzeen.blob.core.windows.net/storages'

/**
 * @param {string} [baseURL] - The base url;
 * @param {Array<string>} [fields] - Optional list of fields to include in the response.
 * @return {string} - The processed URL with all query fields
 */
function getURL(baseURL, fields) {
    let url = baseURL;

    if (fields && fields.length > 0) {
        url += `?fields=${fields.join(',')}`;
    }

    return url;
}

/**
 * Sends a GET request to retrieve all storages.
 *
 * @param {Array<string>} [fields] - Optional list of fields to include in the response.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function getStorages(fields) {
    const url = getURL(API_URL, fields);

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

/**
 * Sends a GET request to retrieve a specific storage by its ID.
 *
 * @param {string} storageId - The ID of the storage to retrieve.
 * @param {Array<string>} [fields] - Optional list of fields to include in the response.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function getStorageById(storageId, fields) {
    if (!storageId) {
        throw new Error("Storage ID is required");
    }

    const url = getURL(`${API_URL}/${storageId}`, fields);

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

/**
 * Retrieves the image URLs for a specific storage based on its ID.
 *
 * @param {string} storageId - The ID of the storage.
 * @param {number} numberOfImages - The number of images to retrieve.
 * @param {string} imageFormat - The file type of the image.
 * @returns {Array<string>} - An array of image URLs.
 */
export function getStorageImages(storageId, numberOfImages, imageFormat) {
    if (!storageId) {
        throw new Error("Storage ID is required");
    }

    if (!numberOfImages || numberOfImages <= 0) {
        throw new Error("Invalid number of images specified");
    }

    const imageUrls = [];

    for (let i = 1; i <= numberOfImages; i++) {
        imageUrls.push(`${IMAGE_URL}/${storageId}_${i}.${imageFormat}`);
    }

    return imageUrls;
}
