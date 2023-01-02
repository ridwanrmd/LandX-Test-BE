import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todolist } from './todolists.entity';
import { TodoListsDTO } from './todolists.dto';

@Injectable()
export class TodolistsService {
    constructor(
        @InjectRepository(Todolist)
        private todolistsRepository : Repository<Todolist>
    ) { }

    async getAllData(){
        return await this.todolistsRepository.find()
    }

    async createTodo(data: TodoListsDTO){
        const newTodo = this.todolistsRepository.create(data)
        await this.todolistsRepository.save(newTodo)
        return newTodo
    }

    async getOne(id: number) {
        return await this.todolistsRepository.findOne({where: {id}})
    }
}
