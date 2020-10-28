import { useDispatch } from 'react-redux';
import { useRequest } from '__cli/core/api';
import { i18n } from '__cli/core/i18n';
import { sign, signOut } from './slice';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const callback = payload => dispatch(sign(payload));

  return useRequest({
    method: 'post',
    route: '/auth/sign-in',
    callback
  });
};

export const useSignUp = () => {
  const dispatch = useDispatch();
  const callback = payload => dispatch(sign(payload));

  return useRequest({
    method: 'post',
    route: '/auth/sign-up',
    callback
  });
};

export const useUpdateEmail = () => {
  const dispatch = useDispatch();
  const callback = payload => dispatch(sign(payload));

  return useRequest({
    method: 'post',
    route: 'auth/update-email',
    callback,
    message: i18n.t('auth.email-updated')
  });
};

export const useUpdatePassword = () => {
  const dispatch = useDispatch();
  const callback = payload => dispatch(sign(payload));

  return useRequest({
    method: 'post',
    route: 'auth/update-password',
    callback,
    message: i18n.t('auth.password-updated')
  });
};

export const useSignOut = () => {
  const dispatch = useDispatch();
  return {
    request: () => dispatch(signOut())
  };
};
