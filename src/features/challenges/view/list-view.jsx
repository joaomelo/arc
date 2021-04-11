export function ListView ({ challenges }) {
  return (
    <ul>
      { challenges.map(challenge => <ListItem key={challenge.id} challenge={challenge} />)}
    </ul>
  );
}

function ListItem ({ challenge }) {
  return (
    <li>
        { challenge.name }
    </li>
  );
}
