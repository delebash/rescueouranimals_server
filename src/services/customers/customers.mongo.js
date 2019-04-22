
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `customers`. (Can be re-generated.)
const merge = require('lodash.merge');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      company: {
        maxLength: 50,
        bsonType: "string"
      },
      last_name: {
        maxLength: 50,
        bsonType: "string"
      },
      first_name: {
        maxLength: 50,
        bsonType: "string"
      },
      email_address: {
        maxLength: 50,
        bsonType: "string"
      },
      job_title: {
        maxLength: 50,
        bsonType: "string"
      },
      business_phone: {
        maxLength: 25,
        bsonType: "string"
      },
      home_phone: {
        maxLength: 25,
        bsonType: "string"
      },
      mobile_phone: {
        maxLength: 25,
        bsonType: "string"
      },
      fax_number: {
        maxLength: 25,
        bsonType: "string"
      },
      address: {
        bsonType: "string"
      },
      city: {
        maxLength: 50,
        bsonType: "string"
      },
      state_province: {
        maxLength: 50,
        bsonType: "string"
      },
      zip_postal_code: {
        maxLength: 15,
        bsonType: "string"
      },
      country_region: {
        maxLength: 50,
        bsonType: "string"
      },
      web_page: {
        bsonType: "string"
      },
      notes: {
        bsonType: "string"
      },
      attachments: {
        bsonType: "string"
      },
      testint: {
        maxLength: 10,
        bsonType: "number"
      }
    },
    required: [
      "company",
      "last_name",
      "first_name",
      "email_address",
      "job_title",
      "business_phone",
      "home_phone",
      "mobile_phone",
      "fax_number",
      "address",
      "city",
      "state_province",
      "zip_postal_code",
      "country_region",
      "web_page",
      "notes",
      "attachments",
      "testint"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
