
/* eslint quotes: 0 */
// Defines Mongoose model for service `customers`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    company: {
      type: String,
      maxLength: 50,
      required: true
    },
    last_name: {
      type: String,
      maxLength: 50,
      required: true
    },
    first_name: {
      type: String,
      maxLength: 50,
      required: true
    },
    email_address: {
      type: String,
      maxLength: 50,
      required: true
    },
    job_title: {
      type: String,
      maxLength: 50,
      required: true
    },
    business_phone: {
      type: String,
      maxLength: 25,
      required: true
    },
    home_phone: {
      type: String,
      maxLength: 25,
      required: true
    },
    mobile_phone: {
      type: String,
      maxLength: 25,
      required: true
    },
    fax_number: {
      type: String,
      maxLength: 25,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      maxLength: 50,
      required: true
    },
    state_province: {
      type: String,
      maxLength: 50,
      required: true
    },
    zip_postal_code: {
      type: String,
      maxLength: 15,
      required: true
    },
    country_region: {
      type: String,
      maxLength: 50,
      required: true
    },
    web_page: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: true
    },
    attachments: {
      type: String,
      required: true
    },
    testint: {
      type: Number,
      maxLength: 10,
      required: true
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
