import { Injectable } from '@nestjs/common';
import * as moment from 'moment'
import { SchedulerRegistry } from '@nestjs/schedule';
import { ExecComand } from './execComand.service';
// import { LogsService } from 'src/Logs/logs.service';

const CronJob = require('cron').CronJob;

@Injectable()
export class Schedule {
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private execComand:ExecComand
    // private logsService: LogsService,
  ) { }

  async updateCron(data: any, cronInitial: string, cronFinal: string, dayOfweek: string, arduinoPort: number) {
    const horaInicial: string = (data.hourInitial).substr(0, 2)  //Hora inicial do schedule
    const minutoInicial: string = (data.hourInitial).substr(3, 2) //Minuto inicial do schedule
    const horaFinal: string = (data.hourFinal).substr(0, 2) //Hora final do schedule
    const minutoFinal: string = (data.hourFinal).substr(3, 2)  //Minuto final do schedule

    if (horaInicial !== '') {
      const newCronInitial = `${minutoInicial} ${horaInicial} * * ${dayOfweek}`
      const newJobInitial = new CronJob(newCronInitial, () => {
        this.comandSchedule(1, arduinoPort) //Função a ser executada
      })
      this.schedulerRegistry.deleteCronJob(cronInitial) //Deleta o cron Inicial antigo
      this.schedulerRegistry.addCronJob(cronInitial, newJobInitial) //Cria um novo cron Inicial
      newJobInitial.start() //Inicia o novo cron Inicial
    }

    if (horaFinal !== '') {
      const newCronFinal = `${minutoFinal} ${horaFinal} * * ${dayOfweek}`
      const newJobFinal = new CronJob(newCronFinal, () => {
        this.comandSchedule(0, arduinoPort) //Função a ser executada
      })
      this.schedulerRegistry.deleteCronJob(cronFinal) //Deleta o cron Final antigo
      this.schedulerRegistry.addCronJob(cronFinal, newJobFinal) //Cria um novo cron Final
      newJobFinal.start() //Inicia o novo cron Final
    }
  }

  async comandSchedule(comand: number,  arduinoPort: number) {
    console.log(`Porta ${arduinoPort} - Comando ${comand} às ${moment().format('HH:mm:ss')}`)
    // const comando = !!comand ? ' Ligada' : ' Desligada'
    await this.execComand.controlRele(comand, arduinoPort)
    //   .then(() => {
    //     this.logsService.create({
    //       data:  moment().format('DD/MM/YYYY HH:mm:ss'),
    //       mensagem: `${name}, ${comando}!`
    //     })
    //   })
  }
}