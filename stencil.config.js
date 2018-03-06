

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};

exports.config = {
  namespace: 'my-web-components',
  generateDistribution: true,
  generateWWW: false,
  bundles: [{ components: ['my-app'] }]
};