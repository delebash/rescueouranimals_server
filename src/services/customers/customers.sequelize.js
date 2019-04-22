
/* eslint quotes: 0 */
// Defines Sequelize model for service `customers`. (Can be re-generated.)
const merge = require('lodash.merge');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    business_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    home_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fax_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state_province: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip_postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    web_page: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attachments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    testint: {
      type: DataTypes.REAL,
      allowNull: false
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
