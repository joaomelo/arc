import { addMessage } from './queue';

function showInfo (text) {
  addMessage({ text, type: 'info' });
}

function showSuccess (text) {
  addMessage({ text, type: 'success' });
}

function showError (text) {
  addMessage({ text, type: 'error' });
};

export { showInfo, showSuccess, showError };
