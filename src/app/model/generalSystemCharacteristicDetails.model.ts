export class GeneralSystemCharacteristicDetails {
  public generalSystemCharacteristicDetailsId: number;
  public generalSystemCharacteristicId: number;
  public characteristic: string;
  public points: number;
  public activeStatus: string;

  constructor(generalSystemCharacteristicDetailsId: number, generalSystemCharacteristicId: number, characteristic: string, points: number, activeStatus:string) {
    this.generalSystemCharacteristicDetailsId = generalSystemCharacteristicDetailsId;
    this.generalSystemCharacteristicId = generalSystemCharacteristicId;
    this.characteristic = characteristic;
    this.points = points;
    this.activeStatus = activeStatus;

  }

}
