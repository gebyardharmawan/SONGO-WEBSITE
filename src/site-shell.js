const pages = [
  ["home", "index.html", "Beranda"],
  ["menu", "menu.html", "Menu"],
  ["story", "story.html", "Our Story"],
  ["promotions", "promotions.html", "Promosi"],
  ["packaging", "packaging.html", "Packaging"],
  ["locations", "locations.html", "Lokasi"],
  ["contact", "contact.html", "Kontak"],
];

function renderHeader(activePage) {
  const nav = pages.map(([key, href, label]) =>
    `<a href="${href}"${activePage === key ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");

  return `<div class="topline" aria-label="Good Food, Good Company"><div class="topline-track" aria-hidden="true">
    <span>GOOD FOOD, GOOD COMPANY</span><span class="topline-star">✳</span><span>SONGO KITCHEN &amp; CO.</span><span class="topline-star">✳</span>
    <span>GOOD FOOD, GOOD COMPANY</span><span class="topline-star">✳</span><span>SONGO KITCHEN &amp; CO.</span><span class="topline-star">✳</span>
  </div></div>
  <header class="site-header"><div class="nav-shell">
    <a class="brand" href="index.html#top" aria-label="SONGO Kitchen &amp; Co. — Beranda"><img class="brand-logo" src="assets/brand/songo-primary-logo.png" alt="" width="1090" height="680" /></a>
    <button class="menu-toggle" type="button" aria-label="Buka menu navigasi" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
    <nav class="site-nav" id="site-nav" aria-label="Navigasi utama" data-menu>${nav}<a class="nav-order" data-link-online target="_blank" rel="noopener noreferrer">Order Online <span aria-hidden="true">↗</span></a></nav>
  </div></header>`;
}

function renderFooter() {
  return `<footer class="site-footer page-gutter">
    <div class="footer-top"><a class="brand brand-footer" href="index.html#top" aria-label="SONGO Kitchen &amp; Co. — Beranda"><img class="brand-logo" src="assets/brand/songo-primary-logo.png" alt="" width="1090" height="680" /></a><p>GOOD FOOD.<br /><em>GOOD COMPANY.</em></p><a class="back-top" href="#main">KEMBALI KE ATAS <span aria-hidden="true">↑</span></a></div>
    <div class="footer-details">
      <div><h2>PESAN</h2><a data-link-whatsapp>WhatsApp · +62 813-3300-4510 ↗</a><a data-link-online target="_blank" rel="noopener noreferrer">Order Online via ESB ↗</a></div>
      <div><h2>IKUTI &amp; TEMUKAN</h2><a data-link-instagram target="_blank" rel="noopener noreferrer">Instagram · @warungsongo.malang ↗</a><p>Area operasional: Malang saja</p></div>
      <div><h2>INFORMASI</h2><p>Alamat lengkap belum dikonfirmasi</p><p>Jam operasional belum dikonfirmasi</p><a href="contact.html">Hubungi SONGO ↗</a></div>
    </div>
    <div class="footer-bottom"><span>© <span data-year></span> SONGO KITCHEN &amp; CO.</span><span>GOOD FOOD, GOOD COMPANY <b>✳</b></span><a href="index.html#top">BERANDA ↑</a></div>
  </footer>`;
}

export function mountSiteShell() {
  const activePage = document.body.dataset.page || "home";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  if (header) header.innerHTML = renderHeader(activePage);
  if (footer) footer.innerHTML = renderFooter();
}
