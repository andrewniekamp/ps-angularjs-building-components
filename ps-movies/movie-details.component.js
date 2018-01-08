(function() {
    var module = angular.module("psMovies");

    module.component("movieDetails", {
        bindings: { movie: '<' },
        templateUrl: "/ps-movies/movie-details.component.html",
        controllerAs: "vm"
    });
}());