import React from 'react';
import { useTranslation } from 'react-i18next';

function BaseInput ({ type, value, onChange, onValidation, rules, ...rest }) {
  const { t } = useTranslation();

  const handleChange = e => {
    onChange(e.target.value);
    applyCustomValidation(e);
  };

  const applyCustomValidation = e => {
    const control = e.target;
    const { valueMissing, typeMismatch } = control.validity;
    let error = '';

    if (valueMissing) {
      error = t('components.input-required');
    }

    if (!error && typeMismatch) {
      error = t('components.input-invalid');
    }

    if (!error && Array.isArray(rules)) {
      for (const rule of rules) {
        const ruleError = rule(control.value);
        if (ruleError) {
          error = ruleError;
          break;
        }
      }
    };

    control.setCustomValidity(error);
    onValidation(error);
  };

  return (
    <input
      {...rest}
      type={type || 'text'}
      value={value}
      onChange={handleChange}
      onInvalid={applyCustomValidation}
      css={{
        display: 'block',
        width: '100%',
        ':focus': {
          outlineWidth: 'thick'
        }
      }}
    />
  );
}

export { BaseInput };
