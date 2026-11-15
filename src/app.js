import { menuItems, menuPosters, promotionItems, siteData } from "./data.js";
import { mountSiteShell } from "./site-shell.js";

mountSiteShell();

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));
const formatPrice = (amount) => `Rp ${new Intl.NumberFormat("id-ID").format(amount)}`;
const menuGrid = document.querySelector("[data-menu-grid]");
const featuredGrid = document.querySelector("[data-featured-menu]");
const filterList = document.querySelector("[data-menu-filters]");
const searchInput = document.querySelector("[data-menu-search]");
const emptyState = document.querySelector("[data-menu-empty]");
const resultNote = document.querySelector("[data-menu-result-note]");
const activeFilters = { category: "all", query: "" };

function whatsappUrl(message) {
  if (!message) return siteData.whatsappUrl;
  return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function menuOrderLink(item) {
  const message = `Halo SONGO Kitchen & Co., saya ingin memesan ${item.name}.`;
  return `<a class="menu-order-link" href="${escapeHTML(whatsappUrl(message))}" target="_blank" rel="noopener noreferrer">Pesan via WhatsApp <span aria-hidden="true">↗</span></a>`;
}

function menuCard(item, index) {
  return `<article class="menu-card">
    <div class="menu-card-art menu-art-${index % 4}" aria-hidden="true"><span class="menu-card-number">${String(index + 1).padStart(2, "0")}</span><span class="menu-card-stamp">${escapeHTML(item.category.split(" · ")[0])}</span><span class="menu-card-word">SONGO</span></div>
    <div class="menu-card-body"><div class="menu-card-meta"><span>${escapeHTML(item.category)}</span>${item.chefChoice ? '<span class="chef-pick">CHEF CHOICE</span>' : ""}</div><h3>${escapeHTML(item.name)}</h3><p class="featured-price">${formatPrice(item.price)}</p>${menuOrderLink(item)}</div>
  </article>`;
}

function menuRow(item) {
  const comparePrice = item.originalPrice ? `<s>${formatPrice(item.originalPrice)}</s>` : "";
  return `<article class="menu-item-row">
    <div class="menu-row-name"><span class="menu-row-category">${escapeHTML(item.category)}</span><h3>${escapeHTML(item.name)}</h3>${item.chefChoice ? '<span class="chef-pick">CHEF CHOICE · sesuai materi menu</span>' : ""}</div>
    <div class="menu-row-price">${comparePrice}<strong>${formatPrice(item.price)}</strong></div>
    ${menuOrderLink(item)}
  </article>`;
}

function renderFeatured() {
  if (!featuredGrid) return;
  const featured = menuItems.filter((item) => item.featured);
  featuredGrid.innerHTML = featured.map(menuCard).join("");
}

function renderFilters() {
  if (!filterList) return;
  const categories = [...new Set(menuItems.map((item) => item.category))];
  filterList.innerHTML = [
    '<button class="filter-chip is-active" type="button" data-category="all" aria-pressed="true">Semua</button>',
    ...categories.map((category) => `<button class="filter-chip" type="button" data-category="${escapeHTML(category)}" aria-pressed="false">${escapeHTML(category)}</button>`),
  ].join("");

  filterList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeFilters.category = button.dataset.category;
    filterList.querySelectorAll("[data-category]").forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("is-active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    renderMenu();
  });
}

function renderMenu() {
  if (!menuGrid) return;
  const query = activeFilters.query.trim().toLocaleLowerCase("id-ID");
  const filtered = menuItems.filter((item) => {
    const matchesCategory = activeFilters.category === "all" || item.category === activeFilters.category;
    const searchable = `${item.name} ${item.category}`.toLocaleLowerCase("id-ID");
    return matchesCategory && (!query || searchable.includes(query));
  });
  menuGrid.innerHTML = filtered.map(menuRow).join("");
  menuGrid.hidden = filtered.length === 0;
  if (emptyState) emptyState.hidden = filtered.length > 0;
  if (resultNote) resultNote.textContent = `${filtered.length} menu ditampilkan`;
}

function renderMenuPosters() {
  const gallery = document.querySelector("[data-menu-posters]");
  if (!gallery) return;
  gallery.innerHTML = menuPosters.map((poster) => `<figure class="menu-source-card"><a href="${escapeHTML(poster.src)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHTML(poster.src)}" alt="${escapeHTML(poster.alt)}" loading="lazy" /><span>Lihat gambar penuh ↗</span></a><figcaption>${escapeHTML(poster.title)}</figcaption></figure>`).join("");
}

function renderPromotions() {
  const list = document.querySelector("[data-promotion-list]");
  if (!list) return;
  list.innerHTML = promotionItems.map((entry, index) => `<article class="promo-item-card reveal">
    <div class="promo-item-number">${String(index + 1).padStart(2, "0")} <span>✳</span></div>
    <p class="eyebrow">${escapeHTML(entry.category)}</p>
    <h3>${escapeHTML(entry.name)}</h3>
    <div class="promo-item-price">${entry.originalPrice ? `<s>${formatPrice(entry.originalPrice)}</s>` : ""}<strong>${formatPrice(entry.price)}</strong></div>
    ${menuOrderLink(entry)}
  </article>`).join("");
}

function configureExternalLinks() {
  const linkGroups = [
    ["[data-link-whatsapp]", whatsappUrl()],
    ["[data-link-instagram]", siteData.instagramUrl],
    ["[data-link-online]", siteData.onlineOrderingUrl],
  ];
  linkGroups.forEach(([selector, href]) => {
    document.querySelectorAll(selector).forEach((link) => {
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  });
  document.querySelectorAll("[data-instagram-label]").forEach((label) => {
    label.textContent = siteData.instagramHandle;
  });
  document.querySelectorAll("[data-phone-display]").forEach((label) => {
    label.textContent = siteData.phoneDisplay;
  });
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

function setupMobileNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-menu]");
  if (!toggle || !nav) return;

  const closeMenu = (returnFocus = false) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const opening = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(opening));
    toggle.setAttribute("aria-label", opening ? "Tutup menu navigasi" : "Buka menu navigasi");
    nav.classList.toggle("is-open", opening);
    document.body.classList.toggle("menu-open", opening);
    if (opening) nav.querySelector("a")?.focus();
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") closeMenu(true);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

function setupMotion() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderFeatured();
renderFilters();
renderMenu();
renderMenuPosters();
renderPromotions();
configureExternalLinks();
setupMobileNavigation();
if (searchInput) {
  searchInput.addEventListener("input", () => {
    activeFilters.query = searchInput.value;
    renderMenu();
  });
}
setupMotion();
