(function() {
    var module = angular.module("psMovies");

    module.component("movieDetails", {
        bindings: { movie: '<' },
        templateUrl: "/ps-movies/movie-details.component.html",
        controllerAs: "vm"
    });

    module.component("movieOverview", {
        bindings: { movie: '<'},
        template: "This is the overview for movie {{vm.movie.id}}.",
        controllerAs: "vm"
    });
    module.component("movieCast", {
        bindings: { movie: '<'},
        template: "This is info about the cast for movie {{vm.movie.id}}.",
        controllerAs: "vm"
    });
    module.component("movieDirector", {
        bindings: { movie: '<'},
        template: "This is info about the director for movie {{vm.movie.id}}.",
        controllerAs: "vm"
    });
}());