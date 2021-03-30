export function ArcsView ({ arcs }) {
  const arcsList = arcs.map(arc => <li key={arc.id}>{ arc.name }</li>);
  return (
    <>
      <h2>Arcs</h2>
      <ul>{ arcsList }</ul>
    </>
  );
}
