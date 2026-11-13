/*
  Pour activer le bouton vers l'application déployée, renseigne son URL ci-dessous.
  Exemple : const DEPLOYED_APP_URL = 'https://exemple.fr';
  Ne pas utiliser une URL fictive : le bouton pointe vers GitHub tant qu'aucune URL n'est disponible.
*/
const DEPLOYED_APP_URL = '';

// Renseigner ici les URLs *réelles* de tes profils pour rendre les liens actifs.
const LINKEDIN_PROFILE_URL = '';
const TWITTER_PROFILE_URL = '';

for (const [service, url] of [
  ['linkedin', LINKEDIN_PROFILE_URL],
  ['twitter', TWITTER_PROFILE_URL],
]) {
  const link = document.querySelector(`[data-profile="${service}"]`);
  if (link && /^https:\/\//i.test(url.trim())) {
    link.href = url.trim();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.classList.remove('pending');
    link.removeAttribute('aria-disabled');
    link.textContent = service === 'linkedin' ? 'LinkedIn ↗' : 'X / Twitter ↗';
  }
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');
  mainNavigation.classList.toggle('open', !expanded);
});

mainNavigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNavigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
}));

if (DEPLOYED_APP_URL.trim()) {
  const projectCta = document.querySelector('#project-cta');
  projectCta.href = DEPLOYED_APP_URL;
  projectCta.innerHTML = 'Ouvrir l’application <span aria-hidden="true">↗</span>';
  document.querySelector('#deployment-note').textContent = 'La version publique de l’application est accessible via ce lien.';
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}
