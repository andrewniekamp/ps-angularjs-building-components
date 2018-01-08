(function() {
    "use strict";

    // Save module in variable to configure below
    var module = angular.module("psMovies", [
        // List dependencies here
        // Routing module
        // "ngRoute" // <- Original router we aren't using
        // "ngComponentRouter", <- another diff router
        "ui.router" // <- the one Cedrus uses
    ]);
    
    // Configure routes
    module.config(function($stateProvider) {

        var listState = {
            name: 'list',
            url: '/list',
            component: 'movieList'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            component: 'appAbout'
        };

        var detailsState = {
            name: 'details',
            url: '/details/{movieId}',
            component: 'movieDetails',
            resolve: {
                // Service for movie
                // Transitions has params so you can access and use for search
                movie: function(movie, $transition$) {
                    return movie.getMovie($transition$.params().movieId);
                }
            }
        };
        
        $stateProvider.state(listState);
        $stateProvider.state(aboutState);
        $stateProvider.state(detailsState);
    });

    // Must register service with name of top level component for routing and navigation rules
    module.value("$routerRootComponent", "movieApp");

    // We have movie list-component, here is a quick inline definition for app-about
    module.component("appAbout", {
        template: "This is the about page"
    });

}());