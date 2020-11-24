# i18n

The i18n module inside the client app abstracts the web client app language management. It bootstraps the translation engine for the app and listen to any relevant app state change that triggers new locale.

The default app language is english. New users also default to that language. After the user sign in, the user preferred language is used and if the user changes that option, the app should reflect that.
