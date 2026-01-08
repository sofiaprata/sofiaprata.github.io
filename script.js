const btnContato = document.getElementById("btnContato");
const btnNavContato = document.getElementById("btnNavContato");
const modal = document.getElementById("modalContato");
const closeModal = document.getElementById("closeModal");

function openModal() {
  modal.style.display = "flex";
}

btnContato.addEventListener("click", openModal);
btnNavContato.addEventListener("click", openModal);

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
