module.exports = {
    images: {
      domains: ['edamam-product-images.s3.amazonaws.com'],
    },
     // added to deploy to pages
     basePath: '/github-pages',
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
