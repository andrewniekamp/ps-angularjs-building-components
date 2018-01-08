(function() {
    "use strict";

    var module = angular.module("psMovies");

    function buildEntries(value, max) {
        var entries = [];

        for (var i = 1; i <= max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }
        return entries;
    }

    module.component("movieRating", {
        templateUrl: "/ps-movies/movie-rating.component.html",
        bindings: { // Describe properties on controller instance
            value: "<", // value name is arbitrary
            max: "<"
        },
        controllerAs: "vm",
        controller: function() {
            var vm = this;

            vm.$onInit = function() {
                vm.entries = buildEntries(vm.value, vm.max);
            };

            vm.$onChanges = function() {
                vm.entries = buildEntries(vm.value, vm.max);
            };
        }
    });

}());