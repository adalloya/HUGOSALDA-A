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

// Main Router Logic
function renderContent() {
    // 1. PROJECT DETAIL PAGE
    if (window.isDetailPage) {
        renderProjectDetail();
        return;
    }

    // 2. PROJECTS LISTING PAGE
    if (window.isProjectsPage) {
        renderProjectsPage();
        return;
    }

    // 3. ABOUT PAGE
    if (window.isAboutPage) {
        renderAboutPage();
        return;
    }

    // 4. HOME PAGE
    renderHomePage();
}

function renderProjectDetail() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = profileData.projects.find(p => p.id === projectId);

    if (!project) {
        document.getElementById('p-title').innerText = "Proyecto no encontrado";
        return;
    }

    document.getElementById('p-category').innerText = project.category;
    document.getElementById('p-title').innerText = project.title;
    document.getElementById('p-description').innerText = project.description;
    document.title = `${project.title} | Hugo Saldaña`;

    // Render Asset (Iframe or Image)
    const container = document.getElementById('p-content');
    if (project.assetType === 'none') {
        container.innerHTML = '';
        container.style.display = 'none';
    } else if (project.assetType === 'html') {
        container.innerHTML = `<iframe src="${project.assetUrl}" title="${project.title}"></iframe>`;
        container.style.display = 'block';
    } else {
        container.innerHTML = `<img src="${project.assetUrl}" alt="${project.title}">`;
        container.style.display = 'block';
    }

    // Render Methodology if exists
    if (project.methodology) {
        const metPanel = document.getElementById('p-methodology');
        const metText = document.getElementById('p-methodology-text');

        // Convert markdown-style **bold** to HTML
        const formattedText = project.methodology.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        metText.innerHTML = formattedText;
        metPanel.style.display = 'block';
    }
}

function renderProjectsPage() {
    const container = document.getElementById('all-projects-list');
    profileData.projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

function renderAboutPage() {
    // THIS PAGE NOW HOLDS THE EXPERTISE CONTENT

    // Render Tech Lab
    const techLabContainer = document.getElementById('tech-lab-list');
    if (techLabContainer && profileData.techLab) {
        profileData.techLab.forEach(caseStudy => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in';
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

    // Render Experience
    const expContainer = document.getElementById('experience-list');
    if (expContainer) {
        profileData.experience.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card fade-in';

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
}

function renderHomePage() {
    // Simplified Home Page - Just Projects Preview & Stats/Quick Intro if needed

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

    // Render Projects (Home limits to 3 or featured, for now we render all but using new card style)
    const projContainer = document.getElementById('projects-list');
    if (projContainer) {
        profileData.projects.slice(0, 3).forEach(project => {
            const card = createProjectCard(project);
            projContainer.appendChild(card);
        });
    }

    // Render Contact
    const emailEl = document.getElementById('contact-email');
    if (emailEl && profileData.contact) emailEl.innerText = profileData.contact.email;

    initModal();
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';

    // Direct link to project detail page
    card.innerHTML = `
    <a href="${project.link}" style="text-decoration: none; color: inherit; display: block;">
      <div class="project-card-inner">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
          <div class="project-category">${project.category}</div>
          <h3 class="project-title">${project.title}</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">${project.description}</p>
          <div style="margin-top: 15px; color: var(--accent-color); font-size: 0.9rem; font-weight: bold;">
             Ver Proyecto <i class="fas fa-arrow-right" style="font-size: 0.8rem; margin-left: 5px;"></i>
          </div>
        </div>
      </div>
    </a>
  `;
    return card;
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
