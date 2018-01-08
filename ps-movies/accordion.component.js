(function () {
    "use strict";

    var module = angular.module("psMovies");

    // Will need to transclude panels
    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>"
    });

    module.component("accordionPanel", {
        bindings: {
            "heading": "@" // attribute binding, just text
        },
        controllerAs: "vm",
        transclude: true,
        template:   "<div class='panel panel-default'>" +
                        "<div class='panel-heading'>" +
                            "<h4 class='panel-title'>{{vm.heading}}</h4>" +
                        "</div>" +
                        "<div class='panel-body' ng-transclude>" +
                        "</div>" +
                    "</div>"
    });
}());