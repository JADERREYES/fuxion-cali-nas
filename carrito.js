document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Cargar carrito
    loadCart();
    
    // Event listener para el botón de checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const checkoutForm = document.getElementById('checkoutForm');
            if (checkoutForm) {
                checkoutForm.style.display = 'block';
                this.style.display = 'none';
                window.scrollTo({
                    top: checkoutForm.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Event listener para enviar por WhatsApp
    const enviarBtn = document.getElementById('enviarWhatsApp');
    if (enviarBtn) {
        enviarBtn.addEventListener('click', enviarPedidoWhatsApp);
    }
});

// Cargar carrito
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartSummary = document.querySelector('.cart-summary-panel');
    
    if (cart.length === 0) {
        // Mostrar carrito vacío
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartItems) cartItems.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.display = 'none';
        if (cartSummary) cartSummary.style.opacity = '0.5';
        
        // Ocultar formulario si está visible
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) checkoutForm.style.display = 'none';
    } else {
        // Mostrar items del carrito
        if (emptyCart) emptyCart.style.display = 'none';
        if (cartItems) {
            cartItems.style.display = 'block';
            cartItems.innerHTML = '';
            
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <img src="img/${item.imagen}" alt="${item.nombre}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=${item.nombre.replace(/ /g, '+')}'">
                    <div class="cart-item-info">
                        <h4>${item.nombre}</h4>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity-value">${item.cantidad}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <button class="btn-remove" onclick="removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                
                cartItems.appendChild(itemElement);
            });
            
            // Actualizar contador de items
            const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
            
            const subtotalSpan = document.getElementById('subtotal');
            const totalSpan = document.getElementById('total');
            
            if (subtotalSpan) subtotalSpan.textContent = `${totalItems} producto(s)`;
            if (totalSpan) totalSpan.textContent = `${totalItems} producto(s)`;
            
            // Mostrar botón de checkout
            if (checkoutBtn) {
                checkoutBtn.style.display = 'block';
                checkoutBtn.disabled = false;
            }
            if (cartSummary) cartSummary.style.opacity = '1';
        }
    }
    
    // Actualizar contador del carrito
    updateCartCount();
}

// Actualizar cantidad
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (index >= 0 && index < cart.length) {
        cart[index].cantidad += change;
        
        if (cart[index].cantidad <= 0) {
            cart.splice(index, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

// Eliminar item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        
        // Mostrar notificación
        showNotification('Producto eliminado del carrito');
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// Enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre')?.value.trim();
    const telefono = document.getElementById('telefono')?.value.trim();
    const correo = document.getElementById('correo')?.value.trim();
    const direccion = document.getElementById('direccion')?.value.trim();
    const ciudad = document.getElementById('ciudad')?.value.trim();
    const metodoPago = document.getElementById('metodo-pago')?.value;
    const notas = document.getElementById('notas')?.value.trim();
    
    // Validar campos obligatorios
    if (!nombre) {
        alert('Por favor ingresa tu nombre completo');
        document.getElementById('nombre')?.focus();
        return;
    }
    
    if (!telefono) {
        alert('Por favor ingresa tu número de teléfono');
        document.getElementById('telefono')?.focus();
        return;
    }
    
    if (!correo) {
        alert('Por favor ingresa tu correo electrónico');
        document.getElementById('correo')?.focus();
        return;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert('Por favor ingresa un correo electrónico válido');
        document.getElementById('correo')?.focus();
        return;
    }
    
    if (!direccion) {
        alert('Por favor ingresa tu dirección de entrega');
        document.getElementById('direccion')?.focus();
        return;
    }
    
    if (!ciudad) {
        alert('Por favor ingresa tu ciudad');
        document.getElementById('ciudad')?.focus();
        return;
    }
    
    if (!metodoPago) {
        alert('Por favor selecciona un método de pago');
        document.getElementById('metodo-pago')?.focus();
        return;
    }
    
    // Obtener carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Construir mensaje
    let mensaje = `*🛍️ NUEVO PEDIDO - FuXion Cali NAS*%0A%0A`;
    
    mensaje += `*👤 DATOS DEL CLIENTE*%0A`;
    mensaje += `Nombre: ${nombre}%0A`;
    mensaje += `Teléfono: ${telefono}%0A`;
    mensaje += `Correo: ${correo}%0A`;
    mensaje += `Dirección: ${direccion}%0A`;
    mensaje += `Ciudad: ${ciudad}%0A`;
    mensaje += `Método de pago: ${metodoPago}%0A`;
    if (notas) mensaje += `Notas: ${notas}%0A`;
    
    mensaje += `%0A*📦 PRODUCTOS SOLICITADOS*%0A`;
    
    let totalItems = 0;
    cart.forEach((item, index) => {
        totalItems += item.cantidad;
        mensaje += `${index + 1}. ${item.nombre} - Cantidad: ${item.cantidad}%0A`;
    });
    
    mensaje += `%0A*📊 RESUMEN*%0A`;
    mensaje += `Total productos: ${totalItems} unidades%0A%0A`;
    
    mensaje += `*✅ ¡Gracias por tu compra!*%0A`;
    mensaje += `Te contactaremos pronto para coordinar la entrega.`;
    
    // Número de WhatsApp (cámbialo por tu número real)
    const numeroWhatsApp = '573154441532'; // Ej: 573154441532
    
    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(whatsappUrl, '_blank');
    
    // Opción para vaciar carrito
    if (confirm('¿Deseas vaciar el carrito después de enviar el pedido?')) {
        localStorage.removeItem('cart');
        loadCart();
        
        // Ocultar formulario
        const checkoutForm = document.getElementById('checkoutForm');
        const checkoutBtn = document.getElementById('checkoutBtn');
        
        if (checkoutForm) checkoutForm.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.display = 'block';
        
        showNotification('Carrito vaciado correctamente');
    }
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #9d7bff);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}