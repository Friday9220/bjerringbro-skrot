// Bjerringbro Skrot – kontaktlinks, header, tekstbånd og scroll-animationer
(function () {
  var cfg = window.SKROT_CONFIG || {};
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  document.getElementById('year').textContent = new Date().getFullYear();

  // Kontaktoplysninger fra site-config.js
  var messenger = (cfg.messenger || '').trim() || cfg.facebook || '#kontakt';
  all('[data-messenger]').forEach(function (a) {
    a.href = messenger;
    if (/^https?:/.test(messenger)) { a.target = '_blank'; a.rel = 'noopener'; }
  });

  var phone = (cfg.telefon || '').trim();
  if (phone) {
    var tel = 'tel:' + phone.replace(/[^\d+]/g, '');
    all('[data-phone]').forEach(function (a) { a.href = tel; a.hidden = false; });
    all('[data-phone-text]').forEach(function (s) { if (!s.textContent || s.textContent === 'Ring') s.textContent = s.closest('.btn') ? 'Ring ' + phone : phone; });
    all('[data-phone-item]').forEach(function (li) { li.hidden = false; });
    all('[data-no-phone]').forEach(function (el) { el.hidden = true; });
  }

  var email = (cfg.email || '').trim();
  if (email) {
    all('[data-email]').forEach(function (a) { a.href = 'mailto:' + email; a.hidden = false; });
    all('[data-email-text]').forEach(function (s) { s.textContent = email; });
    all('[data-email-item]').forEach(function (li) { li.hidden = false; });
  }

  // Header bliver mørkere, når man scroller; mobilbaren dukker op efter toppen
  var header = document.querySelector('[data-header]');
  var bar = document.querySelector('[data-action-bar]');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-solid', y > 20);
    if (bar) {
      var nearEnd = window.innerHeight + y > document.body.scrollHeight - 160;
      bar.classList.toggle('is-visible', y > hero.offsetHeight * 0.6 && !nearEnd);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Elementer glider ind, når de kommer i syne
  var reveals = all('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      // Kort forsinkelse mellem kort i samme række
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.transitionDelay = Math.min(sib, 5) * 70 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Tekstbånd: kører af sig selv og skubbes ekstra af scroll
  if (reduce) return;
  var rows = all('.marquee-row');
  var t0 = performance.now();
  function frame(now) {
    var t = (now - t0) / 1000;
    var y = window.scrollY;
    rows.forEach(function (row) {
      var half = row.scrollWidth / 2;
      var x = (t * 50 + y * 0.4) % half;
      row.style.transform = 'translateX(' + (Number(row.dataset.dir) < 0 ? -x : x - half) + 'px)';
    });
    requestAnimationFrame(frame);
  }
  if (rows.length) requestAnimationFrame(frame);
})();
