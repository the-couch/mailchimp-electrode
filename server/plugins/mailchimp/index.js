'use strict'

const Promise = require("bluebird");
const Mailchimp =  require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.token);

exports.register = (server, options, next) => {

  const postMailChimpPromises = () => {
    return mailchimp.post('')
  }

  const postMailChimp = (reply) => {
    return Promise.all(postMailChimpPromises)
      .then((response) => reply(response))
      .catch((err) => reply(err));
  }

  server.route({
    method: "POST",
    path: '/subscribe',
    handler: (request, reply) => postMailChimp(reply)
  })
  next();
}

exports.register.attributes = {
  name: 'newsletter',
  version: '1.0.0'
}
