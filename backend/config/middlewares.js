module.exports = [
  'strapi::errors',
   /* Replace 'strapi::security', with this snippet */
      /* Beginning of snippet */
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
      /* End of snippet */
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
    {
    name: 'strapi::cors',
    config: {
      origin: ['https://blog.superapps.com',"https://admin.superapps.com"],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
];
