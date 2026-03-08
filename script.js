// Productos
const products = [
    {
        id: 1,
        nombre: "PRUNEX 1",
        tagline: "Limpia el colon y combate el estreñimiento",
        descripcion: "Combinación natural de fibras y extractos herbales que ayudan a mejorar la digestión y la salud intestinal.",
        beneficios: [
            "Promueve evacuaciones regulares",
            "Desintoxica el colon",
            "Mejora la absorción de nutrientes",
            "Combate el estreñimiento",
            "Ayuda a eliminar residuos acumulados"
        ],
        ingredientes: "Psyllium, Inulina de achicoria, Linaza, Guindón, Kelp, Anís estrella",
        precios: {
            "7 sobres": 38700,
            "28 sobres": 138099
        },
        sabor: "Ciruela",
        imagen: "prunex1.jpg"
    },
    {
        id: 2,
        nombre: "FLORA LIV",
        tagline: "Protege tu organismo desde adentro",
        descripcion: "Bebida funcional con probióticos que ayudan a regenerar la flora intestinal.",
        beneficios: [
            "Regenera la flora intestinal",
            "Mejora la digestión",
            "Reduce la acidez y gastritis",
            "Refuerza el sistema inmunológico",
            "Ayuda a personas intolerantes a la lactosa"
        ],
        ingredientes: "Cultivos probióticos, Fibra prebiótica, Uchuva, Granadilla",
        precios: {
            "7 sobres": 46400,
            "28 sobres": 165700
        },
        sabor: "Granadilla",
        imagen: "flora-liv.jpg"
    },
    {
        id: 3,
        nombre: "LIQUID FIBER",
        tagline: "La puntualidad es una virtud de tu sistema digestivo",
        descripcion: "Bebida rica en fibras que favorece el tránsito intestinal.",
        beneficios: [
            "Regula las evacuaciones",
            "Reduce absorción de grasas y azúcar",
            "Mejora la absorción de calcio",
            "Ideal para dietas irregulares"
        ],
        precios: {
            "28 sobres": 110400
        },
        sabor: "Limón",
        imagen: "liquid-fiber.jpg"
    },
    {
        id: 4,
        nombre: "BERRY BALANCE",
        tagline: "Protege tu sistema urinario",
        descripcion: "Concentrado de antioxidantes que protege tu sistema urinario de manera natural.",
        beneficios: [
            "Previene infecciones urinarias",
            "Mantiene equilibrio del pH",
            "Antioxidante",
            "Favorece la eliminación de líquidos"
        ],
        ingredientes: "Cranberry, Blueberry, Camu camu, Probióticos",
        precios: {
            "28 sobres": 179399
        },
        sabor: "Frutos rojos",
        imagen: "berry-balance.jpg"
    },
    {
        id: 5,
        nombre: "GREEN BALANCE",
        tagline: "Equilibra el pH y depura tu organismo",
        descripcion: "Bebida alcalinizante que elimina toxinas y aporta energía natural.",
        beneficios: [
            "Alcaliniza el cuerpo",
            "Elimina toxinas",
            "Fortalece el sistema inmunológico",
            "Aporta energía natural"
        ],
        ingredientes: "Espirulina, Chlorella, Alfalfa, Espinaca, Jengibre, Manzana verde",
        precios: {
            "28 sobres": 138099
        },
        sabor: "Manzana verde",
        imagen: "green-balance.jpg"
    },
    {
        id: 6,
        nombre: "THERMO T3",
        tagline: "Transforma la grasa en energía",
        descripcion: "Acelera el metabolismo y ayuda en la oxidación de grasa.",
        beneficios: [
            "Acelera la pérdida de peso",
            "Reduce grasa corporal",
            "Acelera metabolismo",
            "Ayuda en colesterol alto"
        ],
        ingredientes: "Té verde, Té negro, Té rojo, Cromo, Camu camu",
        precios: {
            "7 sobres": 38700,
            "28 sobres": 138099
        },
        sabor: "Té de limón",
        imagen: "thermo-t3.jpg"
    },
    {
        id: 7,
        nombre: "BIOPROTEIN",
        tagline: "Proteína de alta calidad para nutrición completa",
        descripcion: "Fortalece músculos, huesos y sistema inmunológico.",
        beneficios: [
            "Fortalece músculos y huesos",
            "Mejora el sistema inmunológico",
            "Aumenta energía",
            "Favorece recuperación muscular"
        ],
        precios: {
            "14 sobres": 130500
        },
        sabor: "Vainilla francesa",
        imagen: "bioprotein.jpg"
    },
    {
        id: 8,
        nombre: "NUTRADAY",
        tagline: "Nutrición completa para toda la familia",
        descripcion: "Rico en vitaminas y minerales para fortalecer defensas.",
        beneficios: [
            "Fortalece defensas",
            "Aumenta energía",
            "Mejora regeneración celular",
            "Rico en vitaminas y minerales"
        ],
        precios: {
            "28 sobres": 138099
        },
        sabor: "Fresa",
        imagen: "nutraday.jpg"
    },
    {
        id: 9,
        nombre: "PROBIX",
        tagline: "Producto más vendido para reducción de grasa visceral",
        descripcion: "La grasa más difícil y peligrosa es la grasa visceral, la que se acumula alrededor de los órganos. Probix trabaja desde adentro ayudando a reducir esa grasa y la medida de tu cintura.",
        beneficios: [
            "Reduce la grasa visceral",
            "Reduce la circunferencia de la cintura",
            "Regula el metabolismo",
            "Mejora la salud intestinal"
        ],
        ingredientes: "10 mil millones de probióticos por sobre",
        precios: {
            "28 sobres": 138099
        },
        imagen: "probix.jpg",
        destacado: true
    }
];

// Cargar productos
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Cargar productos en la grid
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
    
    // Actualizar contador del carrito
    updateCartCount();
});

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let beneficiosHTML = '';
    if (product.beneficios) {
        beneficiosHTML = '<ul class="product-benefits">';
        product.beneficios.forEach(b => {
            beneficiosHTML += `<li><i class="fas fa-check-circle"></i> ${b}</li>`;
        });
        beneficiosHTML += '</ul>';
    }
    
    let preciosHTML = '<div class="product-prices">';
    for (const [presentacion, precio] of Object.entries(product.precios)) {
        preciosHTML += `
            <div class="price-item">
                <span>${presentacion}:</span>
                <strong>$${precio.toLocaleString('es-CO')}</strong>
            </div>
        `;
    }
    preciosHTML += '</div>';
    
    // Tomar el precio más bajo para mostrar
    const preciosArray = Object.values(product.precios);
    const precioMinimo = Math.min(...preciosArray);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="img/${product.imagen}" alt="${product.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=${product.nombre}'">
        </div>
        <div class="product-info">
            <h3>${product.nombre}</h3>
            <p class="product-tagline">${product.tagline}</p>
            <p class="product-description">${product.descripcion}</p>
            ${beneficiosHTML}
            ${preciosHTML}
            <div class="product-footer">
                <span class="product-price">Desde $${precioMinimo.toLocaleString('es-CO')}</span>
                <button class="btn-add" onclick='addToCart(${JSON.stringify(product)})'>
                    Agregar <i class="fas fa-cart-plus"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Función para agregar al carrito
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: Math.min(...Object.values(product.precios)),
            imagen: product.imagen,
            cantidad: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Mostrar notificación
    showNotification(`${product.nombre} agregado al carrito`);
}

// Actualizar contador del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(el => {
        el.textContent = totalItems;
    });
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});