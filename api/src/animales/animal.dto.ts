import { IsNotEmpty, MinLength } from "class-validator";


export class CreateAnimalDto {

    @IsNotEmpty()
    @MinLength(3)
    nombre: string;

    @IsNotEmpty()
    edad: number;
    
    @IsNotEmpty()
    tipo: string;

    @IsNotEmpty()
    color: string;


    




}


export class UpdateAnimalDao {
    nombre?: string;
    tipo?: string;
    edad?: number;
    color?: string;


}