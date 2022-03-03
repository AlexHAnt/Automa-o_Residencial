import { Injectable } from '@nestjs/common';

const { Board, Led } = require("johnny-five");
const board = new Board();


@Injectable()
export class ExecComand {
    controlRele(comand, arduinoPort) {
        const equipment = new Led(arduinoPort)
        !comand ? equipment.on() : equipment.off()
    }
}