(function () {
  const App = (window.App = window.App || {});
  const U = App.utils;

  function reactionDots(r) {
    const arr = [];
    if (r && r.like) arr.push('<span class="fb-like-dot"></span>');
    if (r && r.love) arr.push('<span class="fb-love-dot"></span>');
    if (r && r.care) arr.push('<span class="fb-care-dot"></span>');
    return arr.join('');
  }

  async function loadFeed() {
    const root = document.getElementById('fb-feed-root');
    if (!root) return;
    const fallback = [
      {
        id: 101,
        author: { name: 'Naruto Uzumaki', initial: 'N' },
        time: '2 h', privacy: 'public',
        text: 'Treinando para me tornar Hokage! 🍥',
        image: 'assets/img/naruto.jpg',
        reactions: { like: true, love: true, care: false, count: '1,2 mil' },
        comments: 243, shares: 31
      },
      {
        id: 102,
        author: { name: 'Sakura Haruno', initial: 'S' },
        time: 'Ontem', privacy: 'friends',
        text: 'Florindo no hospital com muita energia 💮',
        image: null,
        reactions: { like: true, love: false, care: true, count: 327 },
        comments: 45, shares: 3
      }
    ];
    const posts = await U.getJSON('assets/data/feed.json', fallback);
    root.innerHTML = posts.map(raw => {
      const p = { ...raw };
      if (p.image) {
        p.image = U.replaceWithRandomIfPlaceholder(p.image, 800);
        if (!p.image) p.image = U.randomPexelsImage(800);
      }
      return `
      <article class="fb-post fb-card rounded-xl border border-zinc-200 shadow-sm bg-white" data-post-id="${U.escapeHtml ? U.escapeHtml(p.id) : p.id}">
        <header class="fb-post-header">
          <span class="fb-avatar">${U.escapeHtml ? U.escapeHtml(p.author?.initial || '?') : (p.author?.initial || '?')}</span>
          <div class="fb-post-meta">
            <strong>${U.escapeHtml ? U.escapeHtml(p.author?.name || 'Usuário') : (p.author?.name || 'Usuário')}</strong>
            <div class="fb-post-sub">${U.escapeHtml ? U.escapeHtml(p.time || '') : (p.time || '')} · <span class="fb-ico" aria-label="${p.privacy === 'friends' ? 'Amigos' : 'Público'}">${p.privacy === 'friends' ? '👥' : '🌐'}</span></div>
          </div>
          <button class="fb-icon-btn" aria-label="Mais opções">⋯</button>
        </header>
        <div class="fb-post-content">
          ${p.text ? `<p>${U.escapeHtml ? U.escapeHtml(p.text) : p.text}</p>` : ''}
          ${p.image ? `<img class=\"rounded-md\" src=\"${U.escapeHtml ? U.escapeHtml(p.image) : p.image}\" alt=\"Imagem do post\" />` : ''}
        </div>
        <div class="fb-post-stats">
          <div class="fb-reactions">${reactionDots(p.reactions)}<span class="fb-count">${U.escapeHtml ? U.escapeHtml(p.reactions?.count ?? '') : (p.reactions?.count ?? '')}</span></div>
          <div class="fb-comments-count">${U.escapeHtml ? U.escapeHtml(p.comments) : p.comments} comentários · ${U.escapeHtml ? U.escapeHtml(p.shares) : p.shares} compartilhamentos</div>
        </div>
        <div class="fb-post-actions">
          <button class="fb-btn-like hover:bg-zinc-50"><span class="fb-ico">👍</span>Curtir</button>
          <button class="hover:bg-zinc-50"><span class="fb-ico">💬</span>Comentar</button>
          <button class="hover:bg-zinc-50"><span class="fb-ico">↗️</span>Compartilhar</button>
        </div>
        <div class="fb-post-comments">
          <div class="fb-add-comment">
            <span class="fb-avatar">W</span>
            <input type="text" placeholder="Escreva um comentário..." />
          </div>
        </div>
      </article>
    `;
    }).join('');
  }

  App.feed = { loadFeed };
})();

