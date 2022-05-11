import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Animal {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name:'id'
    })
    id : number;

    @Column({
        nullable: false

    })
    nombre: string;

    @Column()
    edad: number;

    @Column()
    tipo: string;

    @Column()
    color: string;


}

