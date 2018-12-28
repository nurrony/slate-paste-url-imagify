module.exports = {
  presets: [
    // @babel/env config
    [
      '@babel/env',
      {
        targets: {
          node: '6.10',
          browsers: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all', 'safari >= 7']
        },
        useBuiltIns: 'usage',
        debug: false
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
};
