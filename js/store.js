// Product View

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get("view");

  if (view === "product") {
    loadProductView();
  } else {
    loadStoreView(); // Default to store view
  }
};

function loadStoreView() {
  fetch("store.html")
    .then(response => response.text())
    .then(htmlContent => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const storeContent = doc.getElementById("window").innerHTML;

      document.getElementById("window").innerHTML = storeContent;

      // Setup event for product card clicks
      setupCardClickHandler();
    })
    .catch(error => console.error("Error loading store.html:", error));
}

function loadProductView() {
  const window = document.getElementById("window");
  window.innerHTML = `
    <div class="image" style="margin: 30px;">
      <img src="./../images/product.jpg" style="width: 300px; height: auto;">
    </div>
    <div class="details">
      <h1>Product Name</h1>
      <div class="reviews">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <p>122 Reviews</p>
      </div>
      <div class="seprate"></div>
      <h2>Product Price</h2>
      <div class="select">
        <span id="title">Select Size</span>
        <div class="main-select">
          <option id="small" value="small">S</option>
          <option id="medium" value="medium">M</option>
          <option id="large" value="large">L</option>
        </div>
        <div class="icon">
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div class="seprate-1"></div>
      <h4>Product Description</h4>
      <div class="review" id="review">
        <i class="fa-solid fa-pen-to-square"></i>
        <p>Write your review</p>
      </div>
      <button type="submit"><i class="fa-solid fa-shopping-cart"></i> Buy Now</button>
      <button type="submit"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
    </div>
  `;

  const title = document.getElementById("title");
  const small = document.getElementById("small");
  const medium = document.getElementById("medium");
  const large = document.getElementById("large");
  small.addEventListener("click", ()=>{
    title.textContent = "Small";
  });
  medium.addEventListener("click", ()=>{
    title.textContent = "Medium";
  });
  large.addEventListener("click", ()=>{
    title.textContent = "Large";
  });

  // Back to store
  document.getElementById("backToStore").addEventListener("click", () => {
    window.location.href = "?view=store";
  });
}

function loadOutfit(){
  const window = document.getElementById("window");
  window.innerHTML = `
      <h1 style="color: black; font-weight: bold; margin-left: 10px;">Women Outfit</h1>
      <div style="background-color: #80808080; width: 20em; height: .1em; margin-bottom: 15px; margin-left: 10px;"></div>
      ${Array.from({length: 48}, (_, i) => `
        <div class="card">
          <img src="./../images/product.jpg" />
          <h2>Product Name</h2>
          <h4>Product Price</h4>
          <p>${i % 2 === 0 ? 'Available' : 'Out of Stock'}</p>
          <p>Description</p>
        </div>
      `).join('')}
      <p style="text-align: center; margin-top: 20px; color:#4e4e4e; font-weight: bold;">No more products to show</p>
  `;
}

// Jewelry view
function loadJewelry(){
  const window = document.getElementById("window");
  window.innerHTML = `
      <h1 style="color: black; font-weight: bold; margin-left: 10px;">Women Jewelries</h1>
      <div style="background-color: #80808080; width: 20em; height: .1em; margin-bottom: 15px; margin-left: 10px;"></div>
      ${Array.from({length: 48}, (_, i) => `
        <div class="card">
          <img src="./../images/product.jpg" />
          <h2>Product Name</h2>
          <h4>Product Price</h4>
          <p>${i % 2 === 0 ? 'Available' : 'Out of Stock'}</p>
          <p>Description</p>
        </div>
      `).join('')}
      <p style="text-align: center; margin-top: 20px; color:#4e4e4e; font-weight: bold;">No more products to show</p>
  `;
}

function setupCardClickHandler() {
  // Handle card clicks
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = "?view=product";
    });
  });
};
  

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  if (category === "outfit"){
    loadOutfit();
  } else if (category === "jewelry"){
    loadJewelry();
  }
};