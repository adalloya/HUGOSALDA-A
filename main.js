import { profileData } from './src/data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initAnimations();
});

function renderContent() {
    // Render About
    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.innerText = profileData.about;

    // Render Skills
    const skillsContainer = document.getElementById('skills-cloud');
    if (skillsContainer) {
        profileData.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerText = skill;
            skillsContainer.appendChild(span);
        });
    }

    // Render Experience
    const expContainer = document.getElementById('experience-list');
    if (expContainer) {
        profileData.experience.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in';
            card.innerHTML = `
        <div class="job-header">
          <span class="company">${job.company}</span>
          <span class="period">${job.period}</span>
        </div>
        <div class="role">${job.role}</div>
        <div class="location">${job.location}</div>
        <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem; white-space: pre-line;">${job.description}</p>
      `;
            expContainer.appendChild(card);
        });
    }

    // Render Projects
    const projContainer = document.getElementById('projects-list');
    if (projContainer) {
        profileData.projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in';

            // Use configured link, fallback to image if no link provided
            const projectLink = project.link || project.image;

            card.innerHTML = `
        <a href="${projectLink}" target="_blank" style="text-decoration: none; color: inherit;">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-info">
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">${project.description}</p>
          </div>
        </a>
      `;
            projContainer.appendChild(card);
        });
    }
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
