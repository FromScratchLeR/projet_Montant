const valeur1 = document.getElementById("p1");
const valeur2 = document.getElementById("p2");
const valeur3 = document.getElementById("p3");

montant.addEventListener("input", verif_egaliteMontant);
valeur1.addEventListener("input", verif_egaliteValeurP1);
valeur2.addEventListener("input", verif_egaliteValeurP2);
valeur3.addEventListener("input", verif_egaliteValeurP3);

function verif_egaliteMontant() {
  let m = parseFloat(montant.value);

  document.getElementById("p1").value = m !== "" ? m / 3 : "";
  document.getElementById("p2").value = m !== "" ? m / 3 : "";
  document.getElementById("p3").value = m !== "" ? m / 3 : "";
}

function verif_egaliteValeurP1() {
  let p1 = parseFloat(valeur1.value);
  document.getElementById("p2").value = p1;
  document.getElementById("p3").value = p1;
  document.getElementById("montant").value = p1 * 3;
}
function verif_egaliteValeurP2() {
  let p2 = parseFloat(valeur2.value);
  document.getElementById("p1").value = p2;
  document.getElementById("p3").value = p2;
  document.getElementById("montant").value = p2 * 3;
}
function verif_egaliteValeurP3() {
  let p3 = parseFloat(valeur3.value);
  document.getElementById("p1").value = p3;
  document.getElementById("p2").value = p3;
  document.getElementById("montant").value = p3 * 3;
}