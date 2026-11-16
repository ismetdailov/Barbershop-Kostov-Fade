module.exports = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: '/галерия',
        destination: '/gallery',
      },
      {
        source: '/цени',
        destination: '/Prices',
      },
    ];
  },
};
