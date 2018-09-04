export class GeneralSystemCharacteristicsDetails {
  public generalSystemCharacteristicDetailsId: number;
  public generalSystemCharacteristicId: number;
  public characteristic: string;
  public points: number;

  constructor(generalSystemCharacteristicDetailsId: number, generalSystemCharacteristicId: number, characteristic: string, points:number) {
    this.generalSystemCharacteristicDetailsId = generalSystemCharacteristicDetailsId;
    this.generalSystemCharacteristicId = generalSystemCharacteristicId;
    this.characteristic = characteristic;
    this.points = points;
  }

}
