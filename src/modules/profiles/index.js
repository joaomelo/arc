// kickstarting module
import { bindProfileCreation } from './domain';
import { bindProfiles } from './store';
bindProfiles();
bindProfileCreation();

// export public asssets
export { getProfiles, getProfile } from './store';
