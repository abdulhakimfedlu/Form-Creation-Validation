document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create and append user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            dataContainer.appendChild(userList);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Display error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Fetch and display user data when DOM is loaded
    fetchUserData();
});