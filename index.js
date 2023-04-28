// on récupère la dépendance (le package) express
const express = require('express');
const PORT = 3000;

// 1. on crée le serveur express
// express est une fonction qui permet de créer le serveur
const app = express();

// on prévoit les données qui serviront plus tard
const bonjours = {
    'en': "hello",
    'fr': "Bonjour",
    'es': "holà",
}

// le routeur 
app.get('/', (req, res) => {
    res.send('Hello World! Pas de problème avec les caractères accentués !');
});

// afficher le document super.html lorsque la route demandée (l'url de la requete) est "/super"
app.get('/super', (req, res) => {
    // attention, chemin absolu demandé
    // __dirname (généré automatiquement au lancement du script par NodeJS) permet de récupérer le chemin absolu du dossier courant
    // console.log(__dirname);
    res.sendFile(__dirname + '/app/html/super.html');
});

// afficher bonjour dans langue demandée
// on veut que l'url ressemble à "/bonjour/[langueDemandee]"
// on peut définir des morceaux d'url (séparés par des /) qui seront "variables"
// ces morceau d'url sont appelés des "paramètres" de l'url
// on les définit dans la string qui donne la route avec le préfixe ":"
app.get('/bonjour/:langueDemandee', (req, res) => {
    // express a ajouté automatiquement dans req les paramètres de l'url avec leur valeur
    // dans l'objet req.params, on retrouve une propriété pour chaque paramètre d'url
    // ici req.params.langueDemandee
    // console.log de la langue demandée
    console.log('langue demandée : ' + req.params.langueDemandee);

    // affichage du bonjour, on va chercher le bonjour à afficher à la propriété qui correspond à langueDemandee dans le teableau bonjours
    res.send(bonjours[req.params.langueDemandee]);
});

// analogie du suspect
// 1. description du suspect avec un signe distinctif indéfini : le chapeau
// 2. on prévoit ce qu'on fait lorsqu'on inspecte les différents suspect 
app.get('/suspect/:chapeau', (req, res) => {
    res.send('Chapeau du suspect : ' + req.params.chapeau);
});


// 2. on demande au serveur d'écouter sur un port particulier
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});