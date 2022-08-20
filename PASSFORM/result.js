window.onload = function(){
  //Recuperation des laveurs saisis par l'utilisateur dans notre sessionStorage
  let getName = (document.getElementById("name").value =
    sessionStorage.getItem("Nom"));

  let getSurname = (document.getElementById("surname").value =
    sessionStorage.getItem("Prenom"));

  let getSexe = (document.getElementById("sexe").value =
    sessionStorage.getItem("Sexe"));

  let getDate_de_naissance = (document.getElementById(
    "Date_de_naissance"
  ).value = sessionStorage.getItem("Date_naissance"));

  let getLieux_de_naissance = (document.getElementById(
    "Lieux_de_naissance"
  ).value = sessionStorage.getItem("Lieux_naissance"));

  let getClasse = (document.getElementById("classe").value =
    sessionStorage.getItem("Classe"));
}



