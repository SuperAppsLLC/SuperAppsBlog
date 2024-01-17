module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  io: {
    enabled: false,
    config: {
      IOServerOptions: {
        cors: { origin: "http://localhost:3000", methods: ["GET"] },
      },
      contentTypes: {
        message: "*",
        chat: ["create"],
      },
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
          },
          path: "socket.io",
        },
      ],
    },
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  },
});