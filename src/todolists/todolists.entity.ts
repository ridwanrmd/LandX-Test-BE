import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Todolist {
    @PrimaryGeneratedColumn()
    id : number

    @Column({length: 500})
    todo: string

    @Column({default: false})
    isDone: boolean
}