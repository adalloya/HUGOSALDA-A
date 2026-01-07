import { profileData } from './src/data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initAnimations();
    initModal();
    initBurgerMenu();
});

function initBurgerMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Burger Animation
            burger.classList.toggle('toggle');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }
}

function renderContent() {
    // Render About & Value Prop
    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.innerText = profileData.about;

    const valueProp = document.getElementById('value-prop');
    if (valueProp && profileData.valueProp) valueProp.innerText = profileData.valueProp;

    // Render Skills & Languages
    const skillsContainer = document.getElementById('skills-cloud');
    if (skillsContainer) {
        [...profileData.skills, ...profileData.languages].forEach(item => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerText = item;
            skillsContainer.appendChild(span);
        });
    }

    // Render Tech Lab (Case Studies)
    const techLabContainer = document.getElementById('tech-lab-list');
    if (techLabContainer && profileData.techLab) {
        profileData.techLab.forEach(caseStudy => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in'; // Reuse job-card styling for consistency but in grid
            card.style.height = '100%';
            card.style.borderLeft = '4px solid var(--accent-color)';

            const tagsHtml = caseStudy.tags.map(tag => `<span style="font-size: 0.75rem; background: rgba(100,255,218,0.1); padding: 2px 6px; border-radius: 4px; margin-right: 5px; color: var(--accent-color);">${tag}</span>`).join('');

            card.innerHTML = `
        <h3 style="color: var(--text-primary); font-size: 1.3rem;">${caseStudy.title}</h3>
        <div style="margin-bottom: 1rem;">${tagsHtml}</div>
        
        <div style="margin-bottom: 0.8rem;">
          <strong style="color: #ff6b6b;">🚨 Problema:</strong>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${caseStudy.problem}</p>
        </div>
        <div style="margin-bottom: 0.8rem;">
          <strong style="color: var(--accent-color);">💡 Solución:</strong>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${caseStudy.solution}</p>
        </div>
        <div>
          <strong style="color: var(--gold);">📈 Impacto:</strong>
          <p style="font-size: 0.9rem; color: var(--text-secondary); font-weight: bold;">${caseStudy.impact}</p>
        </div>
      `;
            techLabContainer.appendChild(card);
        });
    }

    // Render Experience (Trayectoria)
    const expContainer = document.getElementById('experience-list');
    if (expContainer) {
        profileData.experience.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in';

            // Parse markdown-like bold syntax **text** -> <strong>text</strong>
            const parsedDesc = job.description
                .replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary);">$1</strong>')
                .replace(/\n\n/g, '<br><br>');

            card.innerHTML = `
        <div class="job-header">
          <span class="company">${job.company}</span>
          <span class="period">${job.period}</span>
        </div>
        <div class="role">${job.role}</div>
        <div class="location">${job.location}</div>
        <div style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;">${parsedDesc}</div>
      `;
            expContainer.appendChild(card);
        });
    }

    // Render Projects (Portfolio)
    const projContainer = document.getElementById('projects-list');
    if (projContainer) {
        profileData.projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in';

            const projectLink = project.link || project.image;

            // Updated to use onclick for Modal
            card.innerHTML = `
        <div class="project-card-inner" onclick="openModal('${projectLink}', '${project.title}')" style="cursor: pointer;">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-info">
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">${project.description}</p>
          </div>
        </div>
      `;
            projContainer.appendChild(card);
        });
    }

    // Render Education
    const eduContainer = document.getElementById('education-list');
    if (eduContainer && profileData.education) {
        profileData.education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'fade-in';
            div.style.marginBottom = '2rem';
            div.style.paddingLeft = '20px';
            div.style.borderLeft = '2px solid var(--secondary-color)';

            div.innerHTML = `
        <h4 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 5px;">${edu.degree}</h4>
        <div style="color: var(--accent-color); font-family: monospace; font-size: 0.9rem; margin-bottom: 5px;">
          ${edu.school} | ${edu.period}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${edu.description}</p>
      `;
            eduContainer.appendChild(div);
        });
    }

    // Render Languages
    const langContainer = document.getElementById('languages-list');
    if (langContainer && profileData.languages) {
        profileData.languages.forEach(lang => {
            // Parse string "Language: Level"
            const [name, level] = lang.split(':');

            const div = document.createElement('div');
            div.className = 'glass-panel fade-in';
            div.style.padding = '1rem 1.5rem';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'space-between';

            div.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
          <i class="fas fa-comment-dots" style="color: var(--accent-color); font-size: 1.2rem;"></i>
          <span style="font-weight: bold; color: var(--text-primary); font-size: 1.1rem;">${name}</span>
        </div>
        <span style="font-family: monospace; color: var(--gold); background: rgba(255, 215, 0, 0.1); padding: 4px 10px; border-radius: 4px;">${level}</span>
      `;
            langContainer.appendChild(div);
        });
    }

    // Render Contact
    const emailEl = document.getElementById('contact-email');
    const phoneEl = document.getElementById('contact-phone');
    const locEl = document.getElementById('contact-location');

    if (emailEl && profileData.contact) emailEl.innerText = profileData.contact.email;
    if (phoneEl && profileData.contact) phoneEl.innerText = profileData.contact.phone;
    if (locEl && profileData.contact) locEl.innerText = profileData.location;

    initModal();
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

// Modal Functions
window.openModal = function (url, title) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modal.style.display = 'block';
    // Small timeout to allow display:block to apply before adding opacity class for transition
    setTimeout(() => modal.classList.add('show'), 10);

    // Determine content type
    if (url.endsWith('.html')) {
        modalBody.innerHTML = `<iframe src="${url}" title="${title}"></iframe>`;
    } else {
        modalBody.innerHTML = `<img src="${url}" alt="${title}">`;
    }
}

function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.getElementById('modal-body').innerHTML = ''; // Clear content
        }, 300); // 300ms matches CSS transition
    };

    closeBtn.onclick = closeModal;

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}
