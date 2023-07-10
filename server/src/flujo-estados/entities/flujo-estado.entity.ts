import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AppBaseEntity } from './base.entity';
@Entity()
export class FlujoEstado extends AppBaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'id_tipo' })
  idTipo: string;

  @Column({ name: 'id_estado' })
  idEstado: string;

  @Column({ name: 'id_estado_anterior' })
  idEstadoAnterior: string;
  constructor(data?: Partial<FlujoEstado>) {
    super(data);
  }
}
