import type { Core } from "@strapi/strapi";

// Public read access needed for the Next.js frontend to fetch content
// without an API token. Idempotent: only flips `enabled` on permission
// rows Strapi already created for the Public role, never creates rows.
const PUBLIC_READ_ACTIONS = [
  "api::app.app.find",
  "api::app.app.findOne",
  "api::category.category.find",
  "api::category.category.findOne",
  "api::global.global.find",
  "api::blog-post.blog-post.find",
  "api::blog-post.blog-post.findOne",
  "api::promo-code.promo-code.find",
  "api::promo-code.promo-code.findOne",
];

async function enablePublicReadPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });

  if (!publicRole) return;

  // In Strapi 5, a permission is "enabled" for a role simply by the
  // existence of a permission row linked to that role — there is no
  // separate enabled flag. So we only need to create the rows that
  // are missing, never update existing ones.
  const existing = await strapi
    .query("plugin::users-permissions.permission")
    .findMany({
      where: { role: publicRole.id, action: { $in: PUBLIC_READ_ACTIONS } },
    });
  const existingActions = new Set(existing.map((p) => p.action));

  const toCreate = PUBLIC_READ_ACTIONS.filter(
    (action) => !existingActions.has(action)
  );

  await Promise.all(
    toCreate.map((action) =>
      strapi
        .query("plugin::users-permissions.permission")
        .create({ data: { action, role: publicRole.id } })
    )
  );
}

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Register custom logic here if needed
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await enablePublicReadPermissions(strapi);
    strapi.log.info("AllYonoGuru backend started.");
  },
};
