// Custom servie example to interact with GitHub
(function() {
    var movie = ($http) => {

        var getMovie = (id) => {
            return {
                name: "something",
                id: id
            }
        }

        return {
            getMovie: getMovie,
        }
    }

    var module = angular.module("psMovies");
    module.factory("movie", movie);
}());