import { Link } from 'react-router-dom';

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
      <Link to={`/i/challenges?arc=${arc.id}`}>
        { arc.name }
      </Link>
    </li>
  );
}
