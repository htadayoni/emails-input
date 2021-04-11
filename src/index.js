import './assets/styles/styles.css';
import EmailsInput from './js/emails-input';
import Utils from './js/utils';

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const utils = new Utils;
    const inputContainerNode = document.querySelector('#emails-input');

    const emailsInput = new EmailsInput(inputContainerNode);

    document.querySelector('[data-action="add-email"]')
      .addEventListener('click', function() {
        const randomEmail = `${utils.generateRandomText(15)}@gmail.com`;
        emailsInput.add(randomEmail);
      });

    document.querySelector('[data-action="get-emails-count"]')
      .addEventListener('click', function() {
        alert('Valid email count: ' + emailsInput.getValidEmails().length);
      });
  });
}());