(function () {
  const App = (window.App = window.App || {});

  async function getJSON(url, fallback) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (e) {
      console.warn('Falha ao carregar', url, '— usando fallback.', e);
      return fallback;
    }
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  const PEXELS_POOL = [
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/4069290/pexels-photo-4069290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800'
  ];

  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomPexelsImage(width) {
    const url = randomFrom(PEXELS_POOL);
    if (!width) return url;
    const u = new URL(url);
    const params = u.searchParams;
    params.set('w', String(width));
    params.set('dpr', '2');
    params.set('auto', 'compress');
    params.set('cs', 'tinysrgb');
    u.search = params.toString();
    return u.toString();
  }

  function replaceWithRandomIfPlaceholder(src, width) {
    if (!src) return src;
    if (/assets\/(img|images)\/naruto\.jpg$/i.test(src) || /naruto\.jpg$/i.test(src)) {
      return randomPexelsImage(width);
    }
    return src;
  }

  App.utils = { getJSON, escapeHtml, randomPexelsImage, replaceWithRandomIfPlaceholder };
})();

