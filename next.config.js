module.exports = {
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
