(function() {
    "use strict";

    // Save module in variable to configure below
    var module = angular.module("psMovies", [
        // List dependencies here
        // Routing module
        // "ngRoute" // <- Original router we aren't using
        "ngComponentRouter"
    ]);
    
    // Configure routes not needed with component router
    // module.config(function($routeProvider) {
    //     $routeProvider
    //     .when("/list", {
    //         template: "<movie-list></movie-list>"
    //     })
    //     .when("/about", {
    //         template: "<app-about></app-about>"
    //     })
    //     .otherwise({redirectTo: "/list"});
    // });

    // Must register service with name of top level component for routing and navigation rules
    module.value("$routerRootComponent", "movieApp");

    // We have movie list-component, here is a quick inline definition for app-about
    module.component("appAbout", {
        template: "This is the about page"
    });

}());