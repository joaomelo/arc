import { useParams } from 'react-router-dom';
import { useGetter } from '../../../app/store';
import { addCase } from '../cases';
import { ListView } from './list-view';
import { AddView } from './add-view';

export function ChallengesPresenter ({ dependencies }) {
  const { arcsStore, challengesStore } = dependencies;

  const { arcId } = useParams();
  const arc = arcsStore.getters.itemById(arcId);

  const challenges = useGetter(challengesStore, 'allItems', []);
  const arcChallenges = challenges.filter(c => c.arc === arcId);

  const onAdd = challengeData => addCase({ arc: arcId, ...challengeData }, dependencies);

  return (
    <>
      <h1>{arc.name}</h1>
      <AddView onAdd={onAdd}/>
      <ListView challenges={arcChallenges}/>
    </>
  );
}
