import { ArcsView } from './arcs-view';
import { arcs } from '../../../../tests/fixtures';

export function ArcsPresenter () {
  return (<ArcsView arcs={arcs}/>);
}
