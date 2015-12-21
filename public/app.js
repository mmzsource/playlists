var playlists = angular.module("Playlists", []);

playlists.controller("AppCtrl", function ($http) {
    var app = this;
    var url = "http://localhost:1337/playlists";

    function loadPlaylists() {
        $http.get(url).success(function (playlists) {
            app.playlists = playlists;
        });
    }

    loadPlaylists();

    app.savePlaylist = function (newPlaylist) {
        $http.post(url, {"name": newPlaylist}).success(function () {
            loadPlaylists();
        });
    };
});