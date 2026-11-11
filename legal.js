(function () {
  var D = {"legalName": "ООО «Нова»", "inn": "", "ogrn": "", "legalAddress": "Революционная, 72к6, Октябрьский р-н, Самара, 443045", "email": "samnova@yandex.ru", "phone": "8 (917) 107-56-20", "hosting": "GitHub Pages (GitHub, Inc.)", "docsDate": "11 ноября 2026 г.", "siteUrl": ""};
  var o = (window.SITE_OVERRIDES || {}).settings || {};
  var S = {}; Object.keys(D).forEach(function (k) { S[k] = (o[k] != null && o[k] !== '') ? o[k] : D[k]; });
  if (!S.siteUrl) S.siteUrl = location.origin + location.pathname.replace(/[^\/]*$/, '');
  function telOf(v) { var d = String(v).replace(/\D/g, ''); if (d.length === 11 && (d[0] === '8' || d[0] === '7')) return '+7' + d.slice(1); if (d.length === 10) return '+7' + d; return d ? '+' + d : ''; }
  document.querySelectorAll('[data-fill]').forEach(function (el) {
    var v = S[el.getAttribute('data-fill')];
    if (v) { el.textContent = v; return; }
    var box = el.closest('[data-hide-empty]');
    if (box) box.hidden = true; else { el.textContent = '[указать в панели управления]'; el.classList.add('todo'); }
  });
  document.querySelectorAll('[data-fill-href]').forEach(function (a) { var k = a.getAttribute('data-fill-href'); if (k === 'email') a.href = 'mailto:' + S.email; if (k === 'phone') a.href = 'tel:' + telOf(S.phone); });
  /* Уведомление об использовании данных */
  try { if (localStorage.getItem('nova_notice')) return; } catch (e) {}
  var st = document.createElement('style');
  st.textContent = '.ntc{position:fixed;left:16px;bottom:16px;z-index:70;max-width:430px;background:#1a1c20;color:#d3d6da;border:1px solid #2e3036;border-radius:10px;padding:14px 16px;font:13px/1.5 Inter,system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5)}.ntc p{margin:0 0 10px}.ntc a{color:#ff8a1f}.ntc button{border:0;border-radius:6px;background:#ff8a1f;color:#1a1209;font:600 13px Inter,sans-serif;padding:9px 18px;cursor:pointer}@media(max-width:639px){.ntc{left:12px;right:12px;bottom:92px;max-width:none}}';
  document.head.appendChild(st);
  var b = document.createElement('div'); b.className = 'ntc'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Уведомление об использовании данных');
  b.innerHTML = '<p>Сайт использует только технические данные, необходимые для работы. Аналитические и рекламные файлы cookie не применяются. Карта Яндекса загружается только по вашему нажатию. <a href="cookies.html">Подробнее</a></p><button type="button">Понятно</button>';
  b.querySelector('button').addEventListener('click', function () { try { localStorage.setItem('nova_notice', '1'); } catch (e) {} b.remove(); });
  document.body.appendChild(b);
})();
