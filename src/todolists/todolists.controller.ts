import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common';
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

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.TodolistsService.getOne(id)
    }

    @Patch(':id')
    updateTodo(@Param('id') id: number, @Body() data: Partial<TodoListsDTO>) {
        return this.TodolistsService.editTodo(id, data)
    }
}
