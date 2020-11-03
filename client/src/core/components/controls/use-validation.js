import { useTranslation } from 'react-i18next';

export const useValidation = ({ onChange, onValidation, rules }) => {
  const { t } = useTranslation();

  const handleChange = e => {
    onChange(e.target.value);
    handleValidation(e);
  };

  const handleValidation = e => {
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
    onValidation && onValidation(error);
  };

  return { handleChange, handleValidation };
};
