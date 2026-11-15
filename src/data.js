export const siteData = {
  whatsappNumber: "6281333004510",
  whatsappUrl: "https://wa.me/6281333004510?text=Halo%20SONGO%20Kitchen%20%26%20Co.%2C%20saya%20ingin%20memesan.",
  phoneDisplay: "+62 813-3300-4510",
  instagramUrl: "https://www.instagram.com/warungsongo.malang/",
  instagramHandle: "@warungsongo.malang",
  onlineOrderingUrl: "https://esb.co.id/RGP/DTM/order?mode=delivery",
  operationalArea: "Malang",
  address: "Alamat lengkap belum dikonfirmasi",
  businessHours: "Jam operasional belum dikonfirmasi",
};

const poster = {
  nasiGoreng: "assets/menu/nasi-goreng.png",
  mieBihunKwetiaw: "assets/menu/mie-bihun-kwetiaw.png",
  menuBaru: "assets/menu/menu-baru.png",
  minuman: "assets/menu/minuman.png",
  ayamUdang: "assets/menu/olahan-ayam-udang.png",
  promoKatsu: "assets/promotions/november-combos.jpg",
  promoJungkut: "assets/promotions/nasi-jungkut-combos.jpg",
};

const item = (id, name, price, category, sourcePoster, extra = {}) => ({
  id, name, price, category, sourcePoster, ...extra,
});

export const menuItems = [
  item("nasi-goreng-polos", "Nasi Goreng Polos", 14000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-mawut", "Nasi Goreng Mawut", 20000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-sosis", "Nasi Goreng Sosis", 18000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-jawa-telur-dadar", "Nasi Goreng Jawa + Telur Dadar", 20000, "Nasi Goreng", poster.nasiGoreng, { featured: true, chefChoice: true }),
  item("nasi-goreng-omelette", "Nasi Goreng Omelette", 22000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-ikan-asin", "Nasi Goreng Ikan Asin", 22000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-thailand", "Nasi Goreng Thailand", 24000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-spesial-telur-ceplok", "Nasi Goreng Spesial + Telur Ceplok", 24000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-seafood", "Nasi Goreng Seafood", 25000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-hongkong", "Nasi Goreng Hongkong", 26000, "Nasi Goreng", poster.nasiGoreng),
  item("nasi-goreng-yangzhou", "Nasi Goreng Yangzhou", 28000, "Nasi Goreng", poster.nasiGoreng, { chefChoice: true }),
  item("nasi-goreng-songo", "Nasi Goreng Songo", 30000, "Nasi Goreng", poster.nasiGoreng),

  item("bakmie-goreng", "Bakmie Goreng", 15000, "Bakmie", poster.mieBihunKwetiaw),
  item("bakmie-kuah", "Bakmie Kuah", 15000, "Bakmie", poster.mieBihunKwetiaw),
  item("bakmie-jawa", "Bakmie Jawa", 20000, "Bakmie", poster.mieBihunKwetiaw, { featured: true, chefChoice: true }),
  item("bakmie-sosis", "Bakmie Sosis", 20000, "Bakmie", poster.mieBihunKwetiaw),
  item("bakmie-spesial", "Bakmie Spesial", 24000, "Bakmie", poster.mieBihunKwetiaw),
  item("bakmie-lada-hitam", "Bakmie Lada Hitam", 24000, "Bakmie", poster.mieBihunKwetiaw),
  item("bakmie-seafood", "Bakmie Seafood", 26000, "Bakmie", poster.mieBihunKwetiaw),
  item("mie-tomyam-seafood", "Mie Tomyam Seafood", 28000, "Bakmie", poster.mieBihunKwetiaw),

  item("bihun-goreng", "Bihun Goreng", 15000, "Bihun", poster.mieBihunKwetiaw),
  item("bihun-kuah", "Bihun Kuah", 15000, "Bihun", poster.mieBihunKwetiaw),
  item("bihun-jawa", "Bihun Jawa", 20000, "Bihun", poster.mieBihunKwetiaw),
  item("bihun-sosis", "Bihun Sosis", 20000, "Bihun", poster.mieBihunKwetiaw),
  item("bihun-spesial", "Bihun Spesial", 24000, "Bihun", poster.mieBihunKwetiaw),
  item("bihun-seafood", "Bihun Seafood", 26000, "Bihun", poster.mieBihunKwetiaw),

  item("kwetiaw-kuah", "Kwetiaw Kuah", 22000, "Kwetiaw", poster.mieBihunKwetiaw),
  item("kwetiaw-goreng", "Kwetiaw Goreng", 22000, "Kwetiaw", poster.mieBihunKwetiaw),
  item("kwetiaw-seafood", "Kwetiaw Seafood", 26000, "Kwetiaw", poster.mieBihunKwetiaw),
  item("kwetiaw-siram", "Kwetiaw Siram", 26000, "Kwetiaw", poster.mieBihunKwetiaw, { chefChoice: true }),
  item("kwetiaw-goreng-spesial", "Kwetiaw Goreng Spesial", 27000, "Kwetiaw", poster.mieBihunKwetiaw),

  item("ayam-koloke", "Koloke", 26000, "Olahan Ayam", poster.ayamUdang),
  item("ayam-saus-lada-hitam", "Ayam Saus Lada Hitam", 28000, "Olahan Ayam", poster.ayamUdang),
  item("ayam-saus-mentega", "Ayam Saus Mentega", 28000, "Olahan Ayam", poster.ayamUdang),
  item("ayam-saus-inggris", "Ayam Saus Inggris", 28000, "Olahan Ayam", poster.ayamUdang),
  item("ayam-saus-rica-rica", "Ayam Saus Rica-rica", 28000, "Olahan Ayam", poster.ayamUdang),
  item("chicken-steak", "Chicken Steak", 22000, "Olahan Ayam", poster.ayamUdang),
  item("fu-yung-hai", "Fu Yung Hai", 26000, "Olahan Ayam", poster.ayamUdang),

  item("udang-asam-manis", "Udang Asam Manis", 45000, "Olahan Udang", poster.ayamUdang),
  item("udang-lada-hitam", "Udang Lada Hitam", 45000, "Olahan Udang", poster.ayamUdang),
  item("udang-saus-mentega", "Udang Saus Mentega", 45000, "Olahan Udang", poster.ayamUdang),
  item("udang-saus-inggris", "Udang Saus Inggris", 45000, "Olahan Udang", poster.ayamUdang),

  item("chicken-katsu-nasi", "Chicken Katsu + Nasi", 22000, "Menu Baru", poster.menuBaru, { featured: true }),
  item("nasi-ayam-asam-manis", "Nasi Ayam Asam Manis", 20000, "Menu Baru", poster.menuBaru),
  item("nasi-ayam-lada-hitam", "Nasi Ayam Lada Hitam", 22000, "Menu Baru", poster.menuBaru),
  item("nasi-ayam-oriental", "Nasi Ayam Oriental", 26000, "Menu Baru", poster.menuBaru),
  item("nasi-capcay", "Nasi Capcay", 26000, "Menu Baru", poster.menuBaru),

  item("lychee-tea", "Lychee Tea", 8000, "Minuman · Tea Series", poster.minuman),
  item("lemon-tea", "Lemon Tea", 8000, "Minuman · Tea Series", poster.minuman),
  item("peach-tea", "Peach Tea", 10000, "Minuman · Tea Series", poster.minuman),
  item("lychee-rose-tea", "Lychee & Rose Tea (Soda)", 15000, "Minuman · Tea Series", poster.minuman),
  item("original-tea", "Original Tea", 5000, "Minuman · Tea Series", poster.minuman),
  item("kopi-susu-songo", "Kopi Susu Songo (ICE)", 13000, "Minuman · Creamy Series", poster.minuman),
  item("matcha-latte", "Matcha Latte", 12000, "Minuman · Creamy Series", poster.minuman),
  item("taro-milk", "Taro & Milk", 12000, "Minuman · Creamy Series", poster.minuman),
  item("blue-bubblegum-milk", "Blue Bubblegum Milk", 12000, "Minuman · Creamy Series", poster.minuman),
  item("pink-lava", "Pink Lava", 12000, "Minuman · Creamy Series", poster.minuman),
  item("milo", "Milo", 12000, "Minuman · Creamy Series", poster.minuman),
  item("rose-lime-soda", "Rose & Lime (Soda)", 13000, "Minuman · Soda & Reguler", poster.minuman),
  item("lychee-lime-soda", "Lychee & Lime (Soda)", 13000, "Minuman · Soda & Reguler", poster.minuman),
  item("jeruk-nipis", "Jeruk Nipis", 8000, "Minuman · Soda & Reguler", poster.minuman),
  item("wedang-jahe", "Wedang Jahe", 10000, "Minuman · Soda & Reguler", poster.minuman),
  item("air-mineral-600ml", "Air Mineral (600 ml)", 6000, "Minuman · Soda & Reguler", poster.minuman),
  item("kopi-tubruk", "Kopi Tubruk", 8000, "Minuman · Soda & Reguler", poster.minuman),

  item("nasi-jungkut-ayam-geprek", "Nasi Jungkut Ayam Geprek", 20000, "Promo & Combo", poster.promoJungkut, { promotion: true }),
  item("nasi-jungkut-pink-lava", "Nasi Jungkut Ayam Geprek + Pink Lava", 24000, "Promo & Combo", poster.promoJungkut, { promotion: true }),
  item("nasi-jungkut-berdua", "Nasi Jungkut Ayam Geprek (2 Porsi) + 2 Pink Lava", 47000, "Promo & Combo", poster.promoJungkut, { promotion: true }),
  item("katsu-combo-es-teh", "Katsu Combo · Nasi Chicken Katsu + Es Teh", 25000, "Promo & Combo", poster.promoKatsu, { originalPrice: 27000, promotion: true }),
  item("nasi-goreng-tawa-combo", "Nasi Goreng Tawa Combo · Nasi Goreng Jawa + Es Teh", 23000, "Promo & Combo", poster.promoKatsu, { originalPrice: 25000, promotion: true }),
];

export const promotionItems = menuItems.filter((entry) => entry.promotion);

export const menuPosters = [
  { title: "Nasi Goreng", src: poster.nasiGoreng, alt: "Materi menu SONGO untuk aneka nasi goreng dengan nama dan harga." },
  { title: "Bakmie, Bihun & Kwetiaw", src: poster.mieBihunKwetiaw, alt: "Materi menu SONGO untuk bakmie, bihun, dan kwetiaw dengan nama dan harga." },
  { title: "Olahan Ayam & Udang", src: poster.ayamUdang, alt: "Materi menu SONGO untuk olahan ayam dan udang dengan nama dan harga." },
  { title: "Menu Baru", src: poster.menuBaru, alt: "Materi menu baru SONGO dengan nama hidangan dan harga." },
  { title: "Minuman", src: poster.minuman, alt: "Materi menu minuman SONGO dengan nama dan harga." },
];
