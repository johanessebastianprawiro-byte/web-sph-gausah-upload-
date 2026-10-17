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
  let previousPointer = null;
  let fastMotionTimeout;
  let fastMotionStartTimeout;

  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;

    let isFastMovement = false;
    if (previousPointer) {
      const elapsed = Math.max(event.timeStamp - previousPointer.time, 1);
      const distance = Math.hypot(event.clientX - previousPointer.x, event.clientY - previousPointer.y);
      isFastMovement = distance / elapsed > 0.9;
    }
    previousPointer = { x: event.clientX, y: event.clientY, time: event.timeStamp };

    clearTimeout(fastMotionTimeout);
    fastMotionTimeout = setTimeout(() => {
      cursorDot.classList.remove('is-fast');
      clearTimeout(fastMotionStartTimeout);
      fastMotionStartTimeout = undefined;
    }, 750);

    if (isFastMovement) {
      if (!cursorDot.classList.contains('is-fast') && fastMotionStartTimeout === undefined) {
        fastMotionStartTimeout = setTimeout(() => {
          cursorDot.classList.add('is-fast');
          fastMotionStartTimeout = undefined;
        }, 1500);
      }
    } else {
      clearTimeout(fastMotionStartTimeout);
      fastMotionStartTimeout = undefined;
    }

    cursorDot.style.left = `${event.clientX - 6}px`;
    cursorDot.style.top = `${event.clientY - 6}px`;
    const elementUnderPointer = document.elementFromPoint(event.clientX, event.clientY);
    const isOverText = elementUnderPointer?.closest('p, h1, h2, h3, h4, h5, h6, a, li, button, label');
    cursorDot.classList.toggle('over-text', Boolean(isOverText));
    document.documentElement.classList.add('has-pointer-dot');
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', () => {
    document.documentElement.classList.remove('has-pointer-dot');
    cursorDot.classList.remove('is-fast');
    clearTimeout(fastMotionTimeout);
    clearTimeout(fastMotionStartTimeout);
    fastMotionStartTimeout = undefined;
    previousPointer = null;
  });
}

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
