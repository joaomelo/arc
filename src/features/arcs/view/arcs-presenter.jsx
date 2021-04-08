import { ArcsListView } from './arcs-list-view';
import { ArcAddView } from './arc-add-view';
import { useGetter } from '../../../app/hooks';

export function ArcsPresenter ({ dependencies }) {
  const { arcsStore } = dependencies;
  const arcs = useGetter(arcsStore, 'allItems', []);

  return (
    <>
      <ArcAddView onAdd={v => console.log(v)}/>
      <ArcsListView arcs={arcs}/>
    </>
  );
}
