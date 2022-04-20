import {Column,PrimaryGeneratedColumn,Entity} from 'typeorm';

@Entity('livros')
export class Book{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    title:string

    @Column({nullable:true})
    type:string

    @Column({nullable:true,default:"pendente"})
    status:string
}