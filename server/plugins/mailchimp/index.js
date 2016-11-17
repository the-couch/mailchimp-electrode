'use strict'

const Mailchimp =  require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API);
const listId = process.env.MAILCHIMP_LIST;

exports.register = (server, options, next) => {

  const postMailChimp = (request, reply) => {
    let object = JSON.parse(request.payload)
    mailchimp.post('/lists/'+listId+'/members', {
      email_address: object.email,
      status: 'subscribed'
    })
    .then((res) => reply(null, JSON.stringify(res)))
    .catch((err) => reply(null, JSON.stringify(err)));
  }

  server.route({
    method: "POST",
    path: '/subscribe',
    handler: (request, reply) => postMailChimp(request, reply)
  })
  next();
}

exports.register.attributes = {
  name: 'newsletter',
  version: '1.0.0'
}
