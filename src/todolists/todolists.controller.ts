import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodoListsDTO } from './todolists.dto';

@Controller('todolists')
export class TodolistsController {
        constructor(private TodolistsService: TodolistsService) {}

    @Get()
    getAllTodoLists() {
        return this.TodolistsService.getAllData()
    }

    @Post()
    addTodo(@Body() data: TodoListsDTO) {
        return this.TodolistsService.createTodo(data)
    }
}
