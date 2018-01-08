// Custom servie example to interact with GitHub
(function() {
    var movie = function($http) {

        var getMovie = function(id) {
            return {
                name: "something",
                id: id
            };
        };

        return {
            getMovie: getMovie,
        };
    };

    var module = angular.module("psMovies");
    module.factory("movie", movie);
}());