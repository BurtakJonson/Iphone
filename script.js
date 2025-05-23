<meta name='viewport' content='width=device-width, initial-scale=1'/><script>document.addEventListener('DOMContentLoaded', function() {
    // Инициализация корзины
    let cartCount = 0;
    const cartSpan = document.querySelector('.cart span');
    
    // Обработчики для кнопок "В корзину"
    const addToCartButtons = document.querySelectorAll('.product-card .btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartSpan.textContent = cartCount;
            
            // Анимация добавления в корзину
            const productCard = this.closest('.product-card');
            productCard.style.transform = 'scale(1.05)';
            setTimeout(() => {
                productCard.style.transform = '';
            }, 300);
            
            // Можно добавить уведомление
            alert('Товар добавлен в корзину!');
        });
    });
    
    // Здесь можно добавить больше функциональности:
    // - Загрузка товаров с сервера
    // - Фильтрация и сортировка
    // - Работа с корзиной
    // - Оформление заказа
});</script>
