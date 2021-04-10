import './assets/styles/styles.css';
import EmailsInput from './js/emails-input';
import Utils from './js/utils';

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const utils = new Utils;
    const inputContainerNode = document.querySelectorAll('[emails-input]');

    for(const inputNode of inputContainerNode) {
      const emailsInput = new EmailsInput(inputNode);

      document.querySelector('[data-action="add-email"]')
        .addEventListener('click', function() {
          const randomEmail = `${utils.generateRandomText(15)}@mail.com`;
          emailsInput.add(randomEmail);
        });

      document.querySelector('[data-action="get-emails-count"]')
        .addEventListener('click', function() {
          alert('Valid email count: ' + emailsInput.getValidEmails().length);
        });
    }
  });
}());