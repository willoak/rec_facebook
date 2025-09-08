(function () {
  const App = (window.App = window.App || {});
  const U = App.utils;

  async function loadStories() {
    const container = document.getElementById('fb-stories-root');
    if (!container) return;
    const fallback = [
      { id: 'create', label: 'Criar story', image: 'assets/img/naruto.jpg', type: 'create' },
      { id: 1, name: 'Naruto', avatar: 'N', image: 'assets/img/naruto.jpg' },
      { id: 2, name: 'Sakura', avatar: 'S', image: 'assets/img/naruto.jpg' },
      { id: 3, name: 'Sasuke', avatar: 'U', image: 'assets/img/naruto.jpg' },
      { id: 4, name: 'Kakashi', avatar: 'K', image: 'assets/img/naruto.jpg' },
      { id: 5, name: 'Hinata', avatar: 'H', image: 'assets/img/naruto.jpg' },
      { id: 6, name: 'Shikamaru', avatar: 'S', image: 'assets/img/naruto.jpg' },
      { id: 7, name: 'Rock Lee', avatar: 'R', image: 'assets/img/naruto.jpg' },
      { id: 8, name: 'Gaara', avatar: 'G', image: 'assets/img/naruto.jpg' },
      { id: 9, name: 'Tsunade', avatar: 'T', image: 'assets/img/naruto.jpg' },
      { id: 10, name: 'Itachi', avatar: 'I', image: 'assets/img/naruto.jpg' },
      { id: 11, name: 'Jiraiya', avatar: 'J', image: 'assets/img/naruto.jpg' },
      { id: 12, name: 'Neji', avatar: 'N', image: 'assets/img/naruto.jpg' }
    ];
    const data = await U.getJSON('assets/data/stories.json', fallback);
    container.innerHTML = data.map(raw => {
      const item = { ...raw };
      item.image = U.replaceWithRandomIfPlaceholder(item.image || '', 360) || U.randomPexelsImage(360);
      if (item.type === 'create') {
        return `
          <article class="fb-story create rounded-xl overflow-hidden shadow-sm">
            <img src="${U.escapeHtml ? U.escapeHtml(item.image) : item.image}" alt="" />
            <button class="fb-create-btn" aria-label="Criar story">＋</button>
            <span class="fb-story-label">${U.escapeHtml ? U.escapeHtml(item.label || 'Criar story') : (item.label || 'Criar story')}</span>
          </article>`;
      }
      return `
        <article class="fb-story rounded-xl overflow-hidden shadow-sm">
          <img src="${U.escapeHtml ? U.escapeHtml(item.image) : item.image}" alt="Story de ${U.escapeHtml ? U.escapeHtml(item.name) : item.name}" />
          <span class="fb-story-avatar">${U.escapeHtml ? U.escapeHtml(item.avatar || '?') : (item.avatar || '?')}</span>
          <span class="fb-story-label">${U.escapeHtml ? U.escapeHtml(item.name) : item.name}</span>
        </article>`;
    }).join('');

    // Owl slider
    if (window.jQuery && typeof window.jQuery.fn?.owlCarousel === 'function') {
      const $ = window.jQuery;
      container.classList.add('owl-carousel', 'owl-theme');
      $(container).owlCarousel({
        autoWidth: true,
        margin: 12,
        stagePadding: 60,
        nav: true,
        dots: false,
        loop: false,
        navText: [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-label="Anterior" focusable="false"><path fill-rule="evenodd" d="M12.78 15.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-label="Próximo" focusable="false"><path fill-rule="evenodd" d="M7.22 4.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L11.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>'
        ],
        responsive: {
          0: { stagePadding: 36, margin: 8 },
          600: { stagePadding: 48, margin: 10 },
          900: { stagePadding: 60, margin: 12 },
          1200: { stagePadding: 60, margin: 12 }
        }
      });
    } else {
      console.warn('Owl Carousel não disponível — verifique se jQuery e owl.carousel foram carregados.');
    }
  }

  App.stories = { loadStories };
})();

