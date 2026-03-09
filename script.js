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
        sabor: "Ciruela",
        imagen: "prunex1.png"
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
        sabor: "Granadilla",
        imagen: "floraliv.png"
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
        sabor: "Limón",
        imagen: "liquidfiber.png"
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
        sabor: "Frutos rojos",
        imagen: "baseCulinariaRoja.png"
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
        sabor: "Manzana verde",
        imagen: "baseCulinariaVerde.png"
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
        sabor: "Té de limón",
        imagen: "thermoT3.png"
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
        sabor: "Vainilla francesa",
        imagen: "biopro+fit.png"
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
        sabor: "Fresa",
        imagen: "nutraday.png"
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
        imagen: "probix.png",
        destacado: true
    },
    {
        id: 10,
        nombre: "ALPHABALANCE",
        tagline: "Nutrición inteligente para toda la familia",
        descripcion: "Suplemento vitamínico completo con vitaminas y minerales esenciales.",
        beneficios: [
            "Fortalece el sistema inmunológico",
            "Mejora la energía vital",
            "Apoya el desarrollo cognitivo",
            "Complemento nutricional diario"
        ],
        ingredientes: "Complejo de vitaminas A, B, C, D, E, minerales esenciales",
        sabor: "Frutas",
        imagen: "alphabalance.png"
    },
    {
        id: 11,
        nombre: "BIOPRO SPORT",
        tagline: "Rendimiento deportivo superior",
        descripcion: "Fórmula especializada para deportistas que buscan máximo rendimiento.",
        beneficios: [
            "Aumenta la resistencia física",
            "Acelera recuperación muscular",
            "Previene calambres",
            "Hidratación inteligente"
        ],
        ingredientes: "Electrolitos, Vitaminas del grupo B, Magnesio, Potasio",
        sabor: "Naranja",
        imagen: "biopro+sport.png"
    },
    {
        id: 12,
        nombre: "BIOPRO TECT",
        tagline: "Protección inmunológica avanzada",
        descripcion: "Refuerza tus defensas de manera natural con antioxidantes y vitaminas.",
        beneficios: [
            "Fortalece el sistema inmune",
            "Protege contra radicales libres",
            "Previene enfermedades estacionales",
            "Acelera recuperación"
        ],
        ingredientes: "Vitamina C, Zinc, Echinacea, Propóleo",
        sabor: "Naranja",
        imagen: "biopro+tect.png"
    },
    {
        id: 13,
        nombre: "CAFE Y CAFE FIT",
        tagline: "Energía natural para quemar grasa",
        descripcion: "Café funcional que acelera el metabolismo mientras disfrutas su sabor.",
        beneficios: [
            "Acelera el metabolismo",
            "Quema grasa",
            "Aumenta energía",
            "Mejora concentración"
        ],
        ingredientes: "Café verde, Café arábica, Té verde, Cromo",
        sabor: "Café",
        imagen: "cafeycafefit.png"
    },
    {
        id: 14,
        nombre: "COOL AGE",
        tagline: "Juventud y vitalidad prolongada",
        descripcion: "Fórmula antioxidante que combate el envejecimiento celular.",
        beneficios: [
            "Reduce signos de envejecimiento",
            "Protege la piel",
            "Aumenta vitalidad",
            "Antioxidante celular"
        ],
        ingredientes: "Resveratrol, Coenzima Q10, Vitaminas antioxidantes",
        sabor: "Uva",
        imagen: "cool-age.png"
    },
    {
        id: 15,
        nombre: "ON",
        tagline: "Equilibrio hormonal femenino",
        descripcion: "Suplemento natural para el bienestar de la mujer.",
        beneficios: [
            "Equilibra hormonas",
            "Alivia síntomas menstruales",
            "Mejora el estado de ánimo",
            "Apoya salud reproductiva"
        ],
        ingredientes: "Vitex, Dong Quai, Vitaminas del complejo B",
        sabor: "Frutos del bosque",
        imagen: "on.png"
    },
    {
        id: 16,
        nombre: "PACK 5-14",
        tagline: "Programa completo de bienestar",
        descripcion: "Combinación estratégica de productos para resultados óptimos.",
        beneficios: [
            "Desintoxicación completa",
            "Pérdida de peso efectiva",
            "Energía sostenida",
            "Salud integral"
        ],
        ingredientes: "Selección especial de productos sinérgicos",
        imagen: "pack5-14.png"
    },
    {
        id: 17,
        nombre: "PASSION",
        tagline: "Energía y vitalidad natural",
        descripcion: "Fórmula energizante con ingredientes naturales.",
        beneficios: [
            "Aumenta energía natural",
            "Mejora el rendimiento",
            "Reduce la fatiga",
            "Vitalidad duradera"
        ],
        ingredientes: "Macela, Guaraná, Ginseng, Vitaminas",
        sabor: "Maracuyá",
        imagen: "passion.png"
    },
    {
        id: 18,
        nombre: "PRE SPORT",
        tagline: "Pre-entreno avanzado",
        descripcion: "Preparación completa para tu rutina de ejercicios.",
        beneficios: [
            "Mayor resistencia",
            "Enfoque mental",
            "Retrasa la fatiga",
            "Rendimiento superior"
        ],
        ingredientes: "Beta-alanina, Citrulina, Cafeína natural, Vitaminas",
        sabor: "Limón",
        imagen: "presport.png"
    },
    {
        id: 19,
        nombre: "PROBAL",
        tagline: "Balance intestinal completo",
        descripcion: "Probióticos y prebióticos para una digestión saludable.",
        beneficios: [
            "Mejora la digestión",
            "Fortalece defensas",
            "Reduce inflamación",
            "Salud intestinal"
        ],
        ingredientes: "Lactobacillus, Bifidobacterium, Fibra prebiótica",
        sabor: "Natural",
        imagen: "probal.png"
    },
    {
        id: 20,
        nombre: "VERA +",
        tagline: "Salud digestiva natural",
        descripcion: "Aloe vera concentrado con propiedades curativas.",
        beneficios: [
            "Cicatriza el tracto digestivo",
            "Antiinflamatorio natural",
            "Hidrata y nutre",
            "Mejora la digestión"
        ],
        ingredientes: "Aloe vera puro, Vitamina C, Miel",
        sabor: "Aloe",
        imagen: "vera+.png"
    },
    {
        id: 21,
        nombre: "VITA ENERGIA",
        tagline: "Energía para todo el día",
        descripcion: "Complejo vitamínico que proporciona energía sostenida.",
        beneficios: [
            "Energía duradera",
            "Mejora el ánimo",
            "Reduce el estrés",
            "Vitalidad completa"
        ],
        ingredientes: "Complejo B, Magnesio, Ginseng, Guaraná",
        sabor: "Naranja",
        imagen: "vitaenergia.png"
    },
    {
        id: 22,
        nombre: "VITAXTRAT +",
        tagline: "Nutrición celular avanzada",
        descripcion: "Fórmula concentrada de vitaminas y minerales esenciales.",
        beneficios: [
            "Nutrición celular profunda",
            "Antioxidante potente",
            "Regeneración celular",
            "Salud integral"
        ],
        ingredientes: "Vitaminas A, C, E, Selenio, Zinc, Coenzima Q10",
        sabor: "Frutas cítricas",
        imagen: "vitaxtrat+.png"
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

// Crear tarjeta de producto (SIN PRECIOS)
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
    
    card.innerHTML = `
        <div class="product-image">
            <img src="img/${product.imagen}" alt="${product.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=${product.nombre.replace(/ /g, '+')}'">
        </div>
        <div class="product-info">
            <h3>${product.nombre}</h3>
            <p class="product-tagline">${product.tagline}</p>
            <p class="product-description">${product.descripcion}</p>
            ${beneficiosHTML}
            <div class="product-footer">
                <button class="btn-add" onclick='addToCart(${JSON.stringify(product).replace(/'/g, "\\'")})'>
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
        background: #4CAF50;
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