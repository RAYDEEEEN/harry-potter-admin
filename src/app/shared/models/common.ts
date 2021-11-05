export class Common {
  _id?: string;

  constructor(model: any) {
    this._id = model?.id;
  }
}
