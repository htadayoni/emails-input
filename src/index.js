import './assets/styles/styles.css';
import EmailsInput from './js/emails-input';

window.EmailsInput = function createEmailsInput(rootNode) {
  return new EmailsInput(rootNode);
};