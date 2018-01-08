// Immediately Invoked Function Expression
(function() {
    "use strict";

    // Create reference to module
    var module = angular.module("psMovies");

    function fetchMovies($http) {
        return $http.get("/movies.json")
        .then(function(response) {
            return response.data;
        });
    }

    function controller($http, $state) {
        var vm = this; // Alias this to vm (view model)

        vm.$onInit = function() {
            fetchMovies($http).then(function(movies) { // Error handling?
                vm.movies = movies; // Set movies returned from request
            });
        };

        // Alternative to using service we did originally
        vm.goTo = function(id) {
            // This is for the other router
            // vm.$stateProvider.state(["details", { id: id }]);
            
            // Not sure how to do it with ui-router
            // console.log($state);
            $state.go('details', { movieId: id });

            // To route directly to a nested route
            // $state.go('details.director', { movieId: id });
        };

        vm.setRating = function(movie, newRating) {
            movie.rating = newRating;
        };

        vm.upRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        vm.downRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };

        vm.message = "Hello from a component controller";

        vm.changeMessage = function() {
            vm.message = "New message!";
        };
    }

    // Module API to define a component with module
    module.component("movieList", { // dash case in html
        // template: "Hello from a component!",
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: "vm", // alias the $ctrl
        controller: ["$http", "$state", controller], // Keeps component definition clean

        // Binding for old router
        // bindings: {
        //     // We want the router associated with this component
        //     "$stateProvider": "<" // will be an input
        // }
    });
}());