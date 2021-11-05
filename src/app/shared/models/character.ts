import { GenderEnum } from '@shared/enums/gender.enum';
import { SpeciesEnum } from '@shared/enums/species.enum';
import { CharacterInterface } from '@shared/interfaces/character.interface';
import { Common } from './common';
import { House } from './house';

export class Character extends Common {
  name!: string;
  house!: House;
  gender!: GenderEnum;
  species!: SpeciesEnum;
  image!: string;

  constructor(character: CharacterInterface) {
    super(character);
    this.name = character.name;
    this.house = character.house;
    this.gender = character.gender;
    this.image = character.image;
    this.species = character.species;
  }
}
