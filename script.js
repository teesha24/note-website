// script.js

document.addEventListener('DOMContentLoaded', () => {
  const projectContainer = document.querySelector('.project-grid');
  if (!projectContainer) return;

  fetch('https://api.github.com/users/teesha24/repos')
    .then(res => res.json())
    .then(repos => {
      projectContainer.innerHTML = ''; // Clear existing static projects
repos
  .filter(repo => repo.name.toLowerCase() !== 'technical-writing') // Exclude this repo
  .forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description ? repo.description : 'No description available.'}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        projectContainer.appendChild(card);
      });
    })
    .catch(err => {
      projectContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
      console.error('Error fetching GitHub repos:', err);
    });
});

// Optional: Handle contact form submission (already present)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = 'Sending...';

    setTimeout(() => {
      form.reset();
      status.textContent = 'Message sent successfully!';
    }, 1000);
  });
}
