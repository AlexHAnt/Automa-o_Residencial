import { Controller, Get, Post, Res, Param, Body, Put } from '@nestjs/common';
import { Request , Response} from 'express';

import { AudioService } from './Audio.service';
import { ScheduleRele } from './ScheduleRele.interface';

const dir = 'C:/Users/a_hen/Music/Music'


@Controller('audio')
export class audioController {
  constructor(
    private audioService: AudioService
  ) { }

  @Get(':music')
  findAll( @Res() resp:Response, @Param('music') nameMusic) {
    console.log(nameMusic) 
  return this.audioService.audio(resp, nameMusic);
  }


  @Get()
  allMusicListed() {
    console.log() 
  return this.audioService.allMusicListed(dir);
  }

}


