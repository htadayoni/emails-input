# Emails input

emails-input is a vanilla javascript library that you can use in every project and every framework for input emails as a tag and validate emails.

You can visit a demo of emails-input in [this link](https://htadayoni.github.io/emails-input/)

## More Detail
  - emails-input is a pure library and has not dependent on any frameworks.
  - emails-input works in the latest version of all modern browsers and IE 11.
  - you can use it on multi-field in a page or single form.

## How to build library
  You can use **npm run build** to build a `bundle.js` file in `dist` directory.
  Also, you can visit a demo in `demo/index.html`

## How to automatic test library
  You can use **npm run test** to start the test process.
  Test is written by jsdom.
## How to use

First, you should add bundle file to your project.

```HTML
<script src="emails-input.js"></script>
```

Second, you should create a simple div in your project with an ID

```HTML
<div id="emails-input"></div>
```

Finally, you should initialize the component on your target item

```javascript
var inputContainerNode = document.querySelector('#emails-input');
var emailsInput = EmailsInput(inputContainerNode);
```

# Methods

### .addNewEmail(email)

Add new email to emails list

```javascript
emailsInput.addNewEmail('email@email.com');
```

### .deleteEmail(email)

Deletes an email from the emails list.

```javascript
emailsInput.deleteEmail('email@email.com');
```

### .deleteLastEmail()

Deletes the last email from emails list.

```javascript
emailsInput.deleteLastEmail();
```

### .getValidEmails()

Returns an array of valid emails in emails list.

```javascript
const validEmails = emailsInput.getValidEmails();
```
