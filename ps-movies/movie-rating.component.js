(function() {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "/ps-movies/movie-rating.component.html",
        bindings: { // Describe properties on controller instance
            value: "<" // value name is arbitrary
        },
        controllerAs: "vm",
        controller: function() {
            var vm = this;

            vm.$onInit = function() {
                vm.entries = new Array(vm.value);
            };

            vm.$onChanges = function() {
                vm.entries = new Array(vm.value);
            };
        }
    });

}());