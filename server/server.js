var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Create in-memory playlist with defaultPlaylist Item
function Playlist(name) {
    this.name = name;
}
var playlists = [];
var defaultPlaylist = new Playlist("default playlist");
playlists.push(defaultPlaylist);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/playlists', function (req, res) {
    res.json(playlists);
});

app.post("/playlists", function (req, res) {
    playlists.push(new Playlist(req.body.name));
    res.json(playlists);
})

app.listen(1337);

console.log('Playlists functionality to be found on port 1337');