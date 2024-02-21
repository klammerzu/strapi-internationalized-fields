'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('internationalized-fields')
      .service('myService')
      .getWelcomeMessage();
  },
});
