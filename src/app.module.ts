import 'dotenv/config'

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: ['src/**/.*entity.ts', 'dist/**/*.entity.js'],
      synchronize: true,
      dropSchema: false,
      logging: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
