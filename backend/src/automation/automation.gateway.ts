import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as moment from 'moment';
import { ScheduleRele1Service } from 'src/StateSchedule/ScheduleRele1.service';
import { Schedule } from './schedule.service';
import { ExecComand } from './execComand.service';


import { AudioService } from './Audio.service';
import { audioController } from './Audio.controller';

const fs = require('fs')
const getStat = require('util').promisify(fs.stat);


const { Board } = require("johnny-five");
const board = new Board();

@WebSocketGateway()
export class AutomationGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        private scheduleRele1Service: ScheduleRele1Service,
        private schedule: Schedule,
        private execComand: ExecComand,
        private audioService:AudioService,
        private audioController:audioController
    ) { }


    @Cron(`*/5 * * * * *`, { name: 'updateCrons' }) // Atualiza os horários dos 'schedule' existente
    async updateCrons() {
        const dayActual: string = (moment().format('d')) //Dia da semana (em formato de número)

        const dataRele1 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB1Initial', 'SB1Final', dayActual, 6)
        const dataRele2 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB2Initial', 'SB2Final', dayActual, 7)
        const dataRele3 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB3Initial', 'SB3Final', dayActual, 8)
        const dataRele4 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB4Initial', 'SB4Final', dayActual, 9)
        const dataRele5 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB5Initial', 'SB5Final', dayActual, 10)
        const dataRele6 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB6Initial', 'SB6Final', dayActual, 11)
        const dataRele7 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB7Initial', 'SB7Final', dayActual, 12)
        const dataRele8 = await this.scheduleRele1Service.findAll() //Dados(schedule) do SB1
        this.schedule.updateCron(dataRele1[dayActual], 'SB8Initial', 'SB8Final', dayActual, 13)
    }

    @Cron('', { name: 'SB1Initial' }) //Cronograma inicial da SB1
    async SB1Initial() {
        return
    }
    @Cron('', { name: 'SB1Final' }) //Cronograma final da SB1
    async SB1Final() {
        return
    }

    @Cron('', { name: 'SB2Initial' }) //Cronograma inicial da SB2
    async SB2Initial() {
        return
    }
    @Cron('', { name: 'SB2Final' }) //Cronograma final da SB2
    async SB2Final() {
        return
    }
    @Cron('', { name: 'SB3Initial' }) //Cronograma inicial da SB3
    async SB3Initial() {
        return
    }
    @Cron('', { name: 'SB3Final' }) //Cronograma final da SB3
    async SB3Final() {
        return
    }
    @Cron('', { name: 'SB4Initial' }) //Cronograma inicial da SB4
    async SB4Initial() {
        return
    }
    @Cron('', { name: 'SB4Final' }) //Cronograma final da SB4
    async SB4Final() {
        return
    }
    @Cron('', { name: 'SB5Initial' }) //Cronograma inicial da SB5
    async SB5Initial() {
        return
    }
    @Cron('', { name: 'SB5Final' }) //Cronograma final da SB5
    async SB5Final() {
        return
    }
    @Cron('', { name: 'SB6Initial' }) //Cronograma inicial da SB6
    async SB6Initial() {
        return
    }
    @Cron('', { name: 'SB6Final' }) //Cronograma final da SB6
    async SB6Final() {
        return
    }
    @Cron('', { name: 'SB7Initial' }) //Cronograma inicial da SB7
    async SB7Initial() {
        return
    }
    @Cron('', { name: 'SB7Final' }) //Cronograma final da SB7
    async SB7Final() {
        return
    }
    @Cron('', { name: 'SB8Initial' }) //Cronograma inicial da SB8
    async SB8Initial() {
        return
    }
    @Cron('', { name: 'SB8Final' }) //Cronograma final da SB8
    async SB8Final() {
        return
    }


    @WebSocketServer() server;
    users: number = 0;

    async handleConnection() {
        this.users++;
        this.server.emit('users', this.users);
    }

    async handleDisconnect() {
        this.users--;
        this.server.emit('users', this.users);
    }

    @SubscribeMessage('porta1')
    async onComand(client, message) {

        this.execComand.controlRele(message.comand, 6)
    }

    @SubscribeMessage('porta2')
    async onComand2(client, message) {
        this.execComand.controlRele(message.comand, 7)
    }

    @SubscribeMessage('porta3')
    async onComand3(client, message) {
        this.execComand.controlRele(message.comand, 8)
    }

    @SubscribeMessage('porta4')
    async onComand4(client, message) {
        this.execComand.controlRele(message.comand, 9)
    }

    @SubscribeMessage('porta5')
    async onComand5(client, message) {
        this.execComand.controlRele(message.comand, 10)
    }

    @SubscribeMessage('porta6')
    async onComand6(client, message) {
        this.execComand.controlRele(message.comand, 11)
    }

    @SubscribeMessage('porta7')
    async onComand7(client, message) {
        this.execComand.controlRele(message.comand, 12)
    }

    @SubscribeMessage('porta8')
    async onComand8(client, message) {
        this.execComand.controlRele(message.comand, 13)
    }

    @SubscribeMessage('audio')
    async onComandAudio(client, message) {
        console.log(message)
        this.audioController.findAll( null, '01 whistle')
 
    }
}
