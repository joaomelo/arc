export function ListView ({ arcs }) {
  return (
    <>
      <h2>Arcs</h2>
      <List arcs={arcs} />
    </>
  );
}

function List ({ arcs }) {
  return (
    <ul>
      { arcs.map(arc => <ListItem key={arc.id} arc={arc} />) }
    </ul>
  );
}

function ListItem ({ arc }) {
  return (
    <li>
      <a to={`/i/arcs/${arc.id}/challenges`}>
        { arc.name }
      </a>
    </li>
  );
}
