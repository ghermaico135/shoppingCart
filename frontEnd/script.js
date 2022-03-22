window.addEventListener("DOMContentLoaded", () => {
    const shoppingCart = document.querySelector(".shopBtn");
    const CartView = document.querySelector(".cartBtn");
    const shopSec = document.querySelector(".shop");
    const cartSec = document.querySelector(".cart");
    const itemContainer = document.querySelector(".item-container");

    shoppingCart.addEventListener("click", () => {
        cartSec.style.display = "none";
        shopSec.style.display = "block";
    });

    CartView.addEventListener("click", () => {
        shopSec.style.display = "none";
        cartSec.style.display = "block";
    });

    fetch("http://localhost:8080/backend/myServer.php", {
        method: "GET",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => {
            res.json();
        })
        .then((data) => {
            data.forEach((product) => {
                const div = document.createElement("div");
                div.classList.add("item");
                div.setAttribute("item-id", product.id);
                div.innerHTML = `
                <img src="./images/${product.image}">
                <h3>  ${product.title}</h3>
                <span class="price"> $${product.price} </span>
                <button class="btn add-btn">Add To Cart </button>
            `;
                itemContainer.appendChild(div);
            });
        });
});
