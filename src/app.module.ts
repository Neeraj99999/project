import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageService } from './ImageService.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,ImageService],
})
export class AppModule {}
