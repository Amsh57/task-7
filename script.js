async function fetchUsers() {
  const container = document.getElementById('user-container');
  const errorBox = document.getElementById('error');

  container.innerHTML = '';
  errorBox.textContent = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const users = await response.json();

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      container.appendChild(card);
    });

  } catch (err) {
    errorBox.textContent = 'Oops! Couldn’t load user data. Please check your internet connection.';
    console.error(err);
  }
}

window.onload = fetchUsers;
