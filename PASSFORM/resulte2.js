window.onload = function () {
  //Recuperation des laveurs saisis par l'utilisateur dans notre sessionStorage
  let getNom_t = (document.getElementById("nom_t").value =
    sessionStorage.getItem("Nom tuteur"));

  let getPrenom = (document.getElementById("prenom_t").value =
    sessionStorage.getItem("Prenom"));

  let getTel = (document.getElementById("tel").value =
    sessionStorage.getItem("Tel"));

  let getEmail = (document.getElementById("email").value =
    sessionStorage.getItem("E-mail"));
};
