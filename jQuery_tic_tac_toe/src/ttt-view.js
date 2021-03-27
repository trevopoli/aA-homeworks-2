class View {
  constructor(game, $el) {
    this.setupBoard($el);
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}

View.prototype.setupBoard = function ($el) {
  const $grid = $("<ul>").css({"display": "flex","width": "480px", "flex-wrap": "wrap"});

  for(i = 0; i < 9; i++) {
    const $box = $("<li>").addClass("box");
    $grid.append($box);
  };
  $el.append($grid);

}

module.exports = View;
