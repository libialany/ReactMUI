import { Test, TestingModule } from '@nestjs/testing';
import { FlujoEstadosService } from './flujo-estados.service';

describe('FlujoEstadosService', () => {
  let service: FlujoEstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlujoEstadosService],
    }).compile();

    service = module.get<FlujoEstadosService>(FlujoEstadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
