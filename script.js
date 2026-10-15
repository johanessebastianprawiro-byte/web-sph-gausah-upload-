const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute('aria-label', isExpanded ? 'Buka menu' : 'Tutup menu');
    mainNav.classList.toggle('is-open', !isExpanded);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu');
      mainNav.classList.remove('is-open');
    });
  });
}

const cursorDot = document.querySelector('.cursor-dot');
const supportsHoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');

if (cursorDot && supportsHoverPointer.matches) {
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;

    cursorDot.style.left = `${event.clientX + 10}px`;
    cursorDot.style.top = `${event.clientY + 10}px`;
    document.documentElement.classList.add('has-pointer-dot');
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', () => {
    document.documentElement.classList.remove('has-pointer-dot');
  });
}

const heroVideo = document.querySelector('.hero-video');
const videoToggle = document.querySelector('.video-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (heroVideo && videoToggle) {
  const syncVideoControl = (isPlaying) => {
    videoToggle.setAttribute('aria-pressed', String(!isPlaying));
    videoToggle.setAttribute('aria-label', isPlaying ? 'Jeda video latar' : 'Putar video latar');
  };

  heroVideo.addEventListener('play', () => syncVideoControl(true));
  heroVideo.addEventListener('pause', () => syncVideoControl(false));

  if (reducedMotion.matches) {
    heroVideo.pause();
    syncVideoControl(false);
  } else {
    heroVideo.play().catch(() => syncVideoControl(false));
  }

  videoToggle.addEventListener('click', () => {
    if (heroVideo.paused) {
      heroVideo.play().catch(() => syncVideoControl(false));
    } else {
      heroVideo.pause();
    }
  });

  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) heroVideo.pause();
  });
}

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
