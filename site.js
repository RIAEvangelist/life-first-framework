(() => {
  const header = document.querySelector('.masthead');
  const toggle = document.querySelector('.menu-toggle');
  const backToTop = document.querySelector('.back-to-top');

  if (header && toggle) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    header.querySelectorAll('.primary-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 520);
    };
    updateBackToTop();
    window.addEventListener('scroll', updateBackToTop, { passive: true });
  }
})();
