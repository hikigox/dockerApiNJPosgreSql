import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimalDto, UpdateAnimalDao } from './animal.dto';
import { Animal } from './entities';


@Injectable()
export class AnimalesService {

constructor(
    @InjectRepository(Animal) private readonly animalRepository: Repository<Animal>,
){}

public createAnimal(createAnimalDto : CreateAnimalDto){
    const newAnimal = this.animalRepository.create(createAnimalDto)
    return this.animalRepository.save(newAnimal)
}

public findOne (id: number){
    return this.animalRepository.findBy({id})
}

public allAnimales (){
    return this.animalRepository.find()
}
public deleteAnimal (id: number){
    return this.animalRepository.delete(id)
}

public updateAnimal(id: number,updateAnimalDao : UpdateAnimalDao){
    const updateAnimal = this.animalRepository.update(id,updateAnimalDao)
    return updateAnimal
}


}
