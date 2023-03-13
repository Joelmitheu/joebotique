const createNav = () => {
	let nav = document.querySelector('.navbar');

	nav.innerHTML = `
		<div class="nav">
            <img src="img/logo.jpg" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" name="" placeholder="search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="img/user.png" alt="user account"></a>
                <a href="#"><img src="img/cart.png" alt="cart"></a>
            </div>
        </div>
            
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="women.html" class="link">women</a></li>
            <li class="link-item"><a href="men.html" class="link">men</a></li>
            <li class="link-item"><a href="kids.html" class="link">kids</a></li>
            <li class="link-item"><a href="accessories.html" class="link">accessories</a></li>
        </ul>
	`;
}

createNav();