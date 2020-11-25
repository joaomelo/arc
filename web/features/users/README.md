# Users

The module takes care of the auth flow, account and preferences management and profiles exposure to other modules.

Those features are grouped together because all of them operate mainly over user entity data. Every previous attempt to separate this modules pieces bumped in the intricacy of use cases.

# App Onboarding

App onboarding is done in three components **PageAuth**, **PageSignUp** and **PageSignIn**. Every one of them at the corresponding route **auth**, **sign-up** and **sign-in**.

When an user attempt to access any route that is not explicitly public without been SIGNED_IN, the app will redirect to **auth**. But any of three routes can be accessed directly by an external link or typing in the address bar. 

The app tries to auto login returning users, so **PageAuth** shows a loading screen signaling that the auth status is been resolved. When auth status resolves, it will redirect to **sign-up** if SIGNED_OUT or to **home** if SIGNED_IN.

**PageSignUp** and **PageSignIn** are those traditional forms. Nothing will happen if the auth status changes to SIGN_OUT at that routes. If auth status change to SIGNED_IN, we assume the form completed its function and the user will be redirect to **home**.

# Auth Status and Route Management

The redirect behavior expected from the state change on auth status has both local component and app global aspects.

Globally, for example, if a user sign outs at any private page, we want the app to redirect to **PageSignIn** immediately. But if that happens at **PageAuth** we have a different context and need now a reroute to **PageSignUp**.

To tackle that, every component that needs to change the auth status will only dispatch actions to the store and all route guardianship will be managed by **MonitorAuthStatus** component. It will sit at app level and observe auth status and route activity, doing proper activation or blocking of route changes when needed.

# Firabase Auth

