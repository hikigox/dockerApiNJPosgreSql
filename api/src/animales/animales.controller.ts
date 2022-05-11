import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateAnimalDto, UpdateAnimalDao } from './animal.dto';
import { AnimalesService } from './animales.service';
import { Animal } from './entities';

@Controller('animales')
export class AnimalesController {
    constructor(
        private readonly animalService:AnimalesService
    ){}


    @Get()
    public getAnimales():  Promise<Animal[]> {
        return this.animalService.allAnimales()
    }

    @Get('id/:id')
    public findOneAnimalById(@Param('id', ParseIntPipe) id: number){
        return this.animalService.findOne(id)
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createAnimal(@Body() createAnimalDto:CreateAnimalDto){
        return this.animalService.createAnimal(createAnimalDto)
    }

    @Put(':id')
    public updateAnimal(@Param('id', ParseIntPipe) id : number, @Body() updateAnimalDao : UpdateAnimalDao){
        return this.animalService.updateAnimal(id,updateAnimalDao);
    }

    @Delete(':id')
    public deleteAnimal(@Param('id', ParseIntPipe) id : number){
        return this.animalService.deleteAnimal(id)
    }
    


}
