userIcon = document.getElementById("user");
cartIcon = document.getElementById("cart");

userIcon.addEventListener("click", () => {
    window.location.href = "./user.html";
})

cartIcon.addEventListener("click", () => {
    window.location.href = "./cart.html";
})