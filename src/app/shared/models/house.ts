import { HouseInterface } from '@shared/interfaces/house.interface';
import { Common } from './common';

export class House extends Common {
  name!: string;
  image!: string;

  constructor(house: HouseInterface) {
    super(house);
    this.name = house.name;
    this.image = house.image;
  }
}
