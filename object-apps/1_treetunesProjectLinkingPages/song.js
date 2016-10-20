function Song(title, artist, duration) {
  //In JS you can call any function programatically using the 'call' method; allowing you to specify what the function should use as this.
  Media.call(this, title, duration);
  this.artist = artist;
}

//This copies the 'Media' prototype refferences to and properties to the 'Song' prototype. Creating a prototype chain.
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = '<li';
    if(this.isPlaying) {
      htmlString += ' class="current"';
    }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>'

  return htmlString;
};
