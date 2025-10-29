// This file contains the JavaScript code for the web application.
// It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Welcome to My Web App!';
    document.body.appendChild(greetingElement);

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});