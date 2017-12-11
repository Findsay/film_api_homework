var Films = require('../models/films');

var UI = function(){
  var films = new Films();
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createGenre: function(li, genre){
    this.appendText(li, genre, "Genre: ");
  },

  createReview: function(li, review){
    this.appendText(li, review.comment, "Comment: ");
    this.appendText(li, review.rating, "Rating: ");
    this.appendText(li, review.author, "Author: ");
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var li = document.createElement("li");
      this.appendText(li, film.title, "Film: ");
      this.createGenre(li,film.genre);

      for(var review of film.reviews){
        this.createReview(li, review);
      }
      container.appendChild(li);
    }
  }
}

module.exports = UI;
