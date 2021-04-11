import Utils from './utils';

class EmailsInput {
  constructor(containerNode) {
    this.utils = new Utils;
    this.containerNode = containerNode;
    this.id = `emails-input-${this.utils.generateRandomText(20)}`;
    this.emailList = [];
    this.setEventListeners();
    this.init();
  }

  init() {
    this.containerNode.innerHTML = ' \
      <div class="emails emails-input"> \
        <input type="text" role="emails-input" class="emails-input__textInput" placeholder="add more people ..."> \
      </div> \
    ';
  }

  setEventListeners () {
    this.containerNode.addEventListener('click', event => {
      if (event.target.classList.contains('emails-input__remove')) {
        this.deleteEmail(event.target.parentNode);
      }
    });

    this.containerNode.addEventListener('focusout', event => {
      this.addEmail(event.target, event.target.value);
    });

    this.containerNode.addEventListener('paste', event => {
      if (!event.target.matches('input')) 
        return;
      
      event.preventDefault();
      const chunks = event.clipboardData.getData('Text').split(',');
      if (chunks.length > 1) {
        chunks.forEach(chunk => { this.addEmail(event.target, chunk); });
        return;
      } 

      const chunk = chunks[0];
      if (this.utils.isValidEmail(chunk)) {
        this.addEmail(event.target, chunk);
        return;
      }

      event.target.value += chunk;
    });

    this.containerNode.addEventListener('keypress', event => {
      if (event.keyCode === 13 || event.keyCode === 44){
        event.preventDefault();
        this.addEmail(event.target, event.target.value);
      }
    });

    this.containerNode.addEventListener('keydown', event => {
      if (event.keyCode === 8 && !event.target.value) {
        this.deleteLastEmail();
      }
    });
  }

  getItems() {
    return Array.prototype.slice.call(this.containerNode.querySelectorAll('.emails-input .emails-input__email'));
  }

  addEmail(refElement, email) {
    const trimEmail = email && email.trim();
    if (!trimEmail) return;

    const item = document.createElement('span');
    item.setAttribute('role', 'emails-input__email');
    item.classList.add('emails-input__email');
    if (!this.utils.isValidEmail(trimEmail))
      item.classList.add('invalid');

    item.innerHTML = `<span class="emails-input__emailContent">${trimEmail}</span><i role="emails-input__remove" class="emails-input__remove"></i>`;

    refElement.parentNode.insertBefore(item, refElement);
    refElement.value = '';
  }

  addNewEmail(email) {
    const refElement = this.containerNode.querySelector('input');
    this.addEmail(refElement, email);
  }

  deleteEmail(email) {
    this.containerNode.querySelector('.emails-input').removeChild(email);
  }

  deleteLastEmail() {
    const items = this.getItems();
    if (!items.length) return;
    const lastItem = items[items.length - 1];
    
    this.deleteEmail(lastItem);
  }

  getValidEmails() {
    const items = this.getItems();
    
    return items
      .filter(function(item) { return !item.classList.contains('invalid'); })
      .map(function(item) { return item.firstChild.textContent; });
  }

  createRandomEmail(){
    const randomEmail = `${this.utils.generateRandomText(15)}@gmail.com`;
    this.addNewEmail(randomEmail);
  }
}

export default EmailsInput;
