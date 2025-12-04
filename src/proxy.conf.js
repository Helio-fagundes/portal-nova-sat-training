const numero = 3000;

const PROXY_CONFIG = {
  '/users/*': {
    target: `https://fluffy-succotash-4p4j55vpgg5277jp-${{numero}}.app.github.dev/`,
    pathRewrite: {
      '^/users': '/users',
    },
    logLevel: 'debug',
    secure: false,
    changeOrigin: false,
  }
};


module.exports = PROXY_CONFIG;

