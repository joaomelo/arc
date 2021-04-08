import { useGetter } from '../../../app/hooks';
import { addCase } from '../cases';
import { ListView } from './list-view';
import { AddView } from './add-view';

export function ArcsPresenter ({ dependencies }) {
  const { arcsStore } = dependencies;
  const arcs = useGetter(arcsStore, 'allItems', []);

  const onAdd = arc => addCase(arc, dependencies);

  return (
    <>
      <AddView onAdd={onAdd}/>
      <ListView arcs={arcs}/>
    </>
  );
}
