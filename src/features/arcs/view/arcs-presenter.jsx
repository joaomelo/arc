import { ArcsView } from './arcs-view';
import { useGetter } from '../../../app/store-toolkit';

export function ArcsPresenter ({ dependencies }) {
  const { arcsStore } = dependencies.stores;
  const arcs = useGetter(arcsStore, 'allItems', []);

  return (<ArcsView arcs={arcs}/>);
}
