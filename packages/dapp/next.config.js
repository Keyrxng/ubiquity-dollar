/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GIT_COMMIT_REF: require("child_process").execSync("git rev-parse --short HEAD").toString().trim(),
  },
};
