module.exports = {
  reactStrictMode: true,
  distDir: 'build',  // Ensure the build directory is correctly set
  async rewrites() {
    return [
      {
        source: '/professional/:path*',
        destination: '/:path*',
      },
    ];
  },
};
