import store from '@/store';

function whatProfileCan (profile, item) {
  if (!item || !item.team) return 'none';
  if (!profile) return 'none';

  const teamRoles = mapRoles(item.team);
  const role = teamRoles[profile.id];

  const roleCans = {
    owner: 'edit',
    manager: 'edit',
    staff: 'read'
  };

  return role ? roleCans[role] : 'none';
};

function canRead (item) {
  const profile = getCurrentProfile();
  return whatProfileCan(profile, item) !== 'none';
};

function canEdit (item) {
  const profile = getCurrentProfile();
  return whatProfileCan(profile, item) === 'edit';
};

function getCurrentProfile () {
  return store.getters.getCurrentProfile;
}

function mapRoles (team) {
  const roles = {};
  const fillRole = (array, string) => array.forEach(a => { roles[a.id] = string; });

  team.staff && fillRole(team.staff, 'staff');
  team.managers && fillRole(team.managers, 'manager');
  team.owner && fillRole([team.owner], 'owner');

  return roles;
}

export { canRead, canEdit };
