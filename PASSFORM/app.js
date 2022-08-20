function result(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let sexe = document.getElementById("sexe").value;
    let Date_de_naissance = document.getElementById("Date_de_naissance").value;
    let Lieux_de_naissance =
      document.getElementById("Lieux_de_naissance").value;
    let classe = document.getElementById("classe").value;

    /*sauvegarder les donnees dans une session storage*/
    sessionStorage.setItem('Nom', name);
    sessionStorage.setItem("Prenom", surname);
    sessionStorage.setItem("Sexe", sexe);
    sessionStorage.setItem("Date_naissance", Date_de_naissance);
    sessionStorage.setItem("Lieux_naissance", Lieux_de_naissance);
    sessionStorage.setItem("Classe", classe);
}


function resulte(){
    let nom_t = document.getElementById("nom_t").value;
    let prenom_t = document.getElementById("prenom_t").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
   

    /*sauvegarder les donnees dans une session storage*/
    sessionStorage.setItem("Nom tuteur", nom_t);
    sessionStorage.setItem("Prenom", prenom_t);
    sessionStorage.setItem("Tel", tel);
    sessionStorage.setItem("E-mail", email);
}









