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
  strapi.customFields.register({
    name: "internationalized-blocks",
    plugin: "internationalized-fields",
    type: "json",
    inputSize: {
      // optional
      default: 12,
      isResizable: false,
    },
  });
};