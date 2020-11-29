# Users

The module manages state of the user auth, account and preferences management and aldo expositions of profiles to  other modules.

Those features are grouped together because all of them operate mainly over user entity data. Every previous attempt to separate this modules pieces bumped in the intricacy of use cases.

# App Onboarding

App onboarding is done in three components **PageAuth**, **PageSignUp** and **PageSignIn**. Every one of them at the corresponding route **auth**, **sign-up** and **sign-in**.

When an user attempt to access any route that is not explicitly public without been SIGNED_IN, the app will redirect to **auth**. But any of three routes can be accessed directly by an external link or typing in the address bar. 

**PageAuth** shows a loading screen signaling that the auth status is been resolved while the authService tries to auto login returning users. When auth status resolves, it will redirect to **sign-up** if SIGNED_OUT or to **home** if SIGNED_IN.

**PageSignUp** and **PageSignIn** are those traditional forms. They redirect to **home** if auth status change to SIGNED_IN.

# Auth Status and Route Management

The redirect behavior expected from the state change on auth status has both local component and app global aspects.

Globally, for example, if a user sign outs at any private page, we want the app to redirect to **PageSignIn**. But if the signed out state is reached at **PageAuth** we have a different context and now need a reroute to **PageSignUp**.

Whe shouldn't do global route management at module business level. That will create a dependency from business towards app layers. To tackle that, every component that needs to change route based on it use cases, uses the router mechanism inside the components (so it could be injected at the framework level). 

Protection of private routes is done by the router element so it could depend of the auth module, a inner layer in the router perspective.

