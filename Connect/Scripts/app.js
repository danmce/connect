(function ($) {
    window.CONNECT = {};
    CONNECT.displayQuote = function (control, template, target) {
        var quotes;
        var update = function () {
            var lock, rnd, q, html, $target;
            $target = $(target);
            lock = false;
            if (!lock) {
                lock = true;
                rnd = Math.floor(Math.random() * quotes.length);
                q = quotes[rnd];
                html = Mustache.to_html($(template).html(), q);
                $target.fadeOut('slow', function () {
                    $target.html(html);
                    $target.fadeIn('slow');
                });
                lock = false;
            }
        }
        $(control).click(function () {
            if (typeof quotes === "undefined") {
                $.getJSON("quote.json", function (json) {
                    quotes = json.quotes;
                    update();
                })
            } else {
                update();
            }
        })
    }
    CONNECT.drawBlocks = function (target) {
        var stage, output, canvas;
        var canvas = document.getElementById(target);
        if (canvas.getContext) {
            function drag(element) {
                element.on("pressmove", function (evt) {
                    evt.currentTarget.x = evt.stageX;
                    evt.currentTarget.y = evt.stageY;
                    stage.update();
                });
            }
            function draw() {
                stage = new createjs.Stage(target);
                stage.mouseMoveOutside = true;

                var square, square2;

                square = new createjs.Shape();
                square.graphics.beginFill("red").drawRect(-50, -50, 100, 100);
                square.x = square.y = 100;
                square.compositeOperation = "lighter";

                square2 = new createjs.Shape();
                square2.graphics.beginFill("blue").drawRect(-50, -50, 100, 100);
                square2.x = square2.y = 150;
                square2.compositeOperation = "lighter";


                stage.addChild(square);
                stage.addChild(square2);

                drag(square);
                drag(square2);

                stage.update();
            }
            draw();
        } else {
            $("." + block).draggable({ containment: "parent" });
        }
    }
})(jQuery);