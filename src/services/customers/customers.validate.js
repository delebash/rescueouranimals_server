
/* eslint quotes: 0 */
// Validation definitions for validateSchema hook for service `customers`. (Can be re-generated.)
const { validateSchema } = require('feathers-hooks-common');
const merge = require('lodash.merge');
const ajv = require('ajv');
// !code: imports // !end
// !code: init // !end

// !<DEFAULT> code: set_id_type
// eslint-disable-next-line no-unused-vars
const ID = 'integer';
// !end

let base = merge({},
  // !<DEFAULT> code: base
  {
    title: "Customers",
    description: "Customers database.",
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
    ],
    uniqueItemProperties: [],
    properties: {
      id: {
        type: ID
      },
      company: {
        type: "string",
        maxLength: 50
      },
      last_name: {
        type: "string",
        maxLength: 50
      },
      first_name: {
        type: "string",
        maxLength: 50
      },
      email_address: {
        type: "string",
        maxLength: 50
      },
      job_title: {
        type: "string",
        maxLength: 50
      },
      business_phone: {
        type: "string",
        maxLength: 25
      },
      home_phone: {
        type: "string",
        maxLength: 25
      },
      mobile_phone: {
        type: "string",
        maxLength: 25
      },
      fax_number: {
        type: "string",
        maxLength: 25
      },
      address: {
        type: "string"
      },
      city: {
        type: "string",
        maxLength: 50
      },
      state_province: {
        type: "string",
        maxLength: 50
      },
      zip_postal_code: {
        type: "string",
        maxLength: 15
      },
      country_region: {
        type: "string",
        maxLength: 50
      },
      web_page: {
        type: "string"
      },
      notes: {
        type: "string"
      },
      attachments: {
        type: "string"
      },
      testint: {
        type: "number",
        maxLength: 10
      }
    }
  },
  // !end
  // !code: base_more // !end
);
// !code: base_change // !end

let create = merge({},
  base,
  // !code: create_more // !end
);

let update = merge({},
  base,
  // !code: update_more // !end
);

let patch = merge({},
  base,
  // !code: patch_more // !end
);
delete patch.required;
// !code: all_change // !end

let validateCreate = options => {
  // !<DEFAULT> code: func_create
  return validateSchema(create, ajv, options);
  // !end
};

let validateUpdate = options => {
  // !<DEFAULT> code: func_update
  return validateSchema(update, ajv, options);
  // !end
};

let validatePatch = options => {
  // !<DEFAULT> code: func_patch
  return validateSchema(patch, ajv, options);
  // !end
};

let quickValidate = (method, data, options) => {
  try {
    if (method === 'create') { validateCreate(options)({ type: 'before', method: 'create', data }); }
    if (method === 'update') { validateCreate(options)({ type: 'before', method: 'update', data }); }
    if (method === 'patch') { validateCreate(options)({ type: 'before', method: 'patch', data }); }
  } catch (err) {
    return err;
  }
};
// !code: validate_change // !end

let moduleExports = {
  create,
  update,
  patch,
  validateCreate,
  validateUpdate,
  validatePatch,
  quickValidate,
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
