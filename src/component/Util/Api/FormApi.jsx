const API_URL = process.env.REACT_APP_API_URL_FORM;

/**
 * Sends a POST request to create a new form.
 *
 * @param {string} formName - The name of the new form.
 * @param {Object} data - The data for the new form.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function createForm(formName, data) {
    data.formName = formName;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

/**
 * Sends a PATCH request to update an existing form.
 *
 * @param {string} formName - The name of the form to update.
 * @param {Object} data - The new data for the form.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function updateForm(formName, data) {
    const response = await fetch(API_URL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(formName)}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

/**
 * Creates a form and starts a form session for later updates.
 *
 * @param {string} formName - The name of the form to start.
 * @param {Object} data - The data for the new form.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function startForm(formName, data) {
    const response = await createForm(formName, data);
    localStorage.setItem(formName, response.token);
    return response;
}

/**
 * Marks the form as completed, updates it, and clears it from the session storage.
 *
 * @param {string} formName - The name of the form to finish.
 * @param {Object} data - The data for the form.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If the fetch request fails or the server responds with a non-OK status.
 */
export async function finishForm(formName, data) {
    data.completed = true;
    const response = await updateForm(formName, data);
    localStorage.removeItem(formName);
    return response;
}
