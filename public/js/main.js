/**
 * Nexus • Static Showcase Client Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initServerStatusCheck();
  initLightboxModal();
  initCardInteractions();
});

/**
 * Check backend server health and display real-time status
 */
async function initServerStatusCheck() {
  const statusPill = document.getElementById('serverStatus');
  if (!statusPill) return;

  try {
    const startTime = performance.now();
    const response = await fetch('/api/health');
    const latency = Math.round(performance.now() - startTime);

    if (response.ok) {
      const data = await response.json();
      statusPill.innerHTML = `
        <span class="status-dot"></span>
        <span>Express Server Active (${latency}ms)</span>
      `;
      statusPill.title = `Stack: ${data.stack} | Environment: ${data.environment} | Uptime: ${data.uptimeSeconds}s`;
    } else {
      showFallbackStatus(statusPill);
    }
  } catch (error) {
    showFallbackStatus(statusPill);
  }
}

function showFallbackStatus(element) {
  element.innerHTML = `
    <span class="status-dot" style="background-color: #38bdf8; box-shadow: 0 0 10px #38bdf8;"></span>
    <span>Static Page Display</span>
  `;
}

/**
 * Lightbox Modal for inspecting images
 */
function initLightboxModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.getElementById('modalClose');

  if (!modal || !modalImg || !closeBtn) return;

  // Open modal when clicking on card media
  document.querySelectorAll('.card-media').forEach((mediaEl) => {
    mediaEl.addEventListener('click', () => {
      const img = mediaEl.querySelector('img');
      const card = mediaEl.closest('.showcase-card');
      const title = card ? card.querySelector('.card-title')?.textContent : '';
      const desc = card ? card.querySelector('.card-description')?.textContent : '';

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || 'Showcase Image';
        modalTitle.textContent = title || 'Artwork Preview';
        modalCaption.textContent = desc || '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close handlers
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Card hover depth and micro-animations
 */
function initCardInteractions() {
  const cards = document.querySelectorAll('.showcase-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease';
    });
  });
}
