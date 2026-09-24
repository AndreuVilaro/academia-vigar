import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();

  document.querySelectorAll('[data-year]').forEach(year => {
    year.textContent = new Date().getFullYear();
  });

  const mapButton = document.querySelector('[data-map-load]');
  const mapConsent = document.querySelector('[data-map-consent]');
  const mapFrame = document.querySelector('[data-map-frame]');

  if (mapButton && mapConsent && mapFrame) {
    mapButton.addEventListener('click', () => {
      mapFrame.src = mapFrame.dataset.src;
      mapFrame.hidden = false;
      mapConsent.hidden = true;
    });
  }
});
