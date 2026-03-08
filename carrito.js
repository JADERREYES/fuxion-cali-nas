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
            document.getElementById('checkoutForm').style.display = 'block';
            this.disabled = true;
            window.scrollTo({
                top: document.getElementById('checkoutForm').offsetTop - 100,
                behavior: 'smooth'
            });
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
        if (checkoutBtn) checkoutBtn.disabled = true;
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
            
            let subtotal = 0;
            
            cart.forEach((item, index) => {
                const itemTotal = item.precio * item.cantidad;
                subtotal += itemTotal;
                
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <img src="img/${item.imagen}" alt="${item.nombre}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=${item.nombre}'">
                    <div class="cart-item-info">
                        <h4>${item.nombre}</h4>
                        <p class="cart-item-price">$${item.precio.toLocaleString('es-CO')}</p>
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
            
            // Actualizar totales
            document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString('es-CO')}`;
            document.getElementById('total').textContent = `$${subtotal.toLocaleString('es-CO')}`;
            
            // Habilitar botón de checkout
            if (checkoutBtn) checkoutBtn.disabled = false;
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
        el.textContent = totalItems;
    });
}

// Enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
    // Validar formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const notas = document.getElementById('notas').value;
    
    if (!nombre || !telefono || !correo || !direccion || !ciudad) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Obtener carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Construir mensaje
    let mensaje = `*Pedido FuXion Cali NAS*%0A%0A`;
    mensaje += `*Datos del cliente:*%0A`;
    mensaje += `Nombre: ${nombre}%0A`;
    mensaje += `Teléfono: ${telefono}%0A`;
    mensaje += `Correo: ${correo}%0A`;
    mensaje += `Dirección: ${direccion}%0A`;
    mensaje += `Ciudad: ${ciudad}%0A`;
    if (notas) mensaje += `Notas: ${notas}%0A`;
    
    mensaje += `%0A*Productos:*%0A`;
    
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `• ${item.nombre} x${item.cantidad} - $${subtotal.toLocaleString('es-CO')}%0A`;
    });
    
    mensaje += `%0A*Total: $${total.toLocaleString('es-CO')}*%0A`;
    mensaje += `%0A¡Gracias por tu compra!%0A`;
    mensaje += `Te contactaremos pronto para coordinar la entrega.`;
    
    // Número de WhatsApp (cambiar por el número real)
    const numeroWhatsApp = '573001234567';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
    
    // Opcional: limpiar carrito después de enviar
    if (confirm('¿Deseas vaciar el carrito después de enviar el pedido?')) {
        localStorage.removeItem('cart');
        loadCart();
    }
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