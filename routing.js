'use strict';

app.config(function($routeProvider){
	$routeProvider
	
	.when('/',{
		controller: 'loginCtrl',
		templateUrl: 'views/home.html'
	})  
	
	.when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html',
        controllerAs: 'vm'
    })

	.when('relance', {
		controller: 'relancesCtrl',
		templateUrl: 'views/relance.html'
	})
	.when('requete', {
		controller: 'requetesCtrl',
		templateUrl: 'views/requete.html'
	})

	.when('parametre', {
		controller: 'parametresCtrl',
		templateUrl: 'views/parametre.html'
	})

	.when('parametre/codeActe',{
		controller: 'codeActeCtrl',
		templateUrl: 'views/codeActe.html'
	})

	.when('parametre/typeDocument', {
		controller: 'typeDocumentCtrl',
		templateUrl: 'views/typeDocument.html'
	})

	.when('parametre/typeBeneficiaire', {
		controller: 'typeBeneficiaireCtrl',
		templateUrl: 'views/typeBeneficiaire.html'
	})

	.when('parametre/lienDocumentaire',{
		controller: 'lienDocumentaireCtrl',
		templateUrl: 'views/lienDocumentaire.html'
	})

	.when('parametre/relance',{
		controller:'parametreRelanceCtrl',
		templateUrl:'views/parametreRelance.html'
	})
});