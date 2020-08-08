import { combineLatest } from 'rxjs';
import { Flow } from './flow';

class River extends Flow {
  connect (flows, join) {
    let project;
    switch (join.type) {
      case 'or':
        project = joinOr;
        break;
      default:
        throw new Error('Unsupported join type argument');
    }

    const subjects = flows.map(flow => flow.subject);
    const latest = combineLatest(subjects, project);
    this.dataUnsub = latest.subscribe(this.subject);
  }
}

function joinOr (...values) {
  const combinedItems = values.flat();
  return combinedItems;
}

export { River };
