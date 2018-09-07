export class GeneralSystemCharacteristics {
  public generalSystemCharacteristicId: number;
  public description: string;
  public points: number;

  constructor(generalSystemCharacteristicId: number, description: string, points: number) {
    this.generalSystemCharacteristicId = generalSystemCharacteristicId;
    this.description = description;
    this.points = points;
  }

}
