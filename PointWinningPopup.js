const Popup = document.getElementById("Popup");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("model");

Popup.addEventListener("click", () => {
    model.classList.add("open");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
});
