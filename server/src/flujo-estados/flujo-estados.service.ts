import { Injectable } from '@nestjs/common';
import { CreateFlujoEstadoDto } from './dto/create-flujo-estado.dto';
import { UpdateFlujoEstadoDto } from './dto/update-flujo-estado.dto';
import { DataSource } from 'typeorm';
import { FlujoEstado } from './entities/flujo-estado.entity';

@Injectable()
export class FlujoEstadosService {
  constructor(private dataSource: DataSource) {}
  create(createFlujoEstadoDto: CreateFlujoEstadoDto) {
    return 'This action adds a new flujoEstado';
  }

  // findAll() {
  //   return `This action returns all flujoEstados`;
  // }

  async findEstado(idAnterior: string) {
    return await this.dataSource
      .getRepository(FlujoEstado)
      .createQueryBuilder('flujoEstado')
      .where({ idEstadoAnterior: idAnterior })
      .getOne();
  }

  update(id: number, updateFlujoEstadoDto: UpdateFlujoEstadoDto) {
    return `This action updates a #${id} flujoEstado`;
  }

  remove(id: number) {
    return `This action removes a #${id} flujoEstado`;
  }
}
