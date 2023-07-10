import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlujoEstadosModule } from './flujo-estados/flujo-estados.module';
import { dbConfig } from './dbconfig';

@Module({
  imports: [dbConfig, FlujoEstadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
