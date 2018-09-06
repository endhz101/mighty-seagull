import { Injectable } from '@angular/core';
import { Estimation } from '../model/estimation.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstimationService {

  ESTIMATIONS: Estimation[] = [
    {
      module: 'TEST',
      description: 'TEST',
      type: 'TEST',
      effort: 'AS',
      pm: 1,
      ui: 1,
      sa: 1,
      sit: 1,
      documentation: 1,
      training: 1,
      rollout: 1,
      nursing: 1,
      total: 1
    },
    {
      module: 'TEST2',
      description: 'TEST2',
      type: 'TEST2',
      effort: 'AS2',
      pm: 12,
      ui: 12,
      sa: 12,
      sit: 12,
      documentation: 12,
      training: 12,
      rollout: 12,
      nursing: 12,
      total: 12
    },
    {
      module: 'TEST',
      description: 'TEST',
      type: 'TEST',
      effort: 'AS',
      pm: 1,
      ui: 1,
      sa: 1,
      sit: 1,
      documentation: 1,
      training: 1,
      rollout: 1,
      nursing: 1,
      total: 1
    },
    {
      module: 'TEST2',
      description: 'TEST2',
      type: 'TEST2',
      effort: 'AS2',
      pm: 12,
      ui: 12,
      sa: 12,
      sit: 12,
      documentation: 12,
      training: 12,
      rollout: 12,
      nursing: 12,
      total: 12
    },
    {
      module: 'TEST',
      description: 'TEST',
      type: 'TEST',
      effort: 'AS',
      pm: 1,
      ui: 1,
      sa: 1,
      sit: 1,
      documentation: 1,
      training: 1,
      rollout: 1,
      nursing: 1,
      total: 1
    },
    {
      module: 'TEST2',
      description: 'TEST2',
      type: 'TEST2',
      effort: 'AS2',
      pm: 12,
      ui: 12,
      sa: 12,
      sit: 12,
      documentation: 12,
      training: 12,
      rollout: 12,
      nursing: 12,
      total: 12
    },
    {
      module: 'TEST',
      description: 'TEST',
      type: 'TEST',
      effort: 'AS',
      pm: 1,
      ui: 1,
      sa: 1,
      sit: 1,
      documentation: 1,
      training: 1,
      rollout: 1,
      nursing: 1,
      total: 1
    },
    {
      module: 'TEST2',
      description: 'TEST2',
      type: 'TEST2',
      effort: 'AS2',
      pm: 12,
      ui: 12,
      sa: 12,
      sit: 12,
      documentation: 12,
      training: 12,
      rollout: 12,
      nursing: 12,
      total: 12
    }
  ];
  getEstimations(): Estimation[] {
    return this.ESTIMATIONS;
  }
  constructor() { }
}
