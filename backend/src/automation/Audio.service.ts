import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele2 } from './ScheduleRele.entity';

const fs = require('fs')
const fsPromises = require('fs').promises
const getStat = require('util').promisify(fs.stat);

@Injectable()
export class AudioService {
  constructor(
    // @InjectRepository(SchedulesRele2)
    //private readonly scheduleReleRepository: Repository<SchedulesRele2>
  ) { }

  async audio(res, nameMusic) {
    const filePath = `C:/Users/a_hen/Music/Music/${nameMusic}`;
    const stat = await getStat(filePath);
    console.log(filePath);

    // informações sobre o tipo do conteúdo e o tamanho do arquivo
    res.writeHead(200, {
      'Content-Type': 'audio/mp3',
      'Content-Length': stat.size
    });

    const stream = fs.createReadStream(filePath);

    stream.on('end', () => console.log('acabou'));
    stream.pipe(res);
  }

  
  async allMusicListed(dir, arquivos?:any) {

   arquivos = !!arquivos? arquivos:[]
      let listaDeArquivos = await fsPromises.readdir(dir);
      return listaDeArquivos
      // for(let k in listaDeArquivos) {
      //     let stat = await fs.stat(dir + '/' + listaDeArquivos[k]);
      //     if(stat.isDirectory())
      //         await this.allMusicListed(dir + '/' + listaDeArquivos[k], arquivos);
      //     else
      //         arquivos.push(dir + '/' + listaDeArquivos[k]);
      // }
  
      // return arquivos;
  }

}