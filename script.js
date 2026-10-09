const products = [
  { name: 'Ray-Ban Meta Wayfarer, gafas inteligentes', url: 'https://amzn.to/4snR7jT', price: '499 €', image: 'img_juanjo/RAY_BAN.jpg', tag: 'Tecnología' },
  { name: 'HUAWEI Watch GT 6, el detalle que siempre acompaña', url: 'https://amzn.to/4dJZqTz', price: '219 €', image: 'img_juanjo/reloj.jpg', tag: 'Tecnología' },
  { name: 'Cafetera De’Longhi Magnifica S Smart', url: 'https://amzn.to/4vqlngJ', price: '361 €', image: 'img_juanjo/CAFETERA DE LONGHI.jpg', tag: 'Hogar' },
  { name: 'Dreame Miracle Pro, secador de alta velocidad', url: 'https://amzn.to/4c7qCKN', price: '399 €', image: 'img_juanjo/SECADOR DE PELO DREAME.jpg', tag: 'Cuidado personal' },
  { name: 'Samsung Galaxy A57 5G, 256 GB', url: 'https://amzn.to/4tqCyh7', price: '559 €', image: 'img_juanjo/GALAXY A57.jpg', tag: 'Tecnología' },
  { name: 'Motorola Moto G77 5G, 256 GB', url: 'https://amzn.to/4eh4RcQ', price: '320 €', image: 'img_juanjo/motorola.jpg', tag: 'Tecnología' },
  { name: 'HONOR Magic8 Lite 5G', url: 'https://amzn.to/4t0Sfeu', price: '359 €', image: 'img_juanjo/HONOR MAGIC8.jpg', tag: 'Tecnología' },
  { name: 'vivo Y31 5G, 12 GB de RAM', url: 'https://amzn.to/3OwtKXD', price: '265 €', image: 'img_juanjo/VIVO Y31.jpg', tag: 'Tecnología' }
];

function renderProducts(filter = 'Todos') {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;
  const visibleProducts = filter === 'Todos' ? products : products.filter(product => product.tag === filter);
  grid.innerHTML = visibleProducts.map((product, index) => `
    <a class="product-card" href="${product.url}" target="_blank" rel="noopener noreferrer" style="animation-delay:${index * 60}ms">
      <div class="card-image-wrapper"><img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy"><span class="tag">${product.tag}</span></div>
      <div class="card-content"><h3 class="card-title">${product.name}</h3><div class="card-footer"><span class="price">${product.price}</span><span class="cta-button">Ver oferta <i class="bi bi-arrow-up-right"></i></span></div></div>
    </a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter.active')?.classList.remove('active');
      button.classList.add('active');
      renderProducts(button.dataset.filter);
    });
  });
});
