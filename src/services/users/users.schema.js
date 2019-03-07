// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Users',
  description: 'Users database.',
  // !end
  // !code: schema_definitions
  fakeRecords: 6,
  // !end
  // Fields in the model.
  properties: {
    // !code: schema_properties
    id:        { type: 'ID' },
    email:     { minLength: 8, maxLength: 40, faker: 'internet.email' },
    firstName: { minLength: 2, maxLength: 15, faker: 'name.firstName' },
    lastName:  { minLength: 2, maxLength: 30, faker: 'name.lastName' },
    password:  { chance: { hash: { length: 60 } } },
    roleId:    { type: 'ID', faker: { fk: 'roles:random' } },
    // !end
  },
};
