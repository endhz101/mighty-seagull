export class Estimation {
  module: string;
  description: string;
  type: string;
  effort: string;
  pm: number;
  ui: number;
  sa: number;
  sit: number;
  documentation: number;
  training: number;
  rollout: number;
  nursing: number;
  total: number;

  constructor(module: string, description: string, type: string, effort: string, pm: number, ui: number,
              sa: number, sit: number, documentation: number,
              training: number, rollout: number, nursing: number, total: number) {
    this.module = module;
    this.description = description;
    this.type = type;
    this.effort = effort;
    this.pm = pm;
    this.ui = ui;
    this.sa = sa;
    this.sit = sit;
    this.documentation = documentation;
    this.training = training;
    this.rollout = rollout;
    this.nursing = nursing;
    this.total = total;
  }
}
