/* Ms. Darkchild — main.js */

// ── NAV SCROLL ───────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

// ── MOBILE NAV ───────────────────────────────────────────────
const toggle = document.getElementById('nav-toggle');
const drawer = document.getElementById('nav-drawer');

toggle.addEventListener('click', () => {
  const open = drawer.style.display === 'flex';
  drawer.style.display = open ? 'none' : 'flex';
  toggle.setAttribute('aria-expanded', !open);
  drawer.setAttribute('aria-hidden', open);
});

function closeNav() {
  drawer.style.display = 'none';
  toggle.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
}

// ── SHOW FILTER ───────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const showRows   = document.querySelectorAll('.show-row');
const countEl    = document.getElementById('show-count');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => {
      b.classList.remove('filter-btn--active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('filter-btn--active');
    btn.setAttribute('aria-selected', 'true');

    let visible = 0;
    showRows.forEach(row => {
      const types = row.dataset.types || '';
      const show = filter === 'all' || types.includes(filter);
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    countEl.textContent = `${visible} SHOW${visible !== 1 ? 'S' : ''}`;
  });
});

// ── QUOTE CAROUSEL ────────────────────────────────────────────
const quotes = document.querySelectorAll('.quote');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let quoteTimer;

function showQuote(idx) {
  quotes[current].classList.remove('quote--active');
  dots[current].classList.remove('dot--active');
  current = idx;
  quotes[current].classList.add('quote--active');
  dots[current].classList.add('dot--active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(quoteTimer);
    showQuote(i);
    startQuoteTimer();
  });
});

function startQuoteTimer() {
  quoteTimer = setInterval(() => {
    showQuote((current + 1) % quotes.length);
  }, 5000);
}
startQuoteTimer();

// ── VIDEO EMBED ───────────────────────────────────────────────
// Replace YOUR_VIDEO_ID below with a real YouTube video ID from @Datgirlcomedy
// Get the ID from: youtube.com/watch?v=XXXXXXXXXXX → use XXXXXXXXXXX
const VIDEO_ID = 'euowW8lpTnU';

function loadVideo() {
  if (VIDEO_ID === 'YOUR_VIDEO_ID') {
    window.open('https://www.youtube.com/@Datgirlcomedy', '_blank');
    return;
  }
  const placeholder = document.getElementById('video-placeholder');
  const frame = document.getElementById('video-frame');
  placeholder.style.display = 'none';
  frame.style.display = 'block';
  frame.innerHTML = `
    <iframe
      width="100%" height="100%"
      src="https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1"
      title="Ms. Darkchild Performance Reel"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
}

// ── CART / MERCH ──────────────────────────────────────────────
const toast = document.getElementById('cart-toast');
let cartTimer;

function addToCart(name) {
  toast.textContent = `✓  ADDED: ${name.toUpperCase()}`;
  toast.classList.add('cart-toast--show');
  clearTimeout(cartTimer);
  cartTimer = setTimeout(() => toast.classList.remove('cart-toast--show'), 2500);
}

// ── BOOKING FORM ──────────────────────────────────────────────
const form = document.getElementById('booking-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    const btn = form.querySelector('button[type=submit]');
    const action = form.getAttribute('action');

    // If Formspree not configured, show confirmation and stop
    if (action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      btn.textContent = '✓ Inquiry Sent — Ms. Darkchild will be in touch!';
      btn.style.background = '#1D9E75';
      btn.disabled = true;
      return;
    }
    // Otherwise let Formspree handle the submission normally
  });
}

// ── SMOOTH SCROLL OFFSET (for sticky nav) ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
