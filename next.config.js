module.exports = {
  reactStrictMode: true,
  webpack5: false,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer:{
              test:/\.(js|ts)x?$/,
            },
    });

    return config
  },
};
// declare module "*.svg" {
//   const content : any;
// export default content;
// }