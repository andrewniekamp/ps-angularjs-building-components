describe("The movieList component", function() {

    beforeEach(module("psMovies"));

    var moviesList;
    beforeEach(inject(function($componentController) {
        // Simply need to construct from given $componentController mock made available by AngularJS
        moviesList = $componentController("movieList", {
            // Remember our movie list component requires $http
            // If we don't specify an override, AngularJs will still use it by default. In this case, that's ok

            // Howover, must mock the scope, we can use an empty object, as we are just testing for component creation
            $scope: {}
        });
    }));

    it("can be created", function() {
        expect(moviesList).toBeDefined();
        // Expect $onInit lifecycle hook to work
        expect(moviesList.$onInit).toBeDefined();
    });
})