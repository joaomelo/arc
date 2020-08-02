function convertTeamToDoc (team) {
  const readers = [
    team.owner
  ];

  [team.editors, team.members].forEach(field => {
    if (Array.isArray(field) && field.length > 0) {
      field.forEach(id => {
        if (!readers.includes(id)) {
          readers.push(id);
        }
      });
    }
  });

  team.__readers = readers;
  return team;
}

export { convertTeamToDoc };
