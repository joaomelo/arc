# Users

The module takes care of the auth flow, account and preferences management and profiles exposure to other modules.

They are together because all operate mainly in the user entity data. Every attempt to separate this modules bumped in the intricacy of operations.

# App Onboarding

App onboarding is done in three components **PageAuth**, **PageSignUp** and **PageSignIn**. Every one of the with an corresponding route **auth**, **sign-up** and **sign-in**.

When the user attempt to access any route explicitly public without been **signed in**, the app will redirect him do **PageAuth**. But the other two routes could be accessed directly. 

**PageAuth** is a loading screen running until the auth status is resolved. If it resolves to SIGNED_OUT it will redirect to **sign-up**. If auth status resolves to SIGNED_IN the route is redirected to **home**.

At **PageSignUp** and **PageSignIn**, nothing will happen if the auth status changes to SIGN_OUT. If auth status change to SIGNED_IN the user will be redirect to **home**.

# Auth Status and Route Management

The redirect behavior expected from the state change on auth status has both local component and app global aspects.

Globally, for example, if a user sign outs at any page, we want the app to redirect to **PageSignIn**. But if that happens at **PageAuth** we need a reroute to **PageSignUp**.

To tackle that, every component that needs to change the auth status will only dispatch actions to the store and all redirect will be managed by a **MonitorAuthStatus** component that will sit at app level and operate like a state machine observing the auth store and current route. 