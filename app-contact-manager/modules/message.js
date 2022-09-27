import { clearMessages } from './notificationBar.js';

export default (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');

  messageContainer.classList.add('alert', `alert-${type}`);

  // FYI exista un textContent
  messageContainer.textContent = message;

  messageContainer.innerHTML = `
  <div>${message}</div>
  <button type="button"
      title="Close"
      id="close-button"
      class="btn btn-close close-button"
    ></button>
  `;

  const closeBtn = document.getElementById('close-button');
  closeBtn.addEventListener('click', clearMessages);

  return messageContainer;
};
