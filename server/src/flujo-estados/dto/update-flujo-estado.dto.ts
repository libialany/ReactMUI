import { PartialType } from '@nestjs/mapped-types';
import { CreateFlujoEstadoDto } from './create-flujo-estado.dto';

export class UpdateFlujoEstadoDto extends PartialType(CreateFlujoEstadoDto) {}
