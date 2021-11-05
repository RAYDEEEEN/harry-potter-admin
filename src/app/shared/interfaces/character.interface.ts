import { GenderEnum } from '@shared/enums/gender.enum';
import { SpeciesEnum } from '@shared/enums/species.enum';
import { HouseInterface } from './house.interface';

export interface CharacterInterface {
  name: string;
  house: HouseInterface;
  gender: GenderEnum;
  species: SpeciesEnum;
  image: string;
}
