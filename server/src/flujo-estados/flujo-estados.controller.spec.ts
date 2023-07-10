import { Test, TestingModule } from '@nestjs/testing';
import { FlujoEstadosController } from './flujo-estados.controller';
import { FlujoEstadosService } from './flujo-estados.service';

describe('FlujoEstadosController', () => {
  let controller: FlujoEstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlujoEstadosController],
      providers: [FlujoEstadosService],
    }).compile();

    controller = module.get<FlujoEstadosController>(FlujoEstadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
