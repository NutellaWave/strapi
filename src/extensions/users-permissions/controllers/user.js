'use strict';

const _ = require('lodash');
const { sanitize } = require('@strapi/utils');

module.exports = {
  async updateMe(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('No authorization header was found');
    }

    // Ne pas permettre de modifier certains champs sensibles
    const sensitiveFields = ['password', 'email', 'confirmed', 'blocked', 'role'];
    const filteredData = _.omit(ctx.request.body, sensitiveFields);

    try {
      const updatedUser = await strapi.db.query('plugin::users-permissions.user').update({
        where: { id: user.id },
        data: filteredData,
      });

      const sanitizedUser = await sanitize.contentAPI.output(updatedUser, strapi.getModel('plugin::users-permissions.user'));
      return ctx.send(sanitizedUser);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
      return ctx.internalServerError('Erreur serveur lors de la mise à jour du profil');
    }
  }
};
