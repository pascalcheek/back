/**
 * presentation controller
 */

export default {
  async findAll(ctx) {
    const entry = await strapi.entityService.findMany('api::presentation.presentation', 
{ populate: { speakers: true } });
    ctx.body = entry;
  },
  async findOne(ctx) {
    const { id } = ctx.query;
    if (!id) {
	const entry = await strapi.entityService.findOne('api::presentation.presentation', 1, 
      { populate: { speakers: true } });
    	ctx.body = entry;
    } else {
    const entry = await strapi.entityService.findOne('api::presentation.presentation', id, { populate: { speakers: true } });

    if (!entry) {
      return ctx.notFound('Presentation not found');
    }

    ctx.body = entry;
  }
  },
};
