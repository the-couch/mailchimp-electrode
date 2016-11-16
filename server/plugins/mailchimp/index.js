'use strict'

const Promise = require("bluebird");
const Mailchimp =  require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API);

exports.register = (server, options, next) => {

  const postMailChimpPromises = () => {
    console.log('mailchimp promise');
    return mailchimp.post('/lists/8fb6d16d29/members', {
      email_address: email,
      status: 'subscribed'
    }, (err, result) => {
      if (err) {
        console.log(err)
        return err
      } else {
        return result
      }
    })
  }

  const postMailChimp = (request, reply) => {
    console.log('anything', request, reply);

    // return Promise.all(postMailChimpPromises)
    //   .then((response) => reply(response))
    //   .catch((err) => reply(err));
  }

  server.route({
    method: "GET",
    path: '/subscribe',
    handler: (request, reply) => postMailChimp(request, reply)
  })
  next();
}

exports.register.attributes = {
  name: 'newsletter',
  version: '1.0.0'
}
