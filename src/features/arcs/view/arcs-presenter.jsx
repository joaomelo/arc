import { ArcsView } from './arcs-view';
import { useGetter } from '../../../app/hooks';

export function ArcsPresenter ({ dependencies }) {
  const { arcsStore } = dependencies;
  const arcs = useGetter(arcsStore, 'allItems', []);

  return (<ArcsView arcs={arcs}/>);
}
