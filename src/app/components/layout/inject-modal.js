import { createPortal } from 'react-dom';

const modalContainer = document.body;

export function injectModal (component) {
  return createPortal(component, modalContainer);
};
