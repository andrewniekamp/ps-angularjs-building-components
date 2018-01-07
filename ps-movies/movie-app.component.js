(function() {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieApp", {
        templateUrl: "/ps-movies/movie-app.component.html",
        $routeConfig: [
            // Can have nested routing as well

            // Just provide path and component name
            { path: "/list", component: "movieList", name: "List" },
            { path: "/about", component: "appAbout", name: "About" },
            // Redirect for all else to string literal for route, which takes user to movieList
            { path: "/**", redirectTo: ["List"] }
        ]
    });
}());