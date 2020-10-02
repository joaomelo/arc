import React from 'react';
// import { useTranslation } from 'react-i18next';
import { weights, sizes, colors } from '__cli/core/design';

function ControlValidator ({ children, value, rules }) {
  // const { t } = useTranslation();
  // const [message, setMessage] = useState('');

  // const validate = control => {
  //   // if (!control.checkValidity()) return;

  //   // if (!Array.isArray(rules)) return;
  //   // for (const rule of rules) {
  //   //   const errorMessage = rule(control.value);
  //   //   if (errorMessage) {
  //   //     control.setCustomValidity(errorMessage);
  //   //     break;
  //   //   }
  //   // }
  // };

  const control = React.Children.only(children);
  control.onInvalid = e => console.log(e); ;
  // const handleInvalidation = e => {
  //   console.log(e.target.value);
  //   // console.log(e.target.validity);
  //   // console.log({ ...e.target.validity, messageMessage: e.target.messageMessage });
  //   // setMessage({ ...e.target.validity, messageMessage: e.target.messageMessage });
  // };

  // if (validity.valid) return null;

  return (
    <>
      {children}
      {
        <p
          css={{
            color: colors.accent,
            fontSize: sizes.small,
            fontWeight: weights.bold
          }}
        >
          {value}
          {/* {validity.valueMissing && t('components.input-required')}
          {validity.typeMismatch && t('components.input-invalid')}
          {validity.customError && validity.messageMessage} */}
        </p>
      }
    </>
  );
}

export { ControlValidator };
