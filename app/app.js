var AngularSkeletonApp = angular.module('AngularSkeletonApp',
  ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngStorage']);

/*var angularApp = angular.module(['ngRoute', 'ngResource', 'ui.bootstrap', 'ngStorage', 'ngSanitize'])
        .constant('const', 'sdfsdfsdfsdfsdf')
        .constant('sdfsdf', 'sfsdfsdfsdfsdfsdf'); */
AngularSkeletonApp.config(function ($routeProvider) {

    $routeProvider.when("/", {
        controller: "welcomeController",
        templateUrl: "/angular-skeleton/app/views/login.html"
    });

    $routeProvider.when("/login", {
        controller: "welcomeController",
        templateUrl: "/angular-skeleton/app/views/index.html"
    });
    $routeProvider.otherwise({ redirectTo: "/" });

});

