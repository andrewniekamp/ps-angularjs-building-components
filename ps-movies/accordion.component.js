(function () {
    "use strict";

    var module = angular.module("psMovies");

    // Will need to transclude panels
    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        // How to tell accordion when to show/hide? controller
        controller: function() {
            var vm = this;
            var panels = [];

            vm.selectPanel = function(panel) {
                for (var i in panels) {
                    if (panel === panels[i]) {
                        panels[i].turnOn();
                    } else {
                        panels[i].turnOff();
                    }
                }
            };

            vm.addPanel = function(panel) {
                panels.push(panel);
                if (panels.length > 0) {
                    panels[0].turnOn(); // in accordion panel ctrl
                }
            };
        }
    });

    module.component("accordionPanel", {
        bindings: {
            "heading": "@" // attribute binding, just text
        },
        // Access parent ctrl
        require: {
            "parent": "^accordion" // ^ indicates to loop up heirarchy for an accordion ctrl and set property on child controller named "parent"
        },
        controllerAs: "vm",
        controller: function() {
            var vm = this;

            vm.selected = false;

            vm.$onInit = function() {
                vm.parent.addPanel(this); // Accessing parent controller's method here
            };

            vm.turnOn = function() {
                vm.selected = true;
            };

            vm.turnOff = function() {
                vm.selected = false;
            };

            vm.select = function() {
                vm.parent.selectPanel(vm);
            };
        },
        transclude: true,
        template:   "<div class='panel panel-default'>" +
                        "<div class='panel-heading' ng-click='vm.select()'>" +
                            "<h4 class='panel-title'>{{vm.heading}}</h4>" +
                        "</div>" +
                        "<div ng-if='vm.selected' class='panel-body' ng-transclude>" +
                        "</div>" +
                    "</div>"
    });
}());