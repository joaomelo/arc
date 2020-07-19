import { fireapp, fireauth } from '__cli/core/firebase';

const authService = fireauth;

// long reaching for EmailAuthProvider class reference
// sadly classes are not directly available in auth
const authProvider = fireapp.firebase_.auth.EmailAuthProvider;

function extractUserData (serviceUser) {
  const userData = {};
  const businessFields = [
    'uid',
    'displayName',
    'email',
    'emailVerified',
    'isAnonymous',
    'phoneNumber',
    'photoURL'
  ];
  businessFields.forEach(field => {
    userData[field] = serviceUser[field];
  });

  return userData;
}

export { authService, authProvider, extractUserData };
