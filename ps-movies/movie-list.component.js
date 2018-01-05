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

    function controller($http) {
        var vm = this; // Alias this to vm (view model)

        vm.$onInit = function() {
            fetchMovies($http).then(function(movies) { // Error handling?
                vm.movies = movies; // Set movies returned from request
            });
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
        controller: ["$http", controller], // Keeps component definition clean
    });
}());