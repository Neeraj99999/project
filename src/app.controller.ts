// file: aws-s3 > src > app.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  Render,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { ImageService } from './ImageService.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.uploadFile(file);
  }

  @Get()
  @Render('index')
  root() {
    return { };
  }

  @Post()
  @Render('index')
  @UseInterceptors(FileInterceptor('profilepic'))
  async signUp(@UploadedFile() profilepic, @Body() body) {
    let resp = await this.imageService.createHTMLToImage(body.name, body.number,profilepic.buffer.toString('base64'));
    profilepic.buffer = resp;
    return await this.appService.uploadFile(profilepic);
  }
}