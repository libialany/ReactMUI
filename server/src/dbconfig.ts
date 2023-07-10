import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { FlujoEstado } from './flujo-estados/entities/flujo-estado.entity';
config();

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [FlujoEstado],
  synchronize: true,
});
