import { clearMessages } from './notificationBar.js';

export default (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');

  messageContainer.classList.add('alert', `alert-${type}`);

  // FYI exista un textContent
  messageContainer.textContent = message;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times';
  const close = messageContainer.appendChild(closeBtn);
  close.addEventListener('click', clearMessages);

  closeBtn.classList.add(
    'border',
    'border-0',
    'rounded',
    'text-white',
    'bg-success',
    'float-end',
    'd-flex',
    'align-middle',
  );

  return messageContainer;
};
