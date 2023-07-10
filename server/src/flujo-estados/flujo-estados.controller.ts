import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlujoEstadosService } from './flujo-estados.service';
import { CreateFlujoEstadoDto } from './dto/create-flujo-estado.dto';
import { UpdateFlujoEstadoDto } from './dto/update-flujo-estado.dto';

@Controller('flujo-estados')
export class FlujoEstadosController {
  constructor(private readonly flujoEstadosService: FlujoEstadosService) {}

  @Post()
  create(@Body() createFlujoEstadoDto: CreateFlujoEstadoDto) {
    return this.flujoEstadosService.create(createFlujoEstadoDto);
  }

  // @Get()
  // findAll() {
  //   return this.flujoEstadosService.findAll();
  // }

  @Get(':idEstado')
  async findEstado(@Param('idEstado') id: string) {
    return await this.flujoEstadosService.findEstado(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFlujoEstadoDto: UpdateFlujoEstadoDto,
  ) {
    return this.flujoEstadosService.update(+id, updateFlujoEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flujoEstadosService.remove(+id);
  }
}
