import store from '@src/data/store';
import { mapRoles } from './collections.js';

function whatProfileCan (profile, item) {
  if (!item || !profile) return 'none';

  const teamRoles = mapRoles(item);
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

export { canRead, canEdit };
