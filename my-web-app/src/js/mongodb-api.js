const API_URL = 'https://your-mongodb-api-url'; // Replace with your MongoDB Data API URL
const API_KEY = 'your-api-key'; // Replace with your MongoDB Data API key

async function fetchData(collection) {
    const response = await fetch(`${API_URL}/${collection}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    return await response.json();
}

async function postData(collection, data) {
    const response = await fetch(`${API_URL}/${collection}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    return await response.json();
}

export { fetchData, postData };