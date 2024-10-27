import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "pages/auth/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html"),
    new Route("/moncompte", "Mon Compte", "/pages/auth/compte.html"),
    new Route("/editPassword", "Changez votre mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";