const products = [
    {
        name: "Motorola Moto G77 5G 256GB Black Olive",
        url: "https://amzn.to/4eh4RcQ",
        price: "320€",
        image: "img_juanjo/motorola.jpg",
        tag: "Smartphone"
    },
    {
        name: "Samsung Galaxy A57 5G, 256GB",
        url: "https://amzn.to/4tqCyh7",
        price: "559€",
        image: "img_juanjo/GALAXY A57.jpg",
        tag: "Smartphone"
    },
    {
        name: "vivo Y31 5G, Smartphone con 6 GB + 6 GB de RAM",
        url: "https://amzn.to/3OwtKXD",
        price: "265€",
        image: "img_juanjo/VIVO Y31.jpg",
        tag: "Smartphone"
    },
    {
        name: "HONOR Magic8 Lite 5G Smartphone",
        url: "https://amzn.to/4t0Sfeu",
        price: "359€",
        image: "img_juanjo/HONOR MAGIC8.jpg",
        tag: "Smartphone"
    },
    {
        name: "DREAME Miracle Pro Secador de Pelo de Alta Velocidad",
        url: "https://amzn.to/4c7qCKN",
        price: "399€",
        image: "img_juanjo/SECADOR DE PELO DREAME.jpg",
        tag: "Cuidado Personal"
    },
    {
        name: "CAFETERA DELONGHI MAGNIFICA S SMART",
        url: "https://amzn.to/4vqlngJ",
        price: "361€",
        image: "img_juanjo/CAFETERA DE LONGHI.jpg",
        tag: "Hogar"
    },
    {
        name: "HUAWEI WATCH GT 6 41mm",
        url: "https://amzn.to/4dJZqTz",
        price: "219€",
        image: "img_juanjo/reloj.jpg",
        tag: "Wearable"
    },
    {
        name: "Ray-Ban | Meta Wayfarer (Gen 2)",
        url: "https://amzn.to/4snR7jT",
        price: "499€",
        image: "img_juanjo/RAY_BAN.jpg",
        tag: "Accesorios"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.products-grid');

    products.forEach((product, i) => {
        const card = document.createElement('a');
        card.className = 'product-card';
        card.href = product.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.style.animationDelay = `${i * 0.1}s`;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy">
                <span class="tag">${product.tag}</span>
            </div>
            <div class="card-content">
                <h2 class="card-title">${product.name}</h2>
                <div class="card-footer">
                    <span class="price">${product.price}</span>
                    <span class="cta-button">Ver Oferta 
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
});