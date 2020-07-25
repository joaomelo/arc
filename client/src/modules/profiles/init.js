import { bindCollectionToAuth } from '__cli/core/collection';
import { profilesCollection, plugProfileAuthSync, plugLocaleSync } from './domain';

bindCollectionToAuth(profilesCollection);
plugProfileAuthSync();
plugLocaleSync();
