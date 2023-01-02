import { Module } from '@nestjs/common';
import { Todolist } from './todolists.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistsController } from './todolists.controller';
import { TodolistsService } from './todolists.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todolist])],
    controllers: [TodolistsController],
    providers: [TodolistsService]
})
export class TodolistsModule {}
