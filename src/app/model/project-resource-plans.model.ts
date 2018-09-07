export class ProjectResourcePlans {

  constructor(
    private _projectResourcePlanID?: number,
    private _projectSummaryID?: number,
    private _stagesID?: number,
    private _code?: string,
    private _stageName?: string,
    private _percentage?: number,
    private _stMonth?: number,
    private _duration?: number,
    private _hc?: number,
    private _gradingFrom?: string,
    private _gradingTo?: string,
    private _onSite?: number,
    private _offShore?: number,
    private _createdDateBy?: string,
    private _createdDate?: string,
    private _lastUpdatedDate?: string,
    private _lastUpdatedDateBy?: string
  ) {
  }

  get projectResourcePlanID(): number {
    return this._projectResourcePlanID;
  }
  set projectResourcePlanID(value: number) {
    this._projectResourcePlanID = value;
  }

  get projectSummaryID(): number {
    return this._projectSummaryID;
  }
  set projectSummaryID(value: number) {
    this._projectSummaryID = value;
  }

  get stagesID(): number {
    return this._stagesID;
  }
  set stagesID(value: number) {
    this._stagesID = value;
  }

  get code(): string {
    return this._code;
  }
  set code(value: string) {
    this._code = value;
  }

  get stageName(): string {
    return this._stageName;
  }
  set stageName(value: string) {
    this._stageName = value;
  }

  get percentage(): number {
    return this._percentage;
  }
  set percentage(value: number) {
    this._percentage = value;
  }

  get stMonth(): number {
    return this._stMonth;
  }
  set stMonth(value: number) {
    this._stMonth = value;
  }

  get duration(): number {
    return this._duration;
  }
  set duration(value: number) {
    this._duration = value;
  }

  get hc(): number {
    return this._hc;
  }
  set hc(value: number) {
    this._hc = value;
  }

  get gradingFrom(): string {
    return this._gradingFrom;
  }
  set gradingFrom(value: string) {
    this._gradingFrom = value;
  }

  get gradingTo(): string {
    return this._gradingTo;
  }
  set gradingTo(value: string) {
    this._gradingTo = value;
  }

  get onSite(): number {
    return this._onSite;
  }
  set onSite(value: number) {
    this._onSite = value;
  }

  get offShore(): number {
    return this._offShore;
  }
  set offShore(value: number) {
    this._offShore = value;
  }

  get createdDateBy(): string {
    return this._createdDateBy;
  }
  set createdDateBy(value: string) {
    this._createdDateBy = value;
  }

  get createdDate(): string {
    return this._createdDate;
  }
  set createdDate(value: string) {
    this._createdDate = value;
  }

  get lastUpdatedDate(): string {
    return this._lastUpdatedDate;
  }
  set lastUpdatedDate(value: string) {
    this._lastUpdatedDate = value;
  }

  get lastUpdatedDateBy(): string {
    return this._lastUpdatedDateBy;
  }
  set lastUpdatedDateBy(value: string) {
    this._lastUpdatedDateBy = value;
  }

}