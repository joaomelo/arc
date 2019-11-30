function mapRoles (item) {
  const team = extractTeam(item);

  const roles = {};
  const fillRole = (array, string) => array.forEach(a => { roles[a.id] = string; });

  team.staff && fillRole(team.staff, 'staff');
  team.managers && fillRole(team.managers, 'manager');
  team.owner && fillRole([team.owner], 'owner');

  return roles;
}

function extractTeam (item) {
  const teamMap = {
    assets: a => a.team,
    results: r => r.asset.team
  };

  const team = teamMap[item.collection](item);
  return team;
}

export { mapRoles };
