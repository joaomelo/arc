import { BehaviorSubject } from 'rxjs';
import { arcs } from '../../../../tests/fixtures';

export function createArcsRepository () {
  const subject = new BehaviorSubject(arcs);
  const subscribe = observer => {
    const subscription = subject.subscribe(observer);
    return () => subscription.unsubscribe();
  };

  const arcsRepository = {
    subscribe
  };

  return arcsRepository;
}
