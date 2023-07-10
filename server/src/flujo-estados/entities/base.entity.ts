import { BaseEntity, CreateDateColumn } from 'typeorm';

export abstract class AppBaseEntity extends BaseEntity {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp without time zone',
    nullable: false,
    default: () => 'now()',
  })
  created_at: Date;

  protected constructor(data?: Partial<AppBaseEntity>) {
    super();
    if (data) Object.assign(this, data);
  }
}
