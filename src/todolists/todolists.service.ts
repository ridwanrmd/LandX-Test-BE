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

    async editTodo(id: number, data: Partial<TodoListsDTO>) {
        await this.todolistsRepository.update({id}, data)
        return await this.todolistsRepository.findOne({where: {id}})
    }

    async removeTodo(id: number) {
        await this.todolistsRepository.delete({id})
        return ({deleted: true})
    }
}
