document.getElementById('formulaire').addEventListener('submit', function(event) {

    
    let nom = document.getElementById('Nom').value;
    let email = document.getElementById('Email').value;
    let regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nom === "") {
        alert("Le champ Nom est requis");
        return;
    }

    if (!regexemail.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide");
        return;
    }

    alert("Formulaire soumis avec succès !");
});