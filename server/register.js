"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "internationalized",
    plugin: "internationalized-fields",
    type: "json",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};