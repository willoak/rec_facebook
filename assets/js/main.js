(function () {
  const App = (window.App = window.App || {});

  // Toggle like
  document.addEventListener('click', function (ev) {
    const btn = ev.target.closest('.fb-btn-like');
    if (!btn) return;
    btn.classList.toggle('liked');
  });

  function loadSponsoredImages() {
    const U = App.utils;
    const imgs = document.querySelectorAll('.fb-sponsored img');
    imgs.forEach(img => {
      img.src = U.randomPexelsImage(360);
      img.loading = 'lazy';
      img.decoding = 'async';
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadSponsoredImages();
    App.stories?.loadStories();
    App.feed?.loadFeed();
    App.contacts?.loadContacts();
  });
})();

