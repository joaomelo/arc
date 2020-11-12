# Problem

There is a component and we need secure its proper validation in two moments: 
- When content is typed so it can give instant feedback to the user.
- When the form is submitted (even if the component never changed) to avoid a uneeded request to the server.

We also want to reuse the schemas designed for validation in the rest of the app.

# Web Native Behaviour

HTML has a challenge native behaviour.

Beside the declared native html constraints declared together with the element one can tap at the onChange event, check the custom rules set by the app and use the native method [setCustomValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) with "" if everything is fine or set a custom message if some rule is bronken. After a custom message is set the component will fire a [invalid](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) event and will be set in a invalid state.

The dificult here is that if the user never change the value we did not triggered the custom message behaviour and for all effect the control is valid state and will defeat the form check, more on that.

The form can have have a noValidate property to let we deal with validation progamatically. One can tap at the onSubmit event and run a checkValidity() method at the form to do a check in all children fields. But then, every field that did not triggered the onChange event until then, will have by default a valid state.

IMO we needed a onValidation native event to every wire it to our code. That onValidation should be triggered every time the validity is checked: one some types and when the aprent forms checks the validity, for example.

This [CodesandBox](https://codesandbox.io/s/misty-fog-z4zf3?file=/src/App.js) illustrates this. See that the empty input is not validated on submission unless something is typed.

# Do we Want to Validate at Component or Form Level

Another route is to forget the control level and treat everything at form level. Pass a schema to the form, somehow we need to programatically mount the data object that will be dealt by the schema, pehaps during form submission, than validate. The error messages that came from the schema will be the same link system be passed to controls to proper show the error message.

By this mechanism complexlity will reside in the form and the control will only receive a error message by prop. The simpler candidate approcach would be the programmer name every control as the corresponding field in the schema.

That would tigth every validation to be at form level and by schema. So the tradeoff is to lose the isolation approach of componentization on validation vertical aspect. Seems ok?!