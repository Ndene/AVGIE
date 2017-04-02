'use strict';
var app = angular.module('gavie',['ngRoute']);
/*Les constantes gérant la connexion sont définies ici*/
app.constant('USER_ROLES', {
	all: '*',
	admin: 'admin',
	utilisateur: 'utilisateur',
	invite: 'invite'
})
app.constant('AUTH_EVENTS', {
	connexionReussie : 'ath-connexion-reussie',
	connexionEchouee : 'auth-connexion-echouee',
	deconnexionReussie :'auth-deconnexion-reussie',
	sessionExpiree : 'auth-session-expiree',
	nonConnecte : 'auth-non- connecte',
	nonAutorise : 'auth-not-autorise'
});
