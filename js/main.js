// Kept intentionally minimal — no animation libraries, no frameworks.
// Three small, independent pieces: mobile nav, the preloader, and the
// ambient-audio toggle. Each degrades gracefully if its markup isn't
// present on a given page.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------
   Mobile nav
--------------------------------------------------------------- */
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------------------
   Preloader — "tuning in" splash
   Cycles through the four channel frequencies, then reveals the page.
   Has a minimum display time so it doesn't just flash on fast loads,
   and a hard maximum so a slow connection never traps someone on it.
--------------------------------------------------------------- */
const preloader = document.getElementById('preloader');

if (preloader) {
  const freqEl = document.getElementById('preloaderFreq');
  const freqs = ['88.3', '94.7', '101.5', '107.9', 'ON AIR'];
  let i = 0;

  const cycle = prefersReducedMotion
    ? null
    : setInterval(() => {
        if (freqEl) freqEl.textContent = freqs[i % freqs.length];
        i++;
      }, 280);

  const hidePreloader = () => {
    if (cycle) clearInterval(cycle);
    preloader.classList.add('is-hidden');
    preloader.setAttribute('aria-hidden', 'true');
    // fully remove from layout after the fade transition finishes
    setTimeout(() => { preloader.style.display = 'none'; }, 550);
  };

  const minDisplay = prefersReducedMotion ? 150 : 1100;
  const maxDisplay = 4000; // safety net on slow connections

  const start = Date.now();
  window.addEventListener('load', () => {
    const elapsed = Date.now() - start;
    setTimeout(hidePreloader, Math.max(0, minDisplay - elapsed));
  });
  setTimeout(hidePreloader, maxDisplay);
}

/* ---------------------------------------------------------------
   Scroll reveal
   Fades/rises elements marked [data-reveal] into place as they enter
   the viewport. Falls back to fully visible if IntersectionObserver
   isn't supported — never hides content permanently.
--------------------------------------------------------------- */
const revealEls = document.querySelectorAll('[data-reveal]');

if (revealEls.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------------------------------------------------------------
   Ambient audio toggle
   Browsers block real autoplay, so this is click-to-play by design —
   also just friendlier UX than audio blasting on arrival.
   Mute *preference* persists across pages via localStorage; actual
   playback restarts on each page load since this is a static
   multi-page site (no shared player across navigations).
--------------------------------------------------------------- */
const audioToggle = document.getElementById('audioToggle');
const ambientAudio = document.getElementById('ambientAudio');

if (audioToggle && ambientAudio) {
  const label = audioToggle.querySelector('.audio-toggle-label');

  const setPlayingUI = (playing) => {
    audioToggle.classList.toggle('is-playing', playing);
    audioToggle.setAttribute('aria-pressed', String(playing));
    if (label) label.textContent = playing ? 'SOUND ON' : 'SOUND OFF';
  };

  // respect the visitor's last choice, but never auto-play audio itself
  const wantsSound = localStorage.getItem('prince-sound') === 'on';
  setPlayingUI(false);

  audioToggle.addEventListener('click', () => {
    if (ambientAudio.paused) {
      ambientAudio.play().catch(() => {
        // e.g. no audio file has been added yet — fail quietly
      });
      localStorage.setItem('prince-sound', 'on');
      setPlayingUI(true);
    } else {
      ambientAudio.pause();
      localStorage.setItem('prince-sound', 'off');
      setPlayingUI(false);
    }
  });

  // if they previously turned sound on, try resuming on this page too —
  // browsers may still block this without a fresh click, which is fine
  if (wantsSound) {
    ambientAudio.play().then(() => setPlayingUI(true)).catch(() => setPlayingUI(false));
  }
}
