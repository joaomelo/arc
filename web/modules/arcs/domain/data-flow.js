import { AUTH_STATUSES, authStateSubject } from '@/core/auth';
import { Stream, River } from '@/core/data';

const arcs = new River();

function bindArcsFlowsToAuth () {
  return authStateSubject.subscribe(({ status, oldStatus, userData }) => {
    if (status === oldStatus) return;

    if (status === AUTH_STATUSES.SIGNEDIN) {
      plugArcs(userData.uid);
    } else {
      arcs.disconnect();
    }
  });
}

function plugArcs (userId) {
  const ownedArcs = new Stream(arcOption({ field: 'owner', operator: '==', value: userId }));
  const editedArcs = new Stream(arcOption({ field: 'editors', operator: 'array-contains', value: userId }));
  const memberedArcs = new Stream(arcOption({ field: 'members', operator: 'array-contains', value: userId }));

  arcs.connect(
    [ownedArcs, editedArcs, memberedArcs],
    { type: 'or' }
  );
}

function arcOption (clause) {
  return {
    collection: 'arcs',
    query: {
      where: [
        { field: 'isActive', operator: '==', value: true },
        clause
      ],
      orderBy: { field: 'name', sort: 'asc' }
    }
  };
};

export { arcs, bindArcsFlowsToAuth };
