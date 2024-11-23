import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/connexion", "Connexion", "pages/auth/connexion.html", ["disconnected"], "js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", ["disconnected"], "/js/auth/inscription.js"),
    new Route("/moncompte", "Mon Compte", "/pages/auth/compte.html", ["client", "admin"]),
    new Route("/editPassword", "Changez votre mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"])
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";