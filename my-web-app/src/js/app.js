// Main JavaScript file for the web application
// This file handles user interactions, manages application state, and integrates with the MongoDB Data API

import { fetchData, postData } from './mongodb-api.js';

// Example function to handle form submission
document.getElementById('data-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await postData(data);
        console.log('Data submitted successfully:', response);
    } catch (error) {
        console.error('Error submitting data:', error);
    }
});

// Example function to fetch and display data
async function loadData() {
    try {
        const data = await fetchData();
        console.log('Fetched data:', data);
        // Code to update the UI with fetched data goes here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call loadData on page load
window.onload = loadData;