// Immediately Invoked Function Expression
(function() {
    "use strict";

    // Create reference to module
    var module = angular.module("psMovies");

    // Module API to define a component with module
    module.component("movieList", { // dash case in html
        // template: "Hello from a component!"
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: "vm", // alias the $ctrl
        controller: function() {
            var vm = this; // Alias this to vm (view model)
            vm.message = "Hello from a component controller";

            vm.changeMessage = function() {
                vm.message = "New message!";
            };
        }
    });
}());