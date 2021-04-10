export function ListView ({ arc, challenges }) {
  return (
    <>
      <h2>{arc.name} challenges</h2>
      <ChallengesList>{ challenges }</ChallengesList>
    </>
  );
}

function ChallengesList ({ children }) {
  return children.map(c => <li key={c.id}>{ c.name }</li>);
}
