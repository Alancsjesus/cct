// Service worker da Plataforma CCT: guarda a interface para abrir rápido e sem internet.
// Os dados vêm da planilha a cada abertura; sem conexão, a página mostra a última cópia salva.
const VERSAO = 'cct-v2';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;     // API e CDNs passam direto
  if (u.pathname.endsWith('/config.js')) return;                               // config sempre da rede
  e.respondWith(
    fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSAO).then(ca => ca.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
