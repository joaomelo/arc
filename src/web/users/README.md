# Users

The module manages state of the user auth, account and preferences management and aldo expositions of profiles to  other modules.

Those features are grouped together because all of them operate mainly over user entity data. Every previous attempt to separate this modules pieces bumped in the intricacy of use cases.

# App Onboarding

App onboarding is done in three components **PageAuth**, **PageSignUp** and **PageSignIn**. Every one of them at the corresponding route: **auth**, **sign-up** and **sign-in**.

When an user attempt to access any route that is not explicitly public without been SIGNED_IN, the app will redirect to **auth**. But any of three routes can be accessed directly by an external link or typing in the address bar. 

**PageAuth** shows loading feedback signaling that the auth status is been resolved while the authService tries to auto login returning users. When auth status resolves, it will redirect to **sign-up** if SIGNED_OUT or to **home** if SIGNED_IN.

**PageSignUp** and **PageSignIn** are those traditional forms. They redirect to **home** if auth status change to SIGNED_IN.

# Auth Status and Route Management

The redirect behavior expected from auth state change events is treated at every component based on the use cases it implements. For example, if a user sign outs from the navbar, that component will redirect to **sign-in**. But if the signed out state is reached while in **PageAuth** we reroute to **sign-up**.

There is no global component observing state change and implement redirects. That not includes protection of private routes which is addressed by the router.

