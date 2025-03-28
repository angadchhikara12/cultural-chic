//header

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    header.innerHTML = `
        <nav class="navbar">
            <a href="index.html"><img src="./images/logo.png" alt="logo" class="logo" /></a>
            <div class="list">
                <a href="index.html" class="home">Home</a>
                <div class="dropdown-parent">
                    <a href="store.html" class="store">Store</a>
                    <div class="dropdown-categories">
                        <a href="store.html?category=outfit">Women Outfit</a>
                        <a href="store.html?category=jewelry">Women Jewelry</a>
                    </div>
                </div>
                <a href="about.html" class="about">About Us</a>
                <a href="contact.html" class="contact">Contact Us</a>
                <a href="blog.html" class="blog">Blog</a>
                <a href="cart.html" class="cart"><i class="fas fa-cart-shopping"></i></a>
                <a href="account.html" class="account"><i class="fas fa-user"></i></a>
                <a href="wishlist.html" class="wishlist"><i class="fa-solid fa-heart"></i></a>
            </div>
        </nav>
    `;
});

//footer

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <link rel="stylesheet" href="css/global.css">
        <section class="🦶">
            <h3 class="🗺️">Site Map</h3>
            <div class="links">
                <ul>
                    <li><a href="index.html" class="home">Home</a></li>
                    <li><a href="store.html" class="store">Store</a></li>
                    <li><a href="about.html" class="about">About Us</a></li>
                    <li><a href="contact.html" class="contact">Contact Us</a></li>
                    <li><a href="blog.html" class="blog">Blog</a></li>
                    <li><a href="cart.html" class="cart">Cart</a></li>
                    <li><a href="account.html" class="account">My Account</a></li>
                    <li><a href="wishlist.html" class="wishlist">Wishlist</a></li>
                </ul>
            </div>
            <h3 class="🐈">Product Categories</h3>
            <div class="categories">
                <ul>
                    <li><a href="store.html?category=outfit">Women Outfit</a></li>
                    <li><a href="store.html?category=jewelry">Women Jewelries</a></li>
                </ul>
            </div>
            <h3 class="🔗">Social Links</h3>
            <div class="social-links">
                <ul>
                    <li><a href="https://discord.gg/SsJh4CFk" class="discord-link"><i class="fa-brands fa-discord"></i> Discord</a></li>
                </ul>
            </div>
            <h3 class="📄">Subscribe</h3>
            <form class="📃">
                <input type="email" placeholder="Enter your email address" class="📧">
                <button type="submit" class="🔲">Submit</button>
                <p>Subscribe to our newsletter to get the latest updates and promotions!</p>
            </form>
        </section>
        <section class="©️">&copy Copyright. All rights reserved.</section>
    `;
});