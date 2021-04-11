const { ok, deepEqual } = require('assert')
const { load } = require('./tools/dom')
const { within } = require('@testing-library/dom')
const userEvent = require('@testing-library/user-event').default

describe('EmailsInput', function() {
  beforeEach(async function() {
    const dom = await load('demo/index.html')
    this.container = within(dom.window.document)
  })

  it('should load emails input on page load', function() {
    const emailsInput = this.container.getByRole('emails-input')
    ok(emailsInput)
  })

  it('should create an email by {enter}', async function() {
    const emailsInput = this.container.getByRole('emails-input')
    await userEvent.type(emailsInput, 'h.tadayoni89@gmail.com{enter}')

    ok(this.container.getByText('h.tadayoni89@gmail.com'))
  })

  it('should create an email by comma', async function() {
    const emailsInput = this.container.getByRole('emails-input')
    await userEvent.type(emailsInput, 'h.tadayoni89@gmail.com,')

    ok(this.container.getByText('h.tadayoni89@gmail.com'))
  })

  it('should create multiple emails', async function() {
    const items = ['test.invalid', 'h.tadayoni89@gmail.com', 'h.tadayoni@hotmail.com']
    const emailsInput = this.container.getByRole('emails-input')
    await userEvent.type(emailsInput, items.join('{enter}').concat('{enter}'))

    items.forEach(item => ok(this.container.getByText(item)))
  })

  it('should delete by entering {backspace}', async function() {
    const emailsInput = this.container.getByRole('emails-input')
    await userEvent.type(emailsInput, 'invalid.user{enter}')
    ok(this.container.getByText('invalid.user'))

    await userEvent.type(emailsInput, '{backspace}')
    ok(this.container.queryByText('invalid.user') === null)
  })

  it('should delete by clicking on the remove link', async function() {
    const emailsInput = this.container.getByRole('emails-input')
    await userEvent.type(emailsInput, 'invalid.user{enter}')
    userEvent.click(this.container.getByRole('emails-input__remove'))
    ok(this.container.queryByText('invalid.user') === null)
  })
})


