var http = require("http");
setInterval(function() {
    http.get("http://cloud-torrent-normal.herokuapp.com");
}, 300000); // every 5 minutes (300000)
