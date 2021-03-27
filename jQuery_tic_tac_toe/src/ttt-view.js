class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(".box").on("click", event => {
      this.makeMove($(event.currentTarget));
    });
  }

  makeMove($square) {
    $square.off("click");
    $square.text(this.game.currentPlayer);
    $square.addClass("clicked-box");
    $square.removeClass("box");

    this.game.playMove($square.data("pos").pos);

    if (this.game.isOver()) {
      this.removeListeners();

      const $overMessage = $("<h3>");

      if (this.game.winner()) {
        const winnerText = this.game.winner();
        $overMessage.text(`Game Over. ${winnerText} Wins!`);
      } else {
        $overMessage.text("Game Over. Draw.");
      }

      $("body").append($overMessage);
    }
  }

  setupBoard() {
    const $grid = $("<ul>").css({ "display": "flex", "width": "480px", "flex-wrap": "wrap" });

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $box = $("<li>").addClass("box").data("pos", {
          pos: [i, j]
        });
        $grid.append($box);
      }
    };

    this.$el.append($grid);
  }

  removeListeners() {
    $(".box").off("click");
  }
}

module.exports = View;
