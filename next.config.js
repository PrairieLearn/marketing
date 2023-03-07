module.exports = {
  async redirects() {
    return [
      {
        source: "/slack",
        destination:
          "https://join.slack.com/t/prairielearn/shared_invite/zt-13kx0hg6v-uuC3kyt_3iBxjSpyhCbYVw",
        permanent: true,
      },
    ];
  },
};
