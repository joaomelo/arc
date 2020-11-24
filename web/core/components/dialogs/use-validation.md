# The Control Validation Design

## Problem

There is a component and we need secure its proper validation in two moments: 
- When content is typed so it can give instant feedback to the user.
- When the form is submitted (even if the component never changed) to avoid a uneeded request to the server.

We also want to reuse the schemas designed for validation in the rest of the app.

## Web Native Behaviour

HTML has a challenge native behaviour.

Beside the declared native html constraints declared together with the element one can tap at the onChange event, check the custom rules set by the app and use the native method [setCustomValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) with "" if everything is fine or set a custom message if some rule is bronken. After a custom message is set the component will fire a [invalid](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) event and will be set in a invalid state.

The dificult here is that if the user never change the value we did not triggered the custom message behaviour and for all effects the control is in valid state and will defeat the form check, more on that bellow.

The form can have have a noValidate property to let we deal with validation progamatically before it is submitted. One can tap at the onSubmit event and run a checkValidity() method at the form to do a check in all children fields. But then, every field that did not triggered the onChange event until then, will have by default a valid state.

IMO we needed a onValidation native event to every wire it to our code. That onValidation should be triggered every time the validity is checked: one some types and when the aprent forms checks the validity, for example.

This [CodesandBox](https://codesandbox.io/s/invalid-event-experiment-z4zf3) illustrates this. See that the empty input is not validated on submission unless something is typed.

## Validation Design

### Moments

Like said in the problem section, we want to show error messages to the users in two moments, when:
- The form tryes to submit and fails due to some error - onSubmit.
- The user types in control - onChange.

### Two Level Challenge

Based on that we need to somehow control behaviour both on the form and on the control element.

At the control level, in every onChange event the element would check if there is an error into the form level schema that is related to him. 

For that to happen, the callback would need to have in its scope the vanilla schema validation function and also the form, so to grab the whole form data and pass it to validation, and then return the error to the object.

The control name property would need to be the same as the schema field so the error could be traced to a control.

The form would also need to do the whole check before submit. This is easy but the form would need a way to signal the controls (that at this points didn't triggered any onChange event) to update error messages accordly.

The solution here is the form onChange event. It fires at every control on change.

So we could update some shared state between form and conttrols that will point to errors messages. This will be updated in two form events: onChange, onSubmit.

### Hook

A hook is a elegant solution to encapsulate this state management.

The hook would receive the vanilla validate function and return the recative validity object and a customized refresh function. This function would receive a form element and update the validity state accordindly at every call.

The validation function could be triggered at onChange and onSubmit form event.

The error messages map would be passed to control componentes at will to be used as source of reactive error messages. The control uses its own name to render the proper message.