export default({env}) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'demycky87',
        api_key: '419857349381698',
        api_secret: 'iHNqW-Xx9ScjhhSHxCbaO8bOtXQ',
        sizeOptimization: false,
        responsiveDimensions: false,
    },
      actionOptions: {
        upload: {
            
        },
        uploadStream: {},
        delete: {},
      },
    },
  },
});