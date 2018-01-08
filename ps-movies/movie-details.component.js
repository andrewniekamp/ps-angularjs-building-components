(function() {
    var module = angular.module("psMovies");

    module.component("movieDetails", {
        bindings: { movie: '<' },
        templateUrl: "/ps-movies/movie-details.component.html",
        controllerAs: "vm"
    });

    module.component("movieOverview", {
        template: "This is the overview."
    });
    module.component("movieCast", {
        template: "This is info about the cast."
    });
    module.component("movieDirector", {
        template: "This is info about the director."
    });
}());