module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/mccollough/'
    : '/'
};
