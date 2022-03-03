

const { Board, Led } = require("johnny-five");

const board = new Board();



        console.log('teste')
        board.on("ready", function () {
            const led = new Led(13)
            // if (!!x) {
                led.on();
            // }
            // else {
            //     led.off()
            // }
        })
