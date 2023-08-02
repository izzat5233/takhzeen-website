const API_URL = 'https://takhzeen.azurewebsites.net/storage';

/**
 * Sends a GET request to retrieve all storages.
 *
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function getStorages() {
    const response = await fetch(API_URL, {
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