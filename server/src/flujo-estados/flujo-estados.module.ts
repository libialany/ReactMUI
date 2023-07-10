import { Module } from '@nestjs/common';
import { FlujoEstadosService } from './flujo-estados.service';
import { FlujoEstadosController } from './flujo-estados.controller';

@Module({
  controllers: [FlujoEstadosController],
  providers: [FlujoEstadosService]
})
export class FlujoEstadosModule {}
