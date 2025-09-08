(function () {
  const App = (window.App = window.App || {});
  const U = App.utils;

  async function loadContacts() {
    const root = document.getElementById('fb-contacts-root');
    if (!root) return;
    const fallback = [
      { name: 'Sasuke Uchiha', initial: 'S', online: true },
      { name: 'Kakashi Hatake', initial: 'K', online: true }
    ];
    const contacts = await U.getJSON('assets/data/contacts.json', fallback);
    root.innerHTML = contacts.map(c => `
      <li><span class="fb-avatar ${c.online ? 'online' : ''}">${U.escapeHtml ? U.escapeHtml(c.initial || '?') : (c.initial || '?')}</span>${U.escapeHtml ? U.escapeHtml(c.name) : c.name}</li>
    `).join('');
  }

  App.contacts = { loadContacts };
})();

