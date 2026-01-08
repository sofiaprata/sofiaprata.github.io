const btnContato = document.getElementById("btnContato");
const btnNavContato = document.getElementById("btnNavContato");
const modal = document.getElementById("modalContato");
const closeModal = document.getElementById("closeModal");

function openModal(e) {
  if (e) e.preventDefault();   // 🔴 ISSO É O QUE FALTAVA
  modal.style.display = "flex";
}

// botão do hero
btnContato.addEventListener("click", openModal);

// botão da nav
btnNavContato.addEventListener("click", openModal);

// fechar no X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// fechar clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

