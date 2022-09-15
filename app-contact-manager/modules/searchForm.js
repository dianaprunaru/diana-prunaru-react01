import { addMessage, clearMessages } from './notificationBar.js';
import { findContact } from './query.js';
import render from './message.js';
import { pluralize } from './utils.js';

// ommit {} for default exports

const searchForm = document.querySelector('.search-form');
// search-form input[name="q"]

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget este elementul pe care am rulat  addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;

  clearMessages();

  const contacts = findContact(queryInput.value.toLowerCase());
  const contactsCount = contacts.length;

  if (contacts.length <= 0) {
    addMessage(render('No contacts found', 'warning'));
  } else {
    addMessage(
      render(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })}.`,
        'success',
      ),
    );
  }

  queryInput.value = '';
});

export default searchForm;
