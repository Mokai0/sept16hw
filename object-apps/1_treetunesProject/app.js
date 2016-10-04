var playlist = new Playlist();

var two4 = new Song("24's","T.I.", "4:43");
var bigTymin = new Song("Big Tymin", "Nef The Pharoh", "3:35");
var moneyTrees = new Song("Money Trees", "Kendrick Lemar", "6:26");

playlist.add(two4);
playlist.add(bigTymin);
playlist.add(moneyTrees);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);
