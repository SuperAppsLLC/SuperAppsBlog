module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                'connect-src': ["'self'", 'https:'],
                'img-src': ["'self'", 'data:', 'blob:'],
                'media-src': ["'self'", 'data:', 'blob:'],
            },
        },
    },
  },
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
