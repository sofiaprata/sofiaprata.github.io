const btnContato = document.getElementById("btnContato");

btnContato.addEventListener("click", () => {
  const contato = document.getElementById("contato");

  if (contato) {
    contato.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Seção de contato em breve 💌");
  }
});