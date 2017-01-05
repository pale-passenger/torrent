var http = require("http");
setInterval(function() {
    http.get("http://cloud-torrent-01.herokuapp.com");
}, 300000); // every 5 minutes (300000)
