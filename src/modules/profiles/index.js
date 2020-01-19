// kickstarting module
import { bindProfileSetup } from './domain';
import { bindProfiles } from './data';

bindProfileSetup();
bindProfiles();

// export public asssets
export { EditProfile, LinkPreferences, SelectProfiles } from './ui';
