/* Фон из 3D-деталей (без интерактива): ~20 деталей по всей странице */
(function () {
  var host = document.getElementById('metalBg'); if (!host) return;
  var IMG = {"rebar": [738, 391], "bolt": [400, 782], "nut": [515, 469], "washer": [595, 508], "angle": [624, 484], "ibeam": [639, 489], "pipe": [584, 434], "flange": [541, 554], "laser": [690, 456], "elbow": [569, 649], "mesh": [674, 616], "ubolt": [535, 639]};
  /* [деталь, отступ сверху %, сторона, вылет за край px, ширина px, поворот°, прозрачность, период парения с] */
  var SPOTS = [
    ['rebar', 3, 'r', -40, 460, -26, .72, 13], ['bolt', 10, 'l', -20, 230, 16, .7, 15], ['nut', 17, 'r', -30, 260, 10, .7, 12],
    ['laser', 22.5, 'l', -60, 420, -12, .62, 16], ['flange', 28.5, 'r', -50, 360, 20, .66, 14], ['angle', 34, 'l', -50, 400, -18, .62, 17],
    ['washer', 40, 'r', -20, 280, 8, .66, 12], ['ubolt', 46, 'l', -20, 250, -10, .66, 15], ['pipe', 52, 'r', -70, 440, 16, .62, 18],
    ['mesh', 58, 'l', -60, 400, 12, .56, 16], ['ibeam', 64, 'r', -70, 440, -14, .62, 17], ['elbow', 70, 'l', -30, 300, 18, .66, 13],
    ['bolt', 76, 'r', -20, 220, -22, .7, 14], ['nut', 81.5, 'l', -30, 250, -8, .66, 12], ['rebar', 86, 'r', -60, 440, 20, .62, 15],
    ['flange', 90, 'l', -40, 320, -10, .6, 16], ['laser', 94, 'r', -60, 360, 10, .56, 17], ['ubolt', 97, 'l', -10, 220, 14, .66, 14],
    ['washer', 31, 'l', -10, 170, -28, .66, 11], ['angle', 61, 'r', -10, 190, 28, .66, 13]
  ];
  var mobile = window.matchMedia('(max-width: 767px)').matches;
  var els = [];
  SPOTS.forEach(function (s, i) {
    if (mobile && i % 2) return;
    var k = mobile ? 0.55 : 1, left = s[2] === 'l';
    var d = document.createElement('div'); d.className = 'mbg';
    var mask = (i % 4 === 3) ? 'linear-gradient(0deg,#000 0,rgba(0,0,0,.85) 42%,transparent 100%)' : 'linear-gradient(' + (left ? '90deg' : '270deg') + ',#000 0,rgba(0,0,0,.9) 38%,transparent 100%)';
    d.style.cssText = 'top:' + s[1] + '%;' + (left ? 'left:' : 'right:') + Math.round(s[3] * (mobile ? .45 : 1)) + 'px;--w:' + Math.round(s[4] * k) + 'px;--r:' + s[5] + 'deg;--r0:' + (s[5] - 9) + 'deg;--o:' + (mobile ? (s[6] * .62).toFixed(2) : s[6]) + ';--fd:' + s[7] + 's;--dl:-' + (i * 1.7) + 's;--ex:' + (left ? '-70px' : '70px') + ';--mask:' + mask;
    var im = document.createElement('img'); im.src = 'assets/metal/' + s[0] + '.webp'; im.alt = ''; im.setAttribute('aria-hidden', 'true');
    im.loading = 'lazy'; im.decoding = 'async'; im.width = IMG[s[0]][0]; im.height = IMG[s[0]][1];
    d.appendChild(im); host.appendChild(d); els.push(d);
  });
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  els.forEach(function (e) { io.observe(e); });
})();
