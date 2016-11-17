'use strict'

const Promise = require("bluebird");
const Mailchimp =  require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API);

exports.register = (server, options, next) => {

  const postMailChimp = (request, reply) => {
    let object = JSON.parse(request.payload)
    mailchimp.post('/lists/8fb6d16d29/members', {
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
