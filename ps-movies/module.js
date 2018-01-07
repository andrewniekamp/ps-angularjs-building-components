(function() {
    "use strict";

    // Save module in variable to configure below
    var module = angular.module("psMovies", [
        // List dependencies here
        // Routing module
        "ngRoute"
    ]);
    
    // Configure routes
    module.config(function($routeProvider) {
        $routeProvider
        .when("/list", {
            template: "<movie-list></movie-list>"
        })
        .when("/about", {
            template: "<app-about></app-about>"
        })
        .otherwise({redirectTo: "/list"});
    });

    // We have movie list-component, here is a quick inline definition for app-about
    module.component("appAbout", {
        template: "This is the about page"
    });

}());